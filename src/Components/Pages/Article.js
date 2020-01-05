import React from "react";
import {SINGLE_ARTICLE} from "../../GraphQL/Articles";
import {useQuery} from "@apollo/react-hooks";
import {LinearProgress} from "@material-ui/core";
import Alert from "../Common/Alert";
import ArticleTags from "../Common/ArticleTags";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../../Util/CodeBlock";

export default function ArticlePage(props) {
    const {loading, error, data} = useQuery(SINGLE_ARTICLE, {variables: {id: props.match.params.id}});

    if (loading) return <LinearProgress/>;
    if (error) return <Alert title={error.message} status="danger" />;

    return (
        <div className="page page-article">
            <div className="page-container">
                <div className="page-title">
                    <h1>{data.article[0].title}</h1>
                    <p>{data.article[0].description}.</p>
                    <ArticleTags tags={data.article[0].tags} />
                </div>

                <div className="page-content">
                    <ReactMarkdown source={atob(data.article[0].data)} renderers={{code: CodeBlock}} />
                </div>
            </div>
        </div>
    )
}