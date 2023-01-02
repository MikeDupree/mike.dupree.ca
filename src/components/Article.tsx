import React, { useEffect } from 'react'
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
  console.log('html', converter.makeHtml(body).replaceAll('<br />', ''))
  useEffect(() => {
    console.log('Set highlightAll');
    hljs.highlightAll();
  }, []);

  return (
    <div className='article'>
      <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(body).replaceAll('<br />', '') }} />
    </div>
  )
}

export default Article
