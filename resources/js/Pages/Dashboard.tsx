import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Button, Box } from '@chakra-ui/react';
import { useEffect } from 'react';

export default function Dashboard({ auth }: PageProps) {
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
            <div className="p-6 text-gray-900">You're logged in!</div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6" style={{ display: 'flex' }}>
              <Button colorScheme="red">fuga</Button>
              <Box mt={1.5} ml={2}>
                <div
                  className="line-it-button"
                  data-lang="ja"
                  data-type="share-a"
                  data-env="REAL"
                  data-url="https://developers.line.biz/ja/docs/line-social-plugins/install-guide/using-line-share-buttons/#using-official-line-icons"
                  data-color="default"
                  data-size="large"
                  data-count="false"
                  data-ver="3"
                  style={{ display: 'none' }}
                ></div>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
