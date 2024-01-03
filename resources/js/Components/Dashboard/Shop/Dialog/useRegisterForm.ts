import { useState, useRef } from 'react';
import { useModalHook } from '@/Components/Common/Modal/useModal';

const useRegisterForm = () => {
  // フォームの初期値、登録成功時に空白を入れるため
  const initialFormData = {
    shop_name: '',
    shop_tel: '',
    shop_address: '',
    shop_postal_code: '',
    shop_email: '',
  };

  const {
    isOpen: isAlertDialogOpen,
    onOpen: onAlertDialogOpen,
    onClose: onAlertDialogClose,
  } = useModalHook();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [formData, setFormData] = useState(initialFormData);

  return {
    initialFormData,
    isAlertDialogOpen,
    onAlertDialogOpen,
    onAlertDialogClose,
    cancelRef,
    formData,
    setFormData,
  };
};

export default useRegisterForm;
