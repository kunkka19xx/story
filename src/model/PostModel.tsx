export interface PostContent {
  id: number;
  title: string;
  content: Content[];
  author: string;
  createdDate: Date;
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
