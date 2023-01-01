import Link from 'next/link'
import React, { useEffect } from 'react'
import { ArticleTreeItem } from '../Articles'

type Props = {
  articles: ArticleTreeItem[]
}

const ArticlesList = ({ articles }: Props) => {
  console.log({ articles })
  const articleTags = [...new Set(articles.map(a => a.tag))];
  return (
    <div>
      <h1> Articles </h1>

      <div>
        <ul>
          {articleTags.map((tag) => (
            <>
              <li>{tag}</li>
              <li key={tag} style={{ listStyle: 'none' }}>
                <ul>
                  {articles.filter(a => a.tag = tag).map((article) => (
                    <li key={article.id}><Link href={`/${article.path}`}>{article.name}</Link></li>
                  ))}
                </ul>
              </li>
            </>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default ArticlesList
