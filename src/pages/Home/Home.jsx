import { PhoneIcon } from '@chakra-ui/icons';
import { Flex, Heading } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        gap={'24px'}
        mb={'48px'}
      >
        <PhoneIcon fontSize={['32px', '64px']} />
        <Heading fontSize={['32px', '64px']}>
          Welcome to contacts aplication
        </Heading>
      </Flex>
    </div>
  );
}
