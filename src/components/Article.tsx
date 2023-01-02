import React, { useEffect } from 'react'
import Image from 'next/image';
import hljs from 'highlight.js';
import showdown from 'showdown';

showdown.setFlavor('github');
const converter = new showdown.Converter();
showdown.setOption('simpleLineBreaks', false);

console.table(showdown.getOptions());

type Props = {
  body: string
}

const Article = ({ body }: Props) => {
  const articleContentHtml = converter.makeHtml(body).replaceAll('<br />', '').replaceAll('img', 'Image');
  console.log({articleContentHtml});
  useEffect(() => {
    console.log('Set highlightAll');
    hljs.highlightAll();
  }, []);

  return (
    <div className='article'>
      <div dangerouslySetInnerHTML={{ __html: articleContentHtml }} />
    </div>
  )
}

export default Article
