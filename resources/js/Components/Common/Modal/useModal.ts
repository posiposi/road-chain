import { useDisclosure } from '@chakra-ui/react';

export const useModalHook = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return { isOpen, onOpen, onClose };
};
