import { useEffect } from 'react'
import styles from './Article.css';
import styled from '@emotion/styled';
import hljs from 'highlight.js';
import { setFlavor, Converter, setOption } from 'showdown';

const converter = new Converter();
setOption('simpleLineBreaks', false);

const StyledArticle = styled.div(styles);

type Props = {
  body: string
}

const Article = ({ body }: Props) => {
  const articleContentHtml = converter.makeHtml(body).replaceAll('img', 'Image')

  console.log(articleContentHtml);
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
