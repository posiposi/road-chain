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
  FormControl,
  Textarea,
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
    initialFormData,
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
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
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
      setFormData(initialFormData);
      onRegisterModalOpen();
      setIsSuccess(true);
    } catch (error) {
      onRegisterModalOpen();
      setIsSuccess(false);
    }
  };

  return (
    <>
      <Button colorScheme="blue" onClick={onAlertDialogOpen}>
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
                <FormControl isRequired>
                  <FormLabel>店舗名</FormLabel>
                  <Input
                    name="shop_name"
                    value={formData.shop_name}
                    onChange={handleChange}
                    required
                    placeholder="〇〇店"
                  />
                </FormControl>
                <FormLabel mt={2}>店舗電話番号</FormLabel>
                <Input
                  name="shop_tel"
                  value={formData.shop_tel}
                  type="text"
                  pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
                  onChange={handleChange}
                  placeholder="ハイフンを含む半角13桁で入力してください。"
                />
                <FormLabel mt={2}>住所</FormLabel>
                <Input
                  name="shop_address"
                  value={formData.shop_address}
                  onChange={handleChange}
                  placeholder="東京都新宿区歌舞伎町1-1-1"
                />
                <FormLabel mt={2}>郵便番号</FormLabel>
                <Input
                  name="shop_postal_code"
                  value={formData.shop_postal_code}
                  type="text"
                  pattern="[0-9]{3}-[0-9]{4}"
                  onChange={handleChange}
                  placeholder="ハイフンを含む半角8桁で入力してください。"
                />
                <FormControl isRequired mt={2}>
                  <FormLabel>問い合わせ先メールアドレス</FormLabel>
                  <Input
                    name="shop_email"
                    value={formData.shop_email}
                    type="email"
                    onChange={handleChange}
                    required
                    placeholder="xxxx@xxxx.xxxx"
                  />
                </FormControl>
                <FormLabel mt={2}>説明</FormLabel>
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="店舗の説明を入力してください。"
                />
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onAlertDialogClose}>
                  Cancel
                </Button>
                <Button colorScheme="blue" type="submit" ml={3}>
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
