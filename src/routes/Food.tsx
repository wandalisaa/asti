/* eslint-disable linebreak-style */
import * as React from 'react';
import {
  Text,
  Box,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';
import breakfast from '../asset/breakfast.png';
import lunch from '../asset/lunch.png';
import dinner from '../asset/dinner.png';

export default function Food() {
  return (
    <Box my="100px" px="30px">
      <Text fontWeight="bold" fontSize="4xl">
        Healty  Food
      </Text>
      <Stack
        textAlign="left"
        align="left"
        spacing={{ base: 5, md: 10 }}
        py={{ base: 30, md: 50 }}
      >
        <Box p={2} display={{ md: 'flex' }}>
          <Box
            role="group"
            p={6}
            mr="50px"
            maxW="330px"
            w="full"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="2xl"
            rounded="lg"
            pos="relative"
            zIndex={1}
          >
            <Box
              rounded="lg"
              mt={-12}
              pos="relative"
              height="230px"
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${breakfast})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded="lg"
                height={230}
                width={282}
                objectFit="cover"
                src={breakfast}
              />
            </Box>
            <Stack pt={10} align="center">
              <Text color="gray.500" fontSize="sm" textTransform="uppercase">
                Open
              </Text>
              <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
                Breakfast
              </Heading>
            </Stack>
          </Box>
          <Box
            role="group"
            p={6}
            mr="50px"
            maxW="330px"
            w="full"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="2xl"
            rounded="lg"
            pos="relative"
            zIndex={1}
          >
            <Box
              rounded="lg"
              mt={-12}
              pos="relative"
              height="230px"
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${lunch})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded="lg"
                height={230}
                width={282}
                objectFit="cover"
                src={lunch}
              />
            </Box>
            <Stack pt={10} align="center">
              <Text color="gray.500" fontSize="sm" textTransform="uppercase">
                Open
              </Text>
              <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
                Lunch
              </Heading>
            </Stack>
          </Box>
          <Box
            role="group"
            p={6}
            mr="50px"
            maxW="330px"
            w="full"
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow="2xl"
            rounded="lg"
            pos="relative"
            zIndex={1}
          >
            <Box
              rounded="lg"
              mt={-12}
              pos="relative"
              height="230px"
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${dinner})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}
            >
              <Image
                rounded="lg"
                height={230}
                width={282}
                objectFit="cover"
                src={dinner}
              />
            </Box>
            <Stack pt={10} align="center">
              <Text color="gray.500" fontSize="sm" textTransform="uppercase">
                Open
              </Text>
              <Heading fontSize="2xl" fontFamily="body" fontWeight={500}>
                Dinner
              </Heading>
            </Stack>
          </Box>

        </Box>

      </Stack>
    </Box>
  );
}
