import { IResponse, IPostDetails, IComment } from '../interfaces/posts';

class API {
  static baseUrl = 'http://test-blog-api.ficuslife.com/api/v1/';

  static async getAll(url: string): Promise<IResponse> {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Not found');
    const data: IResponse = await response.json();

    return data;
  }
}

export class PostsAPI extends API {
  private static url = API.baseUrl + 'posts/';

  static skip = 0;

  static async getAll(): Promise<IResponse> {
    return API.getAll(this.url);
  }

  static async getDetails(id: string): Promise<IPostDetails> {
    const response = await fetch(this.url + id);
    if (!response.ok) throw new Error('Not found');
    const postDetails: IPostDetails = await response.json();

    return postDetails;
  }

  static async getNextPage(): Promise<IResponse> {
    this.skip += 10;
    const response = await fetch(`${this.url}?skip=${this.skip}`);
    if (!response.ok) throw new Error('Not found');
    const data: IResponse = await response.json();

    return data;
  }
}

export class CommentsAPI {
  private static url = API.baseUrl + 'comments/post/';

  static comments: IComment[];
  static skip: number = 0;

  static async getAllByPostId(id: string): Promise<IComment[]> {
    const response = await fetch(this.url + id);
    if (!response.ok) throw new Error('Not found');
    const data: IComment[] = await response.json();

    return data;
  }

  static async getComments(id: string): Promise<IComment[]> {
    const allComments = await this.getAllByPostId(id);
    this.comments = allComments;

    return this.calculateComments(0);
  }

  static getNext(): IComment[] {
    this.skip += 10;

    return this.calculateComments(this.skip);
  }

  static calculateComments(skip: number): IComment[] {
    return this.comments.slice(skip, skip + 10);
  }
}
