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

const SearchForm = () => {
  // 検索フォームのuseState
  const [searchFormText, setSearchFormText] = useState('');

  // 検索フォーム入力変更時イベント
  const handleSearchFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchFormText(event.target.value);
  };

  // TODO #6検索API作成後に繋ぎ込み実施
  const searchSubmit = async () => {};

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
