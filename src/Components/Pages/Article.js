import React from "react";
import {useParams} from "react-router-dom";
import ReactMarkdown from "react-markdown";
import {useQuery} from "@apollo/react-hooks";
import {ARTICLE} from "../../GraphQL/Query/Articles";
import Alert from "../Common/Display/Alert";
import ArticleTag from "../Articles/ArticleTag";
import moment from "moment";

export default function ArticlePage(){
    const { id } = useParams();
    const { loading, error, data } = useQuery(ARTICLE, {variables: {id}});

    if (loading) return null;
    if (error) return <Alert title="Error" subtitle={error.message} status="danger" />;

    const {article} = data;

    return (
        <div className="page page-article">
            <div className="article-title">
                <h1>{article.title}</h1>
                <ArticleTag tags={article.tags} />
                <p>{article.description}</p>
                <div className="article-meta">
                    <sub>Written by {article.author.firstName} {article.author.lastName} | {moment(article.created).format("DD MMM, YYYY")}</sub>
                </div>
            </div>

            <div className="article-content">
                <ReactMarkdown source={atob(article.data)} />
            </div>
        </div>
    )
}