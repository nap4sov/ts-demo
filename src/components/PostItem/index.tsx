import { IPost } from '../../interfaces/posts';

export const PostItem: React.FC<IPost> = ({
  _id,
  likes,
  title,
  description,
  dateCreated,
  postedBy,
}) => {
  return (
    <li key={_id}>
      <h3>{title}</h3>
      <p>
        <b>{description}</b>
      </p>
      <i>
        Posted by {postedBy ? postedBy : 'anonymous'} on {dateCreated}
      </i>
      <p>Total likes: {likes.length}</p>
    </li>
  );
};
