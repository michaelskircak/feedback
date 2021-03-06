import useSWR from 'swr';

import DashboardShell from '@/components/DashboardShell';
import SiteTableSkeleton from '@/components/SiteTableSkeleton';
import FeedbackTable from '@/components/FeedbackTable';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';
import Page from '@/components/Page';
import FeedbackEmptyState from '@/components/FeedbackEmptyState';

const MyFeedback = () => {
  const { user } = useAuth();
  const { data } = useSWR(user ? ['/api/feedback', user.token] : null, fetcher);

  if (!data) {
    return (
      <DashboardShell>
        <FeedbackTableHeader />
        <SiteTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <FeedbackTableHeader />
      {data.feedback.length ? (
        <FeedbackTable allFeedback={data.feedback} />
      ) : (
        <FeedbackEmptyState />
      )}
    </DashboardShell>
  );
};

const MyFeedbackPage = () => (
  <Page name="My Feedback" path="/feedback">
    <MyFeedback />
  </Page>
);

export default MyFeedbackPage;
