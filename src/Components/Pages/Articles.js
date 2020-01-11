import React, {useEffect, useState} from 'react';
import {useLazyQuery} from '@apollo/react-hooks';
import ArticleTile from "../ArticleTile";
import {ALL_ARTICLES} from "../../GraphQL/Articles";
import GridContainer from "../Common/Grid/GridContainer";
import Button from "../Common/Button";
import InputText from "../Common/InputText";
import Alert from "../Common/Alert";
import {LinearProgress} from "@material-ui/core";
import Debouncer from "../../Util/Debouncer";

export default function ArticlesPage() {
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(null);
    const [search, setSearch] = useState("");
    const [getArticles, {loading, data, error}] = useLazyQuery(ALL_ARTICLES);

    useEffect(() => {
        getArticles({variables: {limit, offset}})
    }, [limit, offset]);

    if (loading) return <LinearProgress/>;
    if (error) return <Alert title={error.message} status="danger"/>;

    return (
        <div className="page page-articles">
            <div className="page-container">
                <div className="page-title">
                    <h1>Articles</h1>
                    <p>Only the very weak-minded refuse to be influenced by literature and poetry.</p>
                    <sub>Showing {data !== undefined && data.article.length} Results</sub>
                </div>
                <div className="article-search">
                    <InputText id="article-search" name="article-search"
                               bottomLabel={search && `Showing articles with keyword: ${search}`}
                               placeholder="Search Articles..." onChange={e => {
                        e.persist();
                        setSearch(e.target.value);
                        Debouncer(() => {
                            getArticles({variables: {keyword: e.target.value}});
                        }, 850);
                    }}
                               value={search}/>
                </div>
                <GridContainer>
                    {data !== undefined && data.article.map(article => {
                        return <ArticleTile key={article.id} id={article.id} title={article.title}
                                            description={article.description} tags={article.tags}
                                            created={article.created}
                                            author={article.author}/>
                    })}
                    {(data !== undefined && data.article.length === 0) && <sub>No Results Found</sub>}
                </GridContainer>
                {(data !== undefined && data.article.length !== 0 && data.article.length === limit) &&
                <Button title="Load More" status="default" onClick={() => {
                    setLimit(limit + 10);
                }}/>}
            </div>
        </div>
    )
}