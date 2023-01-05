import React, { useEffect } from 'react'
import styles from './Article.css';
import styled from '@emotion/styled';
import hljs from 'highlight.js';
import showdown from 'showdown';

showdown.setFlavor('github');
const converter = new showdown.Converter();
showdown.setOption('simpleLineBreaks', false);

const StyledArticle = styled.div(styles);

type Props = {
  body: string
}

const Article = ({ body }: Props) => {
  const articleContentHtml = converter.makeHtml(body).replaceAll('<br />', '').replaceAll('img', 'Image');
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <StyledArticle className='article'>
      <div dangerouslySetInnerHTML={{ __html: articleContentHtml }} />
    </StyledArticle>
  )
}

export default Article
