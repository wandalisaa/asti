/* eslint linebreak-style: ["error", "windows"] */
import * as React from 'react';
import {
  Text,
  Box,
  Flex,
  Center,
  FormControl,
  Input,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import simulation from '../asset/simulation.png';

export default function Simulation() {
  return (
    <Box alignSelf="center" alignItems="center" p={100}>
      <Text fontWeight="bold" fontSize="3xl" mb="50px">
        Height & Weight Simulation
      </Text>
      <Center>
        <img src={simulation} alt="" />
      </Center>
      <Center>
        <Text fontSize="small">
          Height and Weight Chart For Kids
        </Text>
      </Center>
      <Center mt="100px">
        <FormControl mr="20px" width="400px" id="email">
          <FormLabel>Age</FormLabel>
          <Input type="number" />
        </FormControl>
      </Center>
      <Flex>
        <FormControl mr="20px" id="email">
          <FormLabel>Height</FormLabel>
          <Input type="number" />
        </FormControl>
        <FormControl mr="20px" id="Weight">
          <FormLabel>Weight</FormLabel>
          <Input type="number" />
        </FormControl>
      </Flex>
      <Center>
        <Button
          bg="#2B51CB"
          color="white"
          _hover={{
            bg: 'blue.500',
          }}
          alignSelf="right"
          width="200px"
          my="50px"
        >
          Check
        </Button>
      </Center>
      <Center>
        <Text fontWeight="bold">Your children is Underweight.</Text>
      </Center>

    </Box>
  );
}
