import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';
// import { useGetAllPosts } from '../../hooks/posts';
import { PostItem } from '../PostItem';
import { IResponse, IStatus } from '../../interfaces/posts';
import { PostsAPI } from '../../api';
interface IProps {
  setStatus: Dispatch<SetStateAction<IStatus>>;
}

export const PostsList: React.FC<IProps> = ({ setStatus }) => {
  const [data, setData] = useState<IResponse>();
  const [counter, setCounter] = useState<number>(1);

  useEffect(() => {
    (async () => {
      const response = await PostsAPI.getAll();
      setData(response);
    })();
  }, []);

  useEffect(() => {
    if (counter === 1) return;
    (async () => {
      const response = await PostsAPI.getNextPage();
      setData(response);
    })();
  }, [counter]);

  const posts = useMemo(() => (data ? data.data : []), [data]);

  return (
    <>
      <button onClick={() => setCounter(prev => (prev += 1))}>Next page</button>
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
    </>
  );
};
