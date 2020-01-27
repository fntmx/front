import React from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/react-hooks";
import {ARTICLE} from "../../GraphQL/Query/Articles";
import Alert from "../Common/Display/Alert";

export default function ArticlePage(){
    const { id } = useParams();
    const { loading, error, data } = useQuery(ARTICLE, {variables: {id}});

    if (loading) return null;
    if (error) return <Alert title="Error" subtitle={error} status="danger" />;

    const {article} = data;

    return (
        <div className="page page-article">
            <h1>{article.title}</h1>
        </div>
    )
}