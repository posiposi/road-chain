import { useState, ChangeEvent } from 'react';
import {
  Box,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { router } from '@inertiajs/react';

const SearchForm = () => {
  const [searchFormText, setSearchFormText] = useState('');

  const handleSearchFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFormText(event.target.value);
  };

  const searchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    try {
      router.get(
        route('api.shop.search.keyword', { searchText: searchFormText })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex className="mt-10" w="auto" justifyContent="center">
        <Box w="50%">
          <form onSubmit={searchSubmit}>
            <FormControl>
              <InputGroup>
                <Input
                  name="searchText"
                  value={searchFormText}
                  color="white"
                  type="text"
                  placeholder="店舗名や地名を入力してください。"
                  onChange={handleSearchFormChange}
                  isRequired={true}
                />
                <InputRightElement mr="1">
                  <IconButton
                    colorScheme="blue"
                    aria-label="search-shops"
                    icon={<SearchIcon />}
                    size="sm"
                    type="submit"
                  />
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default SearchForm;
