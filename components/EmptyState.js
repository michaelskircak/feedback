import React from 'react';
import { Heading, Flex, Text, Button } from '@chakra-ui/react';

import DashboardShell from './DashboardShell';
import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
  <Flex
    width="100%"
    borderRadius="8px"
    backgroundColor="white"
    p={16}
    justify="center"
    align="center"
    direction="column"
  >
    <Heading size="lg" mb={2}>
      You haven't added any sites yet!
    </Heading>
    <Text mb={4}>Welcome! Let's get started</Text>
    <AddSiteModal>Add Your First Site</AddSiteModal>
  </Flex>
);

export default EmptyState;
