import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Button
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';

function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const { handleSubmit, register } = useForm();
  const onCreateSite = (values) => createSite(values);

  return (
    <>
      <Button
        onClick={onOpen}
        fontWeight="medium"
        variant="solid"
        size="md"
        maxW="200px"
      >
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(createSite)}>
          <ModalHeader fontWeight="bold">Add Site</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="My Site"
                name="site"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                placeholder="https://website.com"
                name="url"
                ref={register({
                  required: 'Required'
                })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancel
            </Button>
            <Button backgroundColor="#99FFFE" color="#194D4C" type="submit">
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddSiteModal;
