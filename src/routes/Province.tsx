/* eslint linebreak-style: ["error", "windows"] */
import * as React from 'react';
import {
  Text,
  Box,
  Center,
} from '@chakra-ui/react';
import prevalensi from '../asset/prevalensi.png';
import province from '../asset/province.png';

export default function Province() {
  return (
    <Box my="100px" px="30px">
      <Text fontSize="4xl">
        The Prevalence of Child
        {' '}
        <Text as="span" fontWeight="bold">
          Stunting
        </Text>
        {' '}
        <br />
        in each Province of Indonesia
      </Text>
      <Box mt="50px">
        <img src={prevalensi} alt="" />
      </Box>
      <Center textAlign="center" mt="50px">
        <img src={province} alt="" />
      </Center>
    </Box>
  );
}
