import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';

declare global {
  interface Window {
    csrfToken: string;
  }
}

const RegisterForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      const response = await axios.post('/api/shop/register', formData);
      // TODO 成功レスポンス返却時のフロント処理実装
    } catch (error) {
      console.log('error!');
      // TODO エラーレスポンス返却時のフロント処理実装
    }
  };

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        店舗登録
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
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
                <Button ref={cancelRef} onClick={onClose}>
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
    </>
  );
};

export default RegisterForm;
