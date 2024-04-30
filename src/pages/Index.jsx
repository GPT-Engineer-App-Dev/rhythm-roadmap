import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { FaMusic, FaTicketAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box bg="gray.800" minH="100vh" p={5} color="white">
      <Flex direction="column" align="center" justify="center" h="100vh">
        <Heading as="h1" size="2xl" mb={4}>
          The Rock Legends Tour
        </Heading>
        <Text fontSize="xl" mb={8}>
          Join us on our world tour and experience the best of rock music live!
        </Text>
        <Button rightIcon={<FaTicketAlt />} colorScheme="red" size="lg">
          Buy Tickets
        </Button>
        <Flex mt={10} w="full" justify="space-around">
          <Image src="https://via.placeholder.com/150" alt="Band Image 1" boxSize="150px" />
          <Image src="https://via.placeholder.com/150" alt="Band Image 2" boxSize="150px" />
          <Image src="https://via.placeholder.com/150" alt="Band Image 3" boxSize="150px" />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;