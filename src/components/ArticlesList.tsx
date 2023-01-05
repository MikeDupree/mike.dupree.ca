import styled from '@emotion/styled'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { ArticleTreeItem } from '../Articles'

type Props = {
  articles: ArticleTreeItem[]
}
interface FiltersProps {
  tags: string[];
  selected: string;
  callback: (filter: string) => void
}
const Filters = ({ tags, selected, callback }: FiltersProps) => {
  const filters = ['', ...tags].map((tag) => {
    return <li key={`facet-${tag}`} style={{ fontWeight: 'bold' }}>
      <button style={{
        backgroundColor: 'transparent',
        border: 'none',
        color: 'white',
        padding: '5px 5px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px'
      }} onClick={() => callback(tag)}>
        {tag !== '' ? tag === selected ? `> ${tag}` : tag : 'clear filter (x)'}
      </button>
    </li >
  })
  return (
    <div>
      filters
      <ul style={{ padding: '0', listStyle: 'none' }}>
        {filters}
      </ul>
    </div>
  );
}

const TagList = styled.ul({
  '& li': {
    '&::marker': {
      content: '""',
    },
    '& a': {
      marginLeft: '7px',
    }
  },
  '& .articleList li': {
    '&::marker': {
      content: '">"',
      color: '#DA7110',
    },
  }
});

const ArticlesList = ({ articles }: Props) => {
  const [filter, setFilter] = useState('');
  const articleTags = [...new Set(articles.map(a => a.tags))];

  return (
    <div>
      <h1> Articles </h1>


      <div style={{ display: 'flex' }}>
        <div style={{ borderRight: '1px solid #ffffff21', paddingRight: '15px', marginRight: '15px' }}>
          <Filters tags={articleTags} selected={filter} callback={setFilter} />
        </div>
        <div>
          {filter ? filter : 'all articles'}
          {articleTags.filter((tag) => filter ? filter === tag : true).map((tag) => (
            <TagList key={tag} >
              <li style={{ fontWeight: 'bold' }}>{tag}</li>
              <li style={{ listStyle: 'none' }}>
                <ul className='articleList'>
                  {articles.filter(a => a.tags === tag).map((article) => (
                    <li key={article.id}><Link href={`/${article.path}`}>{article.name}</Link></li>
                  ))}
                </ul>
              </li>
            </TagList>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticlesList
