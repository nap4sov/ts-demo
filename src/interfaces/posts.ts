export interface IPost {
  _id: string;
  title: string;
  fullText?: string;
  description: string;
  dateCreated: string;
  image?: string;
  likes: string[];
  postedBy: string;
}

export interface IResponse {
  pagination: {
    limit: string;
    skip: string;
    total: string;
  };
  data: IPost[];
}
