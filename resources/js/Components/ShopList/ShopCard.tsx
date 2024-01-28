import { Shop } from '@/types/Shop';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Image,
  Flex,
  Box,
  Avatar,
} from '@chakra-ui/react';

interface ShopCardProps {
  shop: Shop;
}

const ShopCard = ({ shop }: ShopCardProps) => {
  return (
    <Card maxW="md" minHeight={670} bg="gray.700" color="white">
      <CardHeader>
        <Flex>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="店舗画像" src="https://bit.ly/sage-adebayo" />

            <Box className="shop_address">
              <Heading size="sm">{shop.shop_name}</Heading>
              <Text className="shop_address_text">{shop.shop_address}</Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>
          {shop.description
            ? shop.description
            : 'これはテスト用の日本語テキストです。このテキストは、プログラムの動作確認のために使用されます。日本語の文字列処理をテストする際には、実際の文章と同じように、さまざまな文字が混在するテキストが最適です。このテキストは、ひらがな、カタカナ、漢字、数字、記号を含んでいます。これにより、多様な文字種の処理を確認することができます。'}
        </Text>
      </CardBody>

      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          '& > button': {
            minW: '136px',
          },
        }}
      ></CardFooter>
    </Card>
  );
};

export default ShopCard;
