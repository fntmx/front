import React from "react";

export default function ArticleTags({tags}){
    return (
        <div className="article-tags">
            {tags.map(tag => {
                return  <span key={tag}>{tag}</span>
            })}
        </div>
    );
}