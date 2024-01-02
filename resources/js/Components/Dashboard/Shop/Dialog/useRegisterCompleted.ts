import { useState } from 'react';
import { useModalHook } from '@/Components/Common/Modal/useModal';

const useRegisterCompleted = () => {
  const {
    isOpen: isRegisterModalOpen,
    onOpen: onRegisterModalOpen,
    onClose: onRegisterModalClose,
  } = useModalHook();
  const [isSuccess, setIsSuccess] = useState(false);

  return {
    isRegisterModalOpen,
    onRegisterModalOpen,
    onRegisterModalClose,
    isSuccess,
    setIsSuccess,
  };
};

export default useRegisterCompleted;
