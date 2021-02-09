import Head from 'next/head';
import { Button, Flex, Text, Code, Icon, Link } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <Flex
      as="main"
      direction="column"
      align="center"
      justify="center"
      h="100vh"
      maxW="400px"
      margin="0 auto"
    >
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                if (document.cookie && document.cookie.includes('feedback-auth')) {
                  window.location.href = "/dashboard"
                }
              `
          }}
        />
      </Head>

      <Text mb={4}>
        <Text as="span" fontWeight="bold" display="inline">
          Feedback
        </Text>
        {`. It's the easiest way to add comments or reviews to your static site.`}
      </Text>
      {auth.user ? (
        <Button as="a" size="sm" fontWeight="medium" href="/dashboard">
          View Dashboard
        </Button>
      ) : (
        <Button
          mt={4}
          size="sm"
          fontWeight="medium"
          onClick={(e) => auth.signinWithGitHub()}
        >
          Sign In
        </Button>
      )}
    </Flex>
  );
};

export default Home;
