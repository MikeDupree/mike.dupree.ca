import axios from 'axios';

export const getArticle = async (path: string) => {
  return axios.get(`https://gitlab.com/api/v4/projects/42222315/repository/files/${encodeURIComponent(path)}/raw?ref=main`, {
    headers: {
      'PRIVATE-TOKEN': process.env.GITLAB_TOKEN,
    }
  }).catch((_err) => {
    return { data: '' };
  });
}

export interface GitlabTreeItem {
  id: string;
  name: string;
  path: string;
  mode: string;
  type: string;
}

export interface ArticleTreeItem extends GitlabTreeItem {
  tags: string;
}

export const getArticlesTree = async (): Promise<GitlabTreeItem[]> => {
  return (await axios.get(`https://gitlab.com/api/v4/projects/42222315/repository/tree?ref=main&recursive=true`, {
    headers: {
      'PRIVATE-TOKEN': process.env.GITLAB_TOKEN,
    }
  }).catch((_err) => {
    return { data: [] };
  })).data;
}

export const getArticles = async (): Promise<ArticleTreeItem[]> => {
  const response = await getArticlesTree();
  return response.filter((a) => a.type === 'blob' && a.name !== 'README.md').map(a => {
    const path = a.path.split('/');
    const tags = path.slice(1, path.length - 1).join('/');
    return {
      ...a,
      name: a.name.split('.')[0],
      tags
    }
  });
}
