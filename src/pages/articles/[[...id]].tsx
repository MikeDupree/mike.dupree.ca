import { GetStaticProps } from 'next'
import { getArticle, getArticles, getArticlesTree, ArticleTreeItem } from '../../Articles';
import ArticlesList from '../../components/ArticlesList';
import Article from '../../components/Article';
import Container from '../../components/Container';

type Props = {
  body: string,
  articles: ArticleTreeItem[]
}

const ArticlesViewFactory = ({ body, articles }: Props) => {
  return !body ? (
    <ArticlesList articles={articles} />
  )
    : (
      <Article body={body} />
    )
}


const Articles = (props: Props) => {
  return <Container><ArticlesViewFactory {...props} /></Container>
}

export default Articles;

export async function getStaticPaths() {
  let paths = [{ params: { id: [] as string[] } }];
  const articles = await getArticlesTree();
  if (articles) {
    paths = [...paths, ...articles.filter((ti) => ti.type === "blob").map((treeItem) => (
      { params: { id: treeItem.path.split('/').filter((p: string) => p !== 'articles') } }
    ))];
  }
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = await getArticles();
  const { params } = context;
  if (!params?.id) {
    return {
      props: {
        body: null,
        articles
      }
    }
  }

  const { id } = params;
  const articlePath = Array.isArray(id) ? id : [id];
  const path = ['articles', ...articlePath].join('/');
  const response = await getArticle(path);
  const body = response.data;

  return {
    props: {
      body,
      articles
    },
  }
}
