import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Posts } from './layout/Posts';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  );
};
