import React, { useState } from 'react';
import { Box, Code, Switch } from '@chakra-ui/react';

import { Table, Tr, Th, Td } from './Table';
import RemoveButton from './RemoveButton';
import { updateFeedback } from '@/lib/db';
import { useAuth } from '@/lib/auth';
import { mutate } from 'swr';

const FeedbackRow = ({ id, author, text, route, status }) => {
  const auth = useAuth();
  const [checked, setChecked] = useState(status === 'active');
  const toggleFeedback = async () => {
    // setChecked(!checked);
    await updateFeedback(id, { status: !checked ? 'active' : 'pending' });
    mutate(['/api/feedback', auth.user.token]);
    // mutate(
    //   ['/api/feedback', auth.user.token],
    //   async (data) => {
    //     const updatedFeedback = data.feedback.find(
    //       (feedback) => feedback.id !== id
    //     );
    //     const allOtherFeedback = data.feedback.filter(
    //       (feedback) => feedback.id !== id
    //     );
    //     updatedFeedback.status = !checked;

    //     return {
    //       feedback: [updatedFeedback, ...allOtherFeedback]
    //     };
    //   },
    //   false
    // );
  };

  return (
    <Box as="tr" key={id}>
      <Td fontWeight="medium">{author}</Td>
      <Td>{text}</Td>
      <Td>
        <Code>{route || '/'}</Code>
      </Td>
      <Td>
        <Switch
          color="green"
          onChange={toggleFeedback}
          isChecked={status === 'active'}
        />
      </Td>
      <Td>
        <RemoveButton feedbackId={id} />
      </Td>
    </Box>
  );
};

export default FeedbackRow;
