import { IPostDetails } from '../interfaces/posts';
import { getDetails } from '../api/posts';

export class PostDetails implements IPostDetails {
  _id: string;
  title: string = '';
  description: string = '';
  fullText: string = '';
  postedBy: string = '';
  likes: string[] = [];
  dateCreated: string = '';

  async setValues(): Promise<IPostDetails> {
    const post = await getDetails(this._id);

    this.title = post.title;
    this.description = post.description;
    this.fullText = post.fullText;
    this.postedBy = post.postedBy;
    this.likes = post.likes;
    this.dateCreated = post.dateCreated;
    return this.getValues();
  }

  getValues(): IPostDetails {
    return {
      _id: this._id,
      title: this.title,
      description: this.description,
      fullText: this.fullText,
      postedBy: this.postedBy,
      likes: this.likes,
      dateCreated: this.dateCreated,
    };
  }

  constructor(id: string) {
    this._id = id;
  }
}
