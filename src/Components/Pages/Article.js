import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {ARTICLE} from "../../GraphQL/Query/Articles";

export default function ArticlePage(){
    const { id } = useParams();
    const { loading, error, data } = useQuery(ARTICLE, {variables: {id}, errorPolicy: "all"});

    if (loading) return null;
    if (error) return `Error! ${error}`;

    const {article} = data;

    return (
        <div className="page page-article">
            <h1>{article.title}</h1>
        </div>
    )
}