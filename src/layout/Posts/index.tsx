import { CenteredContainer, Section } from '../../styles';
import { PostsList } from '../../components/PostsList';
import { Details } from '../../components/Details';
import { useState } from 'react';
import { IStatus } from '../../interfaces/posts';

export const Posts: React.FC = () => {
  const [status, setStatus] = useState<IStatus>({
    id: '',
    expanded: false,
  });
  return (
    <Section>
      <CenteredContainer>
        {status.expanded ? (
          <Details id={status.id} setStatus={setStatus} />
        ) : (
          <PostsList setStatus={setStatus} />
        )}
      </CenteredContainer>
    </Section>
  );
};
