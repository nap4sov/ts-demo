import { Dispatch, SetStateAction, useMemo } from 'react';
import { useGetAllPosts } from '../../hooks/posts';
import { PostItem } from '../PostItem';
import { IStatus } from '../../interfaces/posts';
interface IProps {
  setStatus: Dispatch<SetStateAction<IStatus>>;
}

export const PostsList: React.FC<IProps> = ({ setStatus }) => {
  const { data } = useGetAllPosts();

  const posts = useMemo(() => (data ? data.data : []), [data]);

  return (
    <ul>
      {posts.map(
        ({ _id, likes, title, description, dateCreated, postedBy }) => (
          <li key={_id}>
            <PostItem
              _id={_id}
              likes={likes}
              title={title}
              description={description}
              dateCreated={dateCreated}
              postedBy={postedBy}
            />
            <button onClick={() => setStatus({ id: _id, expanded: true })}>
              Expand
            </button>
          </li>
        ),
      )}
    </ul>
  );
};
