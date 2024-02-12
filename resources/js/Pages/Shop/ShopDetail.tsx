import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from '@chakra-ui/react';
import { ExternalLinkIcon, StarIcon, ChatIcon } from '@chakra-ui/icons';
import { ShopDetailProps } from '@/types/ShopDetail';

const ShopDetail = (props: ShopDetailProps) => {
  const shop = {
    image1: 'http://localhost/img/Shop_Detail_IMG.jpeg',
    image2: 'http://localhost/img/LAUGHING_MAN_TEST1.jpg',
  };

  return (
    <Box className="dark:bg-gray-900">
      <Container maxW="container.lg" bg="gray.700">
        <Box p={5}>
          <Text fontSize="2xl" fontWeight="bold" color="white">
            {props.shop.shop_name}
          </Text>
          <Flex>
            <Image
              src={shop.image1}
              alt="店舗画像"
              objectFit="cover"
              width="50%"
              height="600px"
            />
            <Avatar src={shop.image2} size="2xl" marginLeft="10px" />
          </Flex>
          <Stack spacing={3} mt={5}>
            <Box>
              <Tabs>
                <TabList>
                  <Tab color="white" _selected={{ color: 'red' }}>
                    基本情報
                  </Tab>
                  <Tab color="white" _selected={{ color: 'red' }}>
                    特徴
                  </Tab>
                  <Tab color="white" _selected={{ color: 'red' }}>
                    説明
                  </Tab>
                </TabList>
                <TabPanels height="130px">
                  <TabPanel>
                    <Link
                      // TODO URL生成のメソッドコンポーネントを作成する
                      href={`${import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL}${
                        props.shop.shop_address
                      }`}
                      color="white"
                      isExternal
                    >
                      {props.shop.shop_address} <ExternalLinkIcon mx="2px" />
                    </Link>
                    <Text color="white">{props.shop.shop_tel}</Text>
                    <Text color="white">{props.shop.shop_email}</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text color="white">特徴を表示する予定</Text>
                  </TabPanel>
                  <TabPanel>
                    <Text color="white">{props.shop.description}</Text>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
            {/* Google Maps APIでの地図表示を行う部分 */}
            <Box width="100%" height="500px" bg="gray.200" />
            <Stack direction="row" spacing={3}>
              <Button
                leftIcon={<StarIcon />}
                colorScheme="yellow"
                variant="outline"
              >
                お気に入り登録
              </Button>
              <Button
                leftIcon={<ChatIcon />}
                colorScheme="teal"
                variant="outline"
              >
                メッセージ
              </Button>
              <Button colorScheme="blue">予約する</Button>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopDetail;
