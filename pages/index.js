import Head from 'next/head';
import { Button, Flex, Text, Stack } from '@chakra-ui/react';

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

      <Text mb={4} fontSize="lg" p={6}>
        <Text as="span" fontWeight="bold" display="inline">
          Feedback
        </Text>
        {`. It's the easiest way to add comments or reviews to your static site.`}
      </Text>
      {auth.user ? (
        <Button
          as="a"
          mt={4}
          href="/dashboard"
          size="lg"
          backgroundColor="white"
          color="gray.900"
          variant="outline"
          fontWeight="medium"
          _hover={{ bg: 'gray.100' }}
          _active={{
            bg: 'gray.100',
            transform: 'scale(0.95)'
          }}
        >
          View Dashboard
        </Button>
      ) : (
        <Stack>
          <Button
            mt={4}
            size="lg"
            onClick={(e) => auth.signinWithGitHub()}
            backgroundColor="gray.900"
            color="white"
            fontWeight="medium"
            _hover={{ bg: 'gray.700' }}
            _active={{
              bg: 'gray.800',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Github
          </Button>
          <Button
            mt={4}
            size="lg"
            onClick={(e) => auth.signinWithGoogle()}
            backgroundColor="white"
            color="gray.900"
            variant="outline"
            fontWeight="medium"
            _hover={{ bg: 'gray.100' }}
            _active={{
              bg: 'gray.100',
              transform: 'scale(0.95)'
            }}
          >
            Sign In with Google
          </Button>
        </Stack>
      )}
    </Flex>
  );
};

export default Home;
