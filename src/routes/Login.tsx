/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  Heading,
  Text,
  Stack,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Flex,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={900}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
          textAlign="left"
        >
          AS
          <Text as="span" color="#2B51CB">
            TI
          </Text>
          {' '}
          (Atasi
          {' '}
          <Text as="span" color="#2B51CB">
            Stunting
          </Text>
          {' '}
          )
          {' '}
        </Heading>
        <Stack>
          <Box
            rounded="lg"
            boxShadow="lg"
            p={8}
            width="500px"
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Username</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Flex>
                  <Text mr={3} fontSize="12px">
                    Don&apos;t have an account?
                    {' '}
                    <Link href="/register">
                      Register here.
                    </Link>
                    {' '}
                  </Text>
                  <Button
                    bg="#2B51CB"
                    color="white"
                    _hover={{
                      bg: 'blue.500',
                    }}
                    alignSelf="right"
                    width="50%"
                  >
                    Login
                  </Button>
                </Flex>

              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
