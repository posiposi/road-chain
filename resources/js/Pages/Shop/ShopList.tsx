import { Head } from '@inertiajs/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { ShopListProps } from '@/types/ShopList';

const ShopList = (props: ShopListProps) => {
  return (
    <>
      <Head title="Welcome" />
      <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-gray-900 selection:text-white">
        <Grid templateColumns="repeat(3, 1fr)" gap={6} px={5} py={5}>
          {props.shopList.map((shop) => (
            <GridItem>
              <Card>
                <CardHeader>
                  <Heading size="md">{shop.shop_name}</Heading>
                </CardHeader>
                <CardBody>
                  <Text>店舗説明文がここに入る</Text>
                </CardBody>
                <CardFooter>
                  <Button>View here</Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ShopList;
