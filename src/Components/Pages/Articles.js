import React, {useState} from 'react';
import {useQuery} from '@apollo/react-hooks';
import ArticleTile from "../ArticleTile";
import {ALL_ARTICLES, ARTICLE_QUERY} from "../../GraphQL/Articles";
import GridContainer from "../Common/Grid/GridContainer";
import Button from "../Common/Button";
import InputText from "../Common/InputText";
import Alert from "../Common/Alert";
import {LinearProgress} from "@material-ui/core";

export default function ArticlesPage() {
    const [limit, setLimit] = useState(null);
    const [offset, setOffset] = useState(null);
    const [search, setSearch] = useState("");
    const {loading, error, data} = useQuery(ALL_ARTICLES, {variables: {limit, offset}});

    if (loading) return <LinearProgress/>;
    if (error) return <Alert title={error.message} status="danger" />;

    return (
        <div className="page page-articles">
            <div className="page-container">
                <div className="page-title">
                    <h1>Articles</h1>
                    <p>Only the very weak-minded refuse to be influenced by literature and poetry.</p>
                    <sub>Showing {data.article.length} Results</sub>
                </div>
                <div className="article-search">
                    <InputText id="article-search" name="article-search"
                               bottomLabel={search && `Showing results with keyword: ${search}`}
                               placeholder="Search Articles..." onChange={e => setSearch(e.target.value)} value={search}/>
                </div>
                <GridContainer>
                    {data.article.map(article => {
                        return <ArticleTile key={article.id} id={article.id} title={article.title}
                                            description={article.description} tags={article.tags}
                                            created={article.created}
                                            author={article.author}/>
                    })}
                </GridContainer>
                <Button title="Load More" status="default" onClick={() => {
                    limit === null ? setLimit(20) : setLimit(limit + 10);
                }}/>
            </div>
        </div>
    )
}