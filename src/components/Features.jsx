import { Box, SimpleGrid, Icon, Text, Stack, Flex} from '@chakra-ui/react'
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'

const Card = (props) => {
  return (
    <Stack
      p = {10}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      bg = {'white'}
      overflow="hidden">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {props.icon}
      </Flex>
      <Text fontWeight={600}>{props.title}</Text>
      <Text color={'gray.600'}>{props.text}</Text>
    </Stack>
  )
}

export default function Features() {
  return (
    <Box backgroundColor="gray.50" px={'10em'} py={'15%'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={'5em'}>
        <Card
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Meet Your Tutor'}
          text={
            'Our courses offer a learning experience designed to cater to every individual. We offer flexible hours and our tutors are always here to support you when you need it the most.'
          }
        />
        <Card
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Andrew Su'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
        <Card
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
          }
        />
      </SimpleGrid>
    </Box>
  )
}