import * as React from 'react';

export function Topic({title, description}) {
  return(
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Comment</button>
    </div>
  )
} 