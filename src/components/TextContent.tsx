import React from 'react'
import Markdown from './Markdown';

const TextContent = ({ text }) => {
  return (
    <div>
      <Markdown markdown={text} />
    </div>
  );
};

export default TextContent;
