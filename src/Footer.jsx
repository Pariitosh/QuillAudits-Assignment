import { Flex, Title,Text, Button, Divider } from "@mantine/core";

export default function Footer(){
    return (
        <Flex h={'100dvh'} w={'100dvw'} bg={'#0c1a4d'} justify={'center'}>
            <Flex h={'100%'} w={'80%'} direction={'column'}>
                <Flex h={'15%'} w={'100%'}  direction={'column'}>
                    <Title style={{color:"white"}} mt={'sm'} fw={400}>QuillAudits</Title>
                    <Text style={{color:"white"}} ml={'md'}>Making Web3 a safer place</Text>
                </Flex>
                <Flex h={'65%'} w={'100%'} >
                    <Flex w={'40%'} h={'100%'}  justify={'space-around'}>
                        <Flex w={'50%'} h={'100%'} direction={'column'}>
                            <Flex h={'30%'} w={'100%'}  direction={'column'} justify={'space-around'}>
                                <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={2}>More About Quill</Title>
                                <Title style={{color:"white",cursor:"pointer"}} fw={600} order={4}>About us</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>FAQ</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>BlockChains We Audit</Title>
                            </Flex>
                            <Flex mt={'lg'} h={'20%'} w={'100%'}  direction={'column'} justify={'space-around'}>
                                <Title style={{color:"white"}} fw={600} order={4}>Contact us</Title>
                                <Title style={{color:"white",textDecoration:"underline"}} fw={600} order={4}>audits@quillhash.com</Title>
                                <Title style={{color:"white",textDecoration:"underline"}} fw={600} order={4}>t.me/quillaudits</Title>
                            </Flex>
                            <Flex mt={'lg'} h={'40%'} w={'100%'} direction={'column'} justify={'space-evenly'}>
                                <Title style={{color:"white"}} order={3} fw={600}>Our Location:</Title>
                                <Text style={{color:"white"}} size="lg">Office 104/105 Level 1,
Emaar Square, Building 4
Sheikh Mohammed Bin Rashid
Boulevard Downtown Dubai,
United Arab Emirates
P.O box: 416654</Text>
                            </Flex>
                        </Flex>
                        <Flex w={'50%'} h={'100%'}  direction={'column'} justify={'space-between'} >
                            <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"3px"}} order={2}>Audit Services</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Ethereum Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Polygon Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>BSC Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Solana Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Near Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Algorand Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Tezos Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Hyperledger Fabric Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>L1 Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Polkadot Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Wallet Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>ZkSync Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={4}>Starknet Audit</Title>
                            

                        </Flex>
                    </Flex>
                    <Flex w={'60%'} h={'100%'}  direction={'column'}>
                        <Flex w={'100%'} h={'70%'}  justify={'center'}>
                            <Flex w={'33%'} h={'100%'}  direction={'column'} gap={'3%'}>
                                <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={2}>Quill Ecosystem</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Quill AI </Title>
                                <Title style={{color:"white"}} fw={600} order={4}>QuillCheck</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>QuillShield</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>QuillAcademy</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>QuillMonitor</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Web3Suggest</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Explore All Tools</Title>
                            </Flex>
                            <Flex w={'33%'} h={'100%'}  direction={'column'} gap={'3%'}>
                                <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={2}>Other Services</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Red Teaming</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>dApp Pentesting</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>DeFi Diligence</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>NFT Due Diligence</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Rug Pull Due Diligence</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Security Consultation</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Blockchain Forensics</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>KYC (Know Your Customer)</Title>
                            </Flex>
                            <Flex w={'33%'} h={'100%'}  direction={'column'} gap={'3%'}>
                                <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={2}>Quick Link</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Pricing</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Audit Process</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Our Audits</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Testimonials</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Security Synopsis</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Blog</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Clients</Title>
                                <Title style={{color:"white"}} fw={600} order={4}>Careers</Title>
                            </Flex>

                        </Flex>
                        <Flex w={'100%'} h={'30%'}  direction={'column'}>
                        <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={1}>Our Programmes</Title>
                        <Flex w={'100%'} justify={'space-between'} mt={'lg'}>
                        <Button radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>
                        <Button radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>
                        <Button radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>
                        <Button radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>

                        </Flex>

                        </Flex>
                    </Flex>
                </Flex>
                <Flex h={'15%'} w={'100%'}  direction={'row'} justify={'space-between'}>
                    <Flex w={'35%'}  h={'100%'} justify={'center'} align={'center'}>
                    <img style={{height:"40%",objectFit:'contain'}} src="Image 2.png" ></img>
                    <img style={{height:"40%",objectFit:'contain'}} src="Image 1.png" ></img>

                    </Flex>
                    <Flex w={'40%'}  h={'100%'} justify={'space-evenly'} align={'center'}>
                    <img style={{height:"20%",objectFit:'contain'}} src="X.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="linkedin.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="telegram.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="reddit.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="Medium.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="discord.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="youtube.png" ></img>
                    </Flex>
                </Flex>
                <Divider style={{color:"gray"}}></Divider>
                <Flex h={'10%'} w={'100%'}  justify={'space-between'} align={'center'}>
                    <Text style={{color:'white'}}>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</Text>
                    <Text style={{color:'white'}}>Privacry Policy</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}