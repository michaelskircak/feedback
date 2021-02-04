import React from 'react';
import {
  ChakraProvider,
  Flex,
  Link,
  Stack,
  Icon,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';
import useAuth from '@/lib/auth';

const DashboardShell = ({ children }) => {
  const auth = useAuth();
  return (
    <ChakraProvider resetCSS>
      <Flex flexDirection="column">
        <Flex
          flexDirection="row"
          backgroundColor="whiteAlpha.500"
          justifyContent="space-between"
          alignItems="center"
          p={4}
          px={8}
        >
          <Stack spacing={4} isInline alignItems="center">
            <Icon viewBox="0 0 46 32" color="black" boxSize="24px">
              <path
                fill="currentColor"
                d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
              />
            </Icon>
            <Link>Feedback</Link>
            <Link>Sites</Link>
          </Stack>
          <Flex alignItems="center">
            <Link mr={4} backgroundColor="whiteAlpha.500">
              Account
            </Link>
            <Avatar size="sm" src={auth.user.photoUrl} />
          </Flex>
        </Flex>
        <Flex backgroundColor="gray.100" p={8} height="100vh">
          <Flex maxWidth={800} w="100%" direction="column" ml="auto" mr="auto">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink color="gray.700" fontSize="sm">
                  Sites
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading color="black" mb={4}>
              Sites
            </Heading>
            {children}
          </Flex>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default DashboardShell;
