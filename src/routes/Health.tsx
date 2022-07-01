/* eslint-disable react/require-default-props */
/* eslint-disable react/function-component-definition */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import kids from '../asset/kids.png';

function Health() {
  return (
    <Container maxW="7xl" p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%"
          >
            <Link href="/#" textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={kids}
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}
        >
          <Heading marginTop="1">
            <Link href="/#" textDecoration="none" _hover={{ textDecoration: 'none' }}>
              Lifestyle to Prevent Stunting in Children
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            mt="20px"
          >
            1. Fulfill Nutritional Needs Since Pregnancy
            <Divider orientation="horizontal" my="20px" />
            To prevent early stunting, pregnant women are encouraged to always meet nutritional needs. In this case, pregnant women are advised to consume healthy and nutritious foods or supplements recommended by doctors. If you have sufficient nutrition, pregnant women should regularly visit their doctor or midwife to check the condition of their pregnancy.
          </Text>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg"
            mt="20px"
          >
            2. Exclusive Breastfeeding
            <Divider orientation="horizontal" my="20px" />
            The World Health Organization (WHO) recommends that mothers begin breastfeeding within one hour of birth, then exclusively breastfeed their babies until six months of age. It would be better if you can continue breastfeeding until your child reaches the age of two years or more. Children who are not exclusively breastfed are more likely to experience stunting.
          </Text>
        </Box>
      </Box>
      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
        >
          3. Support Breastfeeding With Healthy Complementary Foods
          <Divider orientation="horizontal" my="20px" />
          When the baby is more than 6 months old, the mother can provide complementary foods or complementary foods. Make sure the food you choose can meet the macro and micro nutrients that previously came from breast milk. On the other hand, the mother must be careful in choosing these additional products. If you experience unpleasant conditions after consuming these solid foods, it is recommended to consult a doctor immediately.
        </Text>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
        >
          4. Child Development Monitor
          <Divider orientation="horizontal" my="20px" />
          Parents are encouraged to monitor their baby&apos;s condition regularly from height to weight. In addition, parents are encouraged to bring the child regularly to visit the Posyandu or local children&apos;s clinic so that they can find out the early symptoms of stunting and also how to prevent the disease.
        </Text>
        <Text
          as="p"
          marginTop="2"
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize="lg"
          mt="20px"
          mb="100px"
        >
          5. Always Maintain Environmental Cleanliness
          <Divider orientation="horizontal" my="20px" />
          In playing, sometimes children don&apos;t really pay attention to the level of environmental cleanliness. On the other hand, children are very susceptible to disease. In this case, the role of parents must be active to always clean the child&apos;s play area and always monitor the child. One of the triggers for stunting is diarrhea which is caused by exposure to waste products that enter the body. It is expected to always clean the child&apos;s play area regularly.
        </Text>
        <Divider orientation="horizontal" my="20px" />
        <Link
          href="/cause"
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
          height="50px"
          textAlign="center"
          alignItems="center"
          my="100px"
        >
          Cause of Stunting
        </Link>
        <Link
          href="/province"
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
          height="50px"
          textAlign="center"
          alignItems="center"
          my="100px"
        >
          Prevalence of Stunting
        </Link>
      </VStack>
    </Container>
  );
}

export default Health;
