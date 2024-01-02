import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { RegisterConfirmedModalProps } from '@/types';
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';

const RegisterConfirmedModal = ({
  isOpen,
  onClose,
  isSuccess,
}: RegisterConfirmedModalProps): JSX.Element => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isSuccess ? <CheckCircleIcon /> : <WarningIcon />}
          {isSuccess ? '店舗登録完了' : '店舗登録失敗'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className="modal-body-content">
          {isSuccess
            ? `店舗登録が完了しました！\n閉じるボタンを押してください。`
            : `店舗登録に失敗しました。\n時間を空けて再度登録してください。`}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RegisterConfirmedModal;
