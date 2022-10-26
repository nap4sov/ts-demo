import React from 'react';
import { CommentsAPI } from '../../api';
import { IComment } from '../../interfaces/posts';

interface IProps {
  id: string;
}
interface IState {
  comments: IComment[];
}

export class CommentsList extends React.Component<IProps, IState> {
  async componentDidMount(): Promise<void> {
    const comments = await CommentsAPI.getComments(this.props.id);
    this.setState({ comments });
  }

  handleMoreClick(): void {
    const more = CommentsAPI.getNext();

    this.setState(prevState => ({
      comments: [...prevState.comments, ...more],
    }));
  }

  render() {
    return (
      <ul style={{ backgroundColor: '#ececec' }}>
        {this.state?.comments.map(comment => (
          <li key={comment._id} style={{ borderBottom: '1px solid black' }}>
            <h5>{comment.commentedBy}</h5>
            <i>{comment.text}</i>
            <h6>{comment.dateCreated}</h6>
          </li>
        ))}
        {this.state?.comments.length >= 10 && (
          <button onClick={this.handleMoreClick.bind(this)}>More</button>
        )}
      </ul>
    );
  }
}
