import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../../GraphQL/Query/Articles';
import Tags from '../Common/Display/Tags';
import { CLIENT_ROUTES } from '../../Routes';
import InputShell from '../Common/Form/InputShell';
import Text from '../Common/Form/Text';
import Alert from '../Common/Display/Alert';
import { Debouncer } from '../../Util/Debouncer';

function ArticleGrid({ title, description, tags, created, author }) {
  return (
    <div className="article grid-item">
      <div className="grid-item-title">
        <h2>{title}</h2>
        <p>{description}</p>
        <Tags tags={tags} />
      </div>
      <div className="grid-item-footer">
        <p>
          Written By {author.firstName} {author.lastName}
        </p>
        <sub>{moment(created).format('DD MMM, YYYY')}</sub>
      </div>
    </div>
  );
}

export default function ArticlesGrid() {
  const [search, setSearch] = useState('');
  const [getArticles, { loading, error, data }] = useLazyQuery(ARTICLES, { errorPolicy: 'all' });

  useEffect(() => {
    if (search) {
      Debouncer(() => {
        getArticles({
          variables: {
            keywords: search
              .split(' ')
              .map(s => s.trim())
              .filter(Boolean)
          }
        });
      }, 1000);
    } else {
      getArticles();
    }
  }, [search, getArticles]);

  if (loading || data === undefined) return null;
  if (error)
    return (
      <Alert title="Error" subtitle="An Error Occurred Fetching Articles :(" status="danger" />
    );

  return (
    <>
      <InputShell
        id="article-search"
        label="Search Articles"
        subLabel={search ? `Searching by keywords: ${search.split(' ').join(', ')}` : null}
      >
        <Text name="article-search" value={search} onChange={e => setSearch(e.target.value)} />
      </InputShell>
      {data.articles.length === 0 && (
        <Alert title="Info" subtitle="No Records Found" status="info" />
      )}
      <div className="articles-grid grid">
        {data.articles.map(article => {
          return (
            <Link key={article.id} to={CLIENT_ROUTES.ARTICLE(article.id)}>
              <ArticleGrid
                title={article.title}
                description={article.description}
                tags={article.tags}
                created={article.created}
                author={article.author}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
