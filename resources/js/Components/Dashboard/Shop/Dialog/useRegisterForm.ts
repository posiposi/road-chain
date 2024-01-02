import { useState, useRef } from 'react';
import { useModalHook } from '@/Components/Common/Modal/useModal';

const useRegisterForm = () => {
  const {
    isOpen: isAlertDialogOpen,
    onOpen: onAlertDialogOpen,
    onClose: onAlertDialogClose,
  } = useModalHook();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState({
    shop_name: '',
    shop_tel: '',
    shop_address: '',
    shop_postal_code: '',
    shop_email: '',
  });

  return {
    isAlertDialogOpen,
    onAlertDialogOpen,
    onAlertDialogClose,
    cancelRef,
    formData,
    setFormData,
  };
};

export default useRegisterForm;
