import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useModalHook } from '@/Components/Common/Modal/useModal';
import RegisterConfirmedModal from './RegisterConfirmedModal';

declare global {
  interface Window {
    csrfToken: string;
  }
}

const RegisterForm = () => {
  const {
    isOpen: isAlertDialogOpen,
    onOpen: onAlertDialogOpen,
    onClose: onAlertDialogClose,
  } = useModalHook();
  const {
    isOpen: isRegisterModalOpen,
    onOpen: onRegisterModalOpen,
    onClose: onRegisterModalClose,
  } = useModalHook();
  const cancelRef = React.useRef<HTMLButtonElement>(null);
  // 入力フォームの値を管理
  const [formData, setFormData] = React.useState({
    shop_name: '',
    shop_tel: '',
    shop_address: '',
    shop_postal_code: '',
    shop_email: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // データ登録処理
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('/api/shop/register', formData);
      console.log('success!');
      onAlertDialogClose();
      onRegisterModalOpen();
    } catch (error) {
      console.log('error!');
      // TODO エラーレスポンス返却時のフロント処理実装
    }
  };

  return (
    <>
      <Button colorScheme="red" onClick={onAlertDialogOpen}>
        店舗登録
      </Button>
      <AlertDialog
        isOpen={isAlertDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={onAlertDialogClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              店舗登録フォーム
            </AlertDialogHeader>

            <form onSubmit={submit}>
              <AlertDialogBody>
                <FormLabel>店舗名</FormLabel>
                <Input
                  name="shop_name"
                  value={formData.shop_name}
                  onChange={handleChange}
                  placeholder="入力フォーム1"
                />
                <FormLabel>店舗電話番号</FormLabel>
                <Input
                  name="shop_tel"
                  value={formData.shop_tel}
                  onChange={handleChange}
                  placeholder="入力フォーム2"
                />
                <FormLabel>住所</FormLabel>
                <Input
                  name="shop_address"
                  value={formData.shop_address}
                  onChange={handleChange}
                  placeholder="入力フォーム3"
                />
                <FormLabel>郵便番号</FormLabel>
                <Input
                  name="shop_postal_code"
                  value={formData.shop_postal_code}
                  onChange={handleChange}
                  placeholder="入力フォーム4"
                />
                <FormLabel>問い合わせ先メールアドレス</FormLabel>
                <Input
                  name="shop_email"
                  value={formData.shop_email}
                  onChange={handleChange}
                  placeholder="入力フォーム5"
                />
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onAlertDialogClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" type="submit" ml={3}>
                  登録
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <RegisterConfirmedModal
        isOpen={isRegisterModalOpen}
        onClose={onRegisterModalClose}
      />
    </>
  );
};

export default RegisterForm;
