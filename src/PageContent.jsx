import { Flex,Title,Text, BackgroundImage } from "@mantine/core";
import {em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';

export default function PageContent(){
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);  

    return(
        <Flex bg={'#061449'} h={isMobile?"90dvh":'85dvh'}  w={'100vw'} justify={'center'} align={'center'}>
                <Flex h={'75%'} w={isMobile?'100%':'60%'} direction={isMobile?'column':'row'} align={'center'} >
                        <Flex h={isMobile?"7%":'10%'} justify={'center'} align={'center'} w={isMobile?"30%":'12%'} bg={'white'} style={{position:'absolute',zIndex:2,borderRadius:"15px",bottom:isMobile?"42%":'60%',right:isMobile?"2%":'43%'}}>
                            <img style={{height:isMobile?"100%":'100%',width:'100%',objectFit:'contain',zIndex:1}} src="CD-Pension-black.png" ></img>

                        </Flex>
                        <Flex h={'100%'}  w={isMobile?"100%":'50%'}  justify={'center'} align={'center'} >
                        <img style={{height:"100%",width:'100%',objectFit:'fill',zIndex:1,borderRadius:"15px"}} src="logo.png" ></img>
                        </Flex>
                        <Flex  h={'100%'} w={isMobile?"100%":'50%'}  direction={'column'} justify={'center'} align={'center'}>
                            <Title order={isMobile?2:1} ml={'lg'} style={{color:'white'}}>Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension</Title>
                            <Text size={isMobile?'md':"xl"} ml={'lg'} mt={'sm'} style={{color:'white'}}>QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.</Text>
                        </Flex>
                </Flex>
        </Flex>
    )
}