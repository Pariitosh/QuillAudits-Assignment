import { Flex,Title,Text, Divider,Button } from "@mantine/core";
import {em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
export default function Diffrences(){
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);  

    return( 
        <>
    <Flex mt={'lg'} mb={'lg'} h={isMobile?"70dvh":'60dvh'} w={'100dvw'}  justify={'center'} align={'center'}>
        <Flex w={isMobile?"90%":'50%'} h={'100%'}  direction={isMobile?"column":'row'} justify={'space-between'} align={'center'}>
            <Flex w={isMobile?"90%":'44%'}  direction={'column'} justify={'space-between'} align={'center'}>
                <Flex w={'100%'}  bg={'#ffabc9'} align={'center'}>
                    <Title order={3}>Before QuillAudits</Title>
                </Flex>
                <Text mt={'lg'} size="lg">Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains</Text>
                <Text  mt={'lg'} size="lg">Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance.</Text>
            </Flex>
            {!isMobile&&<Divider orientation="vertical" color="gray" mt={'md'} />}
            <Flex w={isMobile?"90%":'44%'}   direction={'column'} justify={'space-between'} align={'center'}>
                <Flex w={'100%'} bg={'#abcdff'} align={'center'}>
                    <Title order={3}>After QuillAudits</Title>
                </Flex>
                <Text mt={'lg'} size="lg">Implementation of reentrancy protection mechanisms.</Text>
                <Text  mt={'lg'} size="lg">Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.</Text>
            </Flex>
        </Flex>
    </Flex>
    <Flex h={isMobile?"30dvh":'20dvh'} w={'100dvw'}  justify={'center'}>
        <Flex h={'100%'} w={isMobile?"90%":'50%'}  justify={'center'} align={'center'} direction={'column'}>
        <Title style={{textAlign:"center",color:""}}>See how QuillAudits is a trusted partner in 1000+ Audit stories</Title>
        <Button mt={'md'} radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>

        </Flex>
    </Flex>
    </>
    )
}