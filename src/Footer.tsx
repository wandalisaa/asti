/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable react/require-default-props */
/* eslint-disable react/react-in-jsx-scope */
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import gigih from './asset/gigih.png';
import yabb from './asset/yabb.png';
import goto from './asset/goto.png';
import km from './asset/km.png';

export default function Footer() {
  return (
    <Box bg="black" color="white">
      <Container
        as={Stack}
        maxW="6xl"
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack spacing={3}>
          {' '}
          <Text fontWeight="bold">Contact</Text>
          <Text>asti@gmail.com</Text>
          <Text>
            ASTI (Atasi Stunting) is an application created by the GIGIH
            {' '}
            <br />
            Generation that aims to help prevent stunting in Indonesia.
          </Text>
        </Stack>

        <Stack>
          <Text fontWeight="bold">Supported by :</Text>
          <Image src={gigih} alt="gigih" />
          <Image src={goto} alt="goto" />
        </Stack>
        <Stack>
          <Image src={km} alt="km" />
          <Image src={yabb} alt="yabb" />
        </Stack>
      </Container>
    </Box>
  );
}
