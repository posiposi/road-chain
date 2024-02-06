import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon, StarIcon, ChatIcon } from '@chakra-ui/icons';
import { Shop } from '@/types/Shop';

interface ShopDetailProps {
  shop: Shop;
}

const ShopDetail = (props: ShopDetailProps) => {
  return (
    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-gray-900">
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
        width="auto"
        height="auto"
      >
        <Image
          objectFit="cover"
          // TODO 動的生成画像を表示する(NOIMAGEの場合はデフォルト画像を表示する)
          src="http://localhost/img/Shop_Detail_IMG.jpeg"
          alt="店舗画像"
        />
        <Stack divider={<StackDivider borderColor="black" />}>
          <CardBody>
            <Heading size="md">{props.shop.shop_name}</Heading>
            <Link
              // TODO URL生成のメソッドコンポーネントを作成をする
              href={`${import.meta.env.VITE_GOOGLE_MAPS_SEARCH_URL}${
                props.shop.shop_address
              }`}
              color="blue"
              isExternal
            >
              {props.shop.shop_address} <ExternalLinkIcon mx="2px" />
            </Link>
            <Flex direction="row">
              <Text>{props.shop.shop_tel}</Text>
              <Text ml="2">{props.shop.shop_email}</Text>
            </Flex>
            <Text mt="1">{props.shop.description}</Text>
          </CardBody>
          {/* Google Map APIサンプル */}
          <Box>
            <Image
              objectFit="cover"
              src="http://localhost/img/Google_Map_Sample.png"
              alt="マップサンプル"
              width="1000px"
              height="200px"
            />
          </Box>
          <CardFooter>
            <Link>
              <Button
                colorScheme="white"
                flex="1"
                variant="ghost"
                leftIcon={<StarIcon />}
              >
                Like
              </Button>
            </Link>
            <Link>
              <Button
                colorScheme="white"
                flex="1"
                variant="ghost"
                leftIcon={<ChatIcon />}
              >
                Comment
              </Button>
            </Link>
            <Button variant="solid" colorScheme="blue">
              予約する
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default ShopDetail;
