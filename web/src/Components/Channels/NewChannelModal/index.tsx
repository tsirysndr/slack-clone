import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup } from '@chakra-ui/input';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/modal';
import { Button, InputLeftElement, Switch } from '@chakra-ui/react';
import { FC, useContext, useRef, useState } from 'react';
import { ChannelContext } from '../../../Providers/ChannelProvider';

export interface NewChannelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewChannelModal: FC<NewChannelModalProps> = (props) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const { createChannel, refreshChannels } = useContext(ChannelContext);
  const initialRef = useRef<any>();
  const handleCreate = () => {
    if (name.trim() === '') {
      initialRef.current.focus();
      return;
    }
    createChannel(name, description, isPrivate);
    props.onClose();
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a channel</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <div style={{ marginBottom: 15 }}>
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </div>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="#"
              />
              <Input
                onChange={(e) => setName(e.target.value)}
                ref={initialRef}
                placeholder="e.g plan-budget"
              />
            </InputGroup>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Description (optional)</FormLabel>
            <Input
              onChange={(e) => setDescription(e.target.value)}
              placeholder=""
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Make private</FormLabel>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <div>
                  When a channel is set to private, it can only be viewed or
                  joined by invitation.
                </div>
              </div>
              <div style={{ marginLeft: 50 }}>
                <div>
                  <Switch
                    size="lg"
                    onChange={(e) => setIsPrivate(e.target.checked)}
                  />
                </div>
              </div>
            </div>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handleCreate} mr={4}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewChannelModal;
