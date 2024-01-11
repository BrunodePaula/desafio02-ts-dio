import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { Card } from './components/Card';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Header/>
      </Box>
      <Card/>
    </ChakraProvider>
  );
}

export default App;
