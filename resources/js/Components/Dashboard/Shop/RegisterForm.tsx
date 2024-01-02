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
import RegisterConfirmedModal from './RegisterConfirmedModal';
import useRegisterForm from '@/Components/Dashboard/Shop/Dialog/useRegisterForm';
import useRegisterCompleted from '@/Components/Dashboard/Shop/Dialog/useRegisterCompleted';

declare global {
  interface Window {
    csrfToken: string;
  }
}

const RegisterForm = () => {
  const {
    isAlertDialogOpen,
    onAlertDialogOpen,
    onAlertDialogClose,
    cancelRef,
    formData,
    setFormData,
  } = useRegisterForm();
  const {
    isRegisterModalOpen,
    onRegisterModalOpen,
    onRegisterModalClose,
    isSuccess,
    setIsSuccess,
  } = useRegisterCompleted();
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
      onAlertDialogClose();
      onRegisterModalOpen();
      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
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
        isSuccess={isSuccess}
      />
    </>
  );
};

export default RegisterForm;
