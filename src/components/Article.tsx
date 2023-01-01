import React, { useEffect } from 'react'
import hljs from 'highlight.js';
import showdown from 'showdown';

showdown.setFlavor('github');
const converter = new showdown.Converter();

type Props = {
  body: string
}

const Article = ({ body }: Props) => {
  useEffect(() => {
    console.log('Set highlightAll');
    hljs.highlightAll();
  }, []);

  return (
    <div className='article'>
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }} />
    </div>
  )
}

export default Article
