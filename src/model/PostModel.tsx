export interface PostContent {
  id: number;
  title: string;
  content: Content[];
  author: string;
  createdDate: string;
  length: number;
  tags:string[];
  categories:string[];
}

export interface Content {
  id: number;
  content: string;
  img: string;
}

export interface Author {
  id: string;
  name: string;
}

export const defaultPost: PostContent = {
  id: 0,
  title: '',
  content: [],
  author: '',
  createdDate: '',
  length: 0,
  tags: [],
  categories: [],
};