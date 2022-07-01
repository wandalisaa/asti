/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
import * as React from 'react';
import {
  Heading,
  Text,
  Stack,
  Box,
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
            <Text fontWeight="bold">Contact</Text>
            <Text my="50px" fontSize="3xl">asti@gmail.com</Text>
            <Text>
              ASTI (Atasi Stunting) is an application created by the GIGIH
              {' '}
              <br />
              Generation that aims to help prevent stunting in Indonesia.
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
