import React from 'react';

export default function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, idx) => {
        return (
          <span key={idx} className="tag">
            {tag}
          </span>
        );
      })}
    </div>
  );
}
