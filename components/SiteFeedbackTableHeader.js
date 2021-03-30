import React from 'react';
import {
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading
} from '@chakra-ui/react';
import NextLink from 'next/link';

const SiteFeedbackTableHeader = ({ siteName }) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/feedback" passHref>
          <BreadcrumbLink color="gray.700" fontSize="sm">
            Feedback
          </BreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink color="gray.700" fontSize="sm">
          {siteName || '-'}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Flex justifyContent="space-between">
      <Heading mb={8}>{siteName || '-'}</Heading>
    </Flex>
  </>
);

export default SiteFeedbackTableHeader;
