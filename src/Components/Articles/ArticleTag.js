import React from 'react';

export default function ArticleTag({ tags }) {
  return (
    <div className="article-tags">
      {tags.map((tag, idx) => {
        return (
          <span key={idx} className="article-tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}
