import { CenteredContainer, Section } from '../../styles';
import { PostsList } from '../../components/PostsList';

export const Posts: React.FC = () => {
  return (
    <Section>
      <CenteredContainer>
        <PostsList />
      </CenteredContainer>
    </Section>
  );
};
