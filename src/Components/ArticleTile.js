import React from "react";
import GridItem from "./Common/Grid/GridItem";
import moment from "moment";
import {Link} from "react-router-dom";
import {CLIENT_ROUTES} from "../Routes";
import ArticleTags from "./Common/ArticleTags";

export default function ArticleTile({id, title, description, tags, author, created}){
    return (
        <Link to={CLIENT_ROUTES.ARTICLE(id)}>
            <GridItem>
                <div className="article-title">
                    <h1>{title}</h1>
                    <sub>{description}</sub>
                </div>
                <ArticleTags tags={tags} />
                <div className="article-meta">
                    <p>Written by {author.username}</p>
                    <sub>Created {moment(created).format("DD MMM YYYY")}</sub>
                </div>
            </GridItem>
        </Link>
    );
}