export interface PostContent {
  id: number;
  title: string;
  content: Content[];
  author: string;
  createdAt: string;
  length: number;
  tags:string[];
  categories:string[];
  miniContent: string;
  image: string;
}

export interface Content {
  id: number;
  content: string;
  image: File | string | null;
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
  image: '',
  miniContent: '',
  createdAt: '',
  length: 0,
  tags: [],
  categories: [],
};