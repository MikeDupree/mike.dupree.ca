import axios from 'axios';
import fs from 'fs';

export const getArticle = async (path: string) => {
  if (process.env.DEV) {
    const article = fs.readFileSync(`./src/software-articles/${path}`,{encoding:'utf8', flag:'r'});
    return {data: article};
  }
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

/*
*  {
    id: '87271af2dd89495f69b953d240d2f5ff250d256f',
    name: 'terminal-commands.md',
    type: 'blob',
    path: 'configurations/terminal-commands.md',
    mode: '100644'
  }
  */
export const getArticlesTree = async (): Promise<GitlabTreeItem[]> => {

  if (process.env.DEV) {
    const local_articles = fs.readdirSync('./src/software-articles');
    const response_arr = [];
    for (const node of local_articles) {
      if (fs.lstatSync(`./src/software-articles/${node}`).isDirectory()) {
        if (node === '.git') continue;
        // Is Directory
        const dir_contents = fs.readdirSync(`./src/software-articles/${node}`);

        for (const node2 of dir_contents) {
          if (fs.lstatSync(`./src/software-articles/${node}/${node2}`).isDirectory()) {
            // Is Directory
            const dir_contents2 = fs.readdirSync(`./src/software-articles/${node}/${node2}`);
            for (const file of dir_contents2) {
              response_arr.push({
                id: response_arr.length.toString(),
                name: file,
                type: 'blob',
                path: `${node}/${node2}/${file}`,
                mode: '000000'
              });
            }
          }
        }
      }
    }
    return response_arr;
  }

  const response = (await axios.get(`https://gitlab.com/api/v4/projects/42222315/repository/tree?ref=main&recursive=true`, {
    headers: {
      'PRIVATE-TOKEN': process.env.GITLAB_TOKEN,
    }
  }).catch((_err) => {
    return { data: [] };
  })).data;

  return response;
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
