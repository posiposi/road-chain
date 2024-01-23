import { Head } from '@inertiajs/react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
  Box,
  Avatar,
} from '@chakra-ui/react';
import { ShopListProps } from '@/types/ShopList';
import ShopCard from '../../Components/ShopList/ShopCard';

const ShopList = (props: ShopListProps) => {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-gray-900">
        {props.shopList.length > 0 ? (
          <Grid templateColumns="repeat(3, 1fr)" gap={6} px={5} py={5}>
            {props.shopList.map((shop) => (
              <GridItem key={shop.shop_id}>
                <ShopCard shop={shop} />
              </GridItem>
            ))}
          </Grid>
        ) : (
          // TODO: コンポーネントとして切り出す
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              該当する店舗が存在しません！
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              検索条件を変更して再度検索してください。
            </AlertDescription>
          </Alert>
        )}
      </div>
    </>
  );
};

export default ShopList;
