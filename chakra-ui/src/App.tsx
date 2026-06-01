import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'

function App() {
  return (
    <Box
      minH="100vh"
      bg="gray.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        gap={4}
        bg="white"
        p={10}
        borderRadius="xl"
        boxShadow="lg"
      >
        <Heading color="teal.500">
          Chakra UI + Vite
        </Heading>

        <Text fontSize="lg">
          Hola David 👋
        </Text>

        <Button colorScheme="teal">
          Botón Chakra
        </Button>
      </VStack>
    </Box>
  )
}

export default App