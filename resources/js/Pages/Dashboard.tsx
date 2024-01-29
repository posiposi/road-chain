import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import setSendTextByLine from '../Components/Dashboard/Line/setSendText';
import RegisterForm from '../Components/Dashboard/Shop/RegisterForm';

export default function Dashboard({ auth }: PageProps) {
  const [inputValue, setInputValue] = useState('');
  // フォーム入力に対するバリデーション エラーありならtrue
  const [isError, setIsError] = useState(true);

  // LINE URLスキームの読み込み
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setIsError(event.target.value === '' ? true : false);
    setSendTextByLine(event.target.value);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={<h2 className="text-xl text-white leading-tight">Dashboard</h2>}
    >
      <Head title="Dashboard" />

      <div className="py-12 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <FormControl isInvalid={isError}>
                <FormLabel className="form-text">
                  LINE送信テスト用フォーム
                </FormLabel>
                <Input
                  value={inputValue}
                  type="text"
                  id="line-test-text"
                  placeholder="送信したいメッセージを入力してください。"
                  onChange={handleInputChange}
                />
                {isError ? (
                  <FormErrorMessage>メッセージが未入力です。</FormErrorMessage>
                ) : (
                  <FormHelperText>
                    LINEでの紹介コード送信テスト用のフォームです
                  </FormHelperText>
                )}
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div className="Btn-wrap">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6" style={{ display: 'flex' }}>
              <RegisterForm />
              <Box ml={2}>
                <a
                  id="line_send_text_icon"
                  href=""
                  className={isError ? 'disabled' : 'active'}
                >
                  <img
                    src="http://localhost/img/LINE_Brand_icon.png"
                    alt="LINEロゴ"
                    style={{ height: '40px', width: '40px' }}
                  />
                </a>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
