import { Shop } from '@/types/Shop';
import { ShopListProps } from '@/types/ShopList';
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
  console.log(shop);
  return (
    <Card maxW="md">
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
          中日ドラゴンズは12球団一弱いと言われているため大阪の人から中日ファンはマゾと言われてしまう。来年は最下位を脱出してなんとかそう言われないように頑張って欲しい。
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
