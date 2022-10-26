export interface IPost {
  _id: string;
  title: string;
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

export interface IPostDetails extends IPost {
  fullText: string;
}

export interface IStatus {
  id: string;
  expanded: boolean;
}

export interface IComment {
  _id: string;
  commentedBy: string;
  followedCommentID?: string;
  postID: string;
  text: string;
  dateCreated: string;
  likes: string[];
}
