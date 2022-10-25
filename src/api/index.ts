import { IResponse, IPostDetails } from '../interfaces/posts';

export class PostsAPI {
  private static baseUrl = 'http://test-blog-api.ficuslife.com/api/v1/posts/';

  static skip = 0;

  static async getAll(): Promise<IResponse> {
    const response = await fetch(this.baseUrl);
    if (!response.ok) throw new Error('Not found');
    const data: IResponse = await response.json();

    return data;
  }

  static async getDetails(id: string): Promise<IPostDetails> {
    const response = await fetch(this.baseUrl + id);
    if (!response.ok) throw new Error('Not found');
    const postDetails: IPostDetails = await response.json();

    return postDetails;
  }

  static async getNextPage(): Promise<IResponse> {
    this.skip += 10;
    const response = await fetch(`${this.baseUrl}?skip=${this.skip}`);
    if (!response.ok) throw new Error('Not found');
    const data: IResponse = await response.json();

    return data;
  }
}
