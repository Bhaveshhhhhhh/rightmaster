import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>
        <Container maxW={'container.xl'} minH={'100vh'} p="16">
          <Heading 
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
          m="auto">
            Services
          </Heading>
          <Stack h={"full"} p={"4"} alignItems={"center"} direction={["column", "row"]}>
            <Image src={img5}  h={['40', '400']} filter={'hue-rotate(-3deg)'} />
            <Text 
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}>
              At Right Master, we believe that knowledge is power, and that learning should be a lifelong journey. That’s why we are committed to providing our viewers with the tools and resources they need to succeed in their educational and professional endeavors.

Creator :- Vishal

So why wait? Subscribe to Right Master today and join the millions of people around the world who are using our videos to learn, grow, and succeed. With our engaging content, expert knowledge, and commitment to excellence, we are the ultimate resource for anyone who wants to stay informed and inspired in the fast-paced world of science and technology



Thankyou😇❤️..
            </Text>
          </Stack>
        </Container>
    </Box>
  );
};

const MyCarousel = () =>(
<Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}>
    <Box w="full" h={'100vh'}>
        <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Watch The Future
        </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
        <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
            Future is Gaming
        </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
        <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
            Gaming on Console
        </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
        <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'whiteAlpha.700'} color={'black'} {...headingOptions}>
          Night is COOL
        </Heading>
    </Box>
</Carousel>
)
export default Home

