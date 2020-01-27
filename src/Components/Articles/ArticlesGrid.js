import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import {ARTICLES} from "../../GraphQL/Query/Articles";
import ArticleTags from "./ArticleTag";
import moment from "moment";
import {Link} from "react-router-dom";
import {CLIENT_ROUTES} from "../../Routes";
import InputShell from "../Common/Form/InputShell";
import Text from "../Common/Form/Text";

function ArticleGrid({title, description, tags, created, author}){
    return (
        <div className="article article-grid-item">
            <div className="grid-item-title">
                <h2>{title}</h2>
                <p>{description}</p>
                <ArticleTags tags={tags}/>
            </div>
            <div className="grid-item-footer">
                <p>Written By {author.firstName} {author.lastName}</p>
                <sub>{moment(created).format("DD MMM, YYYY")}</sub>
            </div>
        </div>
    )
}

export default function ArticlesGrid({}) {
    const [search, setSearch] = useState("");
    const { loading, error, data } = useQuery(ARTICLES);

    if (loading) return null;
    if (error) return `Error! ${error}`;

    console.log(data);

    return (
        <>
            <InputShell id="article-search" label="Search Articles">
                <Text name="article-search" value={search} onChange={e => setSearch(e.target.value)} />
            </InputShell>
            <div className="articles-grid">
                {data.articles.map(article => {
                    return <Link key={article.id} to={CLIENT_ROUTES.ARTICLE(article.id)}><ArticleGrid title={article.title} description={article.description} tags={article.tags} created={article.created} author={article.author} /></Link>
                })}
            </div>
        </>
    )
}