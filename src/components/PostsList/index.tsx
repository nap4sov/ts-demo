import { useMemo } from 'react';
import { useGetAllPosts } from '../../hooks/posts';
import { PostItem } from '../PostItem';

export const PostsList: React.FC = () => {
  const { data } = useGetAllPosts();

  const posts = useMemo(() => (data ? data.data : []), [data]);

  return (
    <ul>
      {posts.map(
        ({ _id, likes, title, description, dateCreated, postedBy }) => (
          <PostItem
            _id={_id}
            likes={likes}
            title={title}
            description={description}
            dateCreated={dateCreated}
            postedBy={postedBy}
          />
        ),
      )}
    </ul>
  );
};
