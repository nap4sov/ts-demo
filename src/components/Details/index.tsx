import { Wrapper } from './styles';
import { Component } from 'react';
import { PostDetails } from '../../classes/postDetails';
import { Dispatch, SetStateAction } from 'react';
import { IPostDetails, IStatus } from '../../interfaces/posts';

interface IProps {
  id: string;
  setStatus: Dispatch<SetStateAction<IStatus>>;
}

export class Details extends Component<IProps, IPostDetails> {
  post = new PostDetails(this.props.id);

  async componentDidMount(): Promise<void> {
    await this.post.setValues();
    this.setState(this.post);
  }

  render() {
    const { title, description, fullText, dateCreated, likes } = this.post;
    return (
      <Wrapper>
        <h3>{title}</h3>
        <b>{description}</b>
        <p>{fullText}</p>
        <i>{dateCreated}</i>
        <button>Like {likes.length}</button>
        <button
          onClick={() => this.props.setStatus({ id: '', expanded: false })}
        >
          Back
        </button>
      </Wrapper>
    );
  }
}
