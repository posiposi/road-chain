import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import {
  Button,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import setSendTextByLine from '../Components/Dashboard/Line/setSendText';

export default function Dashboard({ auth }: PageProps) {
  const [inputValue, setInputValue] = useState('');

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
    setSendTextByLine(event.target.value);
  };

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
              <FormControl>
                <FormLabel>LINE送信テスト用フォーム</FormLabel>
                <Input
                  value={inputValue}
                  type="text"
                  id="line-test-text"
                  placeholder="送信したいメッセージを入力してください。"
                  onChange={handleInputChange}
                />
                <FormHelperText>
                  LINEでの紹介コード送信テスト用のフォームです
                </FormHelperText>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6" style={{ display: 'flex' }}>
              <Button colorScheme="red">fuga</Button>
              <Box ml={2}>
                <a id="line_send_text_icon" href="">
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
