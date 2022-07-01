/* eslint-disable max-len */
/* eslint linebreak-style: ["error", "windows"] */
import * as React from 'react';
import {
  Heading,
  Container,
  Text,
  Divider,
  Stack,
  Box,
  Image,
  Link,
  Badge,
  Flex,
} from '@chakra-ui/react';
import botol from '../asset/botol.png';

function AirbnbCard() {
  const property = {
    imageUrl:
      'https://krakataumedika.com/images/2020/02/26/stunting-balita.jpg',
    imageAlt: 'stunting',
    title: 'Mengenal “Stunting” Pada Pertumbuhan Anak',
    commentCount: 34,
    rating: 4,
  };

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" mb="100px">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.commentCount}
            {' '}
            Comments &bull;
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {property.title}
        </Box>
      </Box>
    </Box>
  );
}

export default function Home() {
  return (
    <Box>
      <Container maxW="5xl">
        <Stack
          textAlign="left"
          align="left"
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
            <Text fontSize="2xl">
              <Text as="span" fontWeight="bold">
                ASTI (Atasi Stunting)
              </Text>
              {' '}
              is an application created by the GIGIH
              Generation that aims to help prevent stunting in Indonesia.
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Box
        mx="auto"
        bgColor="#F5F5F5"
        borderRadius="10px"
        borderColor="gray.200"
        borderWidth="2px"
        px="30px"
        color="black"
      >
        {' '}
        <Stack
          textAlign="left"
          align="left"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Box p={2} display={{ md: 'flex' }}>
            <Box flexShrink={0}>
              <Text fontSize="4xl" alignSelf="center" textAlign="center">
                The Prevalence of Child
                {' '}
                <Text as="span" fontWeight="bold">
                  Stunting
                </Text>
                {' '}
                <br />
                in Indonesia
              </Text>
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Flex>
                <Image src={botol} />
                <Text fontSize="4xl" ml="30px">
                  <Text as="span" fontWeight="bold">
                    24,4%
                  </Text>
                  {' '}
                  <br />
                  {' '}
                  (SSGI, 2021)
                </Text>
              </Flex>
            </Box>
          </Box>
        </Stack>
        <Box textAlign="center">
          <Link
            href="/login"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="m"
            fontWeight={600}
            color="blue"
            border="1px"
            borderColor="blue"
            px="60px"
            bg="white.400"
            _hover={{
              bg: 'white.300',
            }}
            borderRadius="10px"
            height="30px"
            textAlign="center"
            alignItems="center"
            mb="20px"
          >
            See Details
          </Link>
        </Box>
        <Box>
          <Text fontSize="4xl" alignSelf="left" textAlign="left">
            What is Childhood
            {' '}
            <Text as="span" fontWeight="bold">
              Stunting
            </Text>
            {' '}
            ?
          </Text>
          <Text color="black" fontSize="2xl">
            <Text as="span" fontWeight="bold">
              Stunting
            </Text>
            {' '}
            is one of the leading measures used to assess childhood malnutrition. It indicates that a child has failed to reach their growth potential as a result of disease, poor health and malnutrition. A child is defined as
            {' '}
            <Text as="span" fontWeight="bold">
              ‘stunted’
            </Text>
            {' '}
            if they are too short for their age. This indicates that their growth and development have been hindered.
          </Text>
          <Link
            href="/login"
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="m"
            fontWeight={600}
            color="blue"
            border="1px"
            borderColor="blue"
            px="60px"
            bg="white.400"
            _hover={{
              bg: 'white.300',
            }}
            borderRadius="10px"
            height="30px"
            textAlign="left"
            alignItems="left"
            mt="20px"
            mb="100px"
          >
            See Details
          </Link>
        </Box>
      </Box>
      <Divider orientation="horizontal" />
      <Heading my="50px" ml="100px">
        Latest News
      </Heading>
      <Box p={4} display={{ md: 'flex' }} mx="50px">
        <AirbnbCard />
        <AirbnbCard />
        <AirbnbCard />
      </Box>
    </Box>
  );
}
