import { Flex,Title,Text,Button, Divider } from "@mantine/core";

export default function FooterMobile(){
    return(
        <Flex w={'100dvw'} bg={'#0c1a4d'}  justify={'center'}>
            <Flex w={'90%'} h={'100%'} direction={'column'}>
                <Flex w={'100%'} h={'10dvh'}  justify={'center'} direction={'column'} align={'center'}>

                <Title style={{color:"white"}} order={1} fw={700}>QuillAudits</Title>
                <Text style={{color:"white"}}>Making Web3 a safer place</Text>

                </Flex>
                <Flex w={'100%'} h={'15dvh'}  wrap={'wrap'} justify={'space-around'}>
                <Button w={'40%'} mt={'lg'} radius={'md'} size="sm" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>WAGSI Grants</Button>
                <Button w={'40%'}mt={'lg'} radius={'md'} size="sm" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Ambassador Program</Button>
                <Button w={'40%'}mt={'lg'} radius={'md'} size="sm" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Refer-Earn-Secure</Button>
                <Button w={'40%'}mt={'lg'} radius={'md'} size="sm" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Partnership Program</Button>

                </Flex>

                <Flex w={'100%'} h={'65dvh'}  mt={'lg'}>
                    <Flex w={'50%'} h={'100%'}   direction={'column'} justify={'space-between'}>
                        <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={4}>Audit Services</Title>
                        <Title style={{color:"white"}} fw={600} order={4}>Ethereum Audit</Title>
                            <Title style={{color:"white",alignSelf:'flex-start'}} fw={600} order={5}>Polygon Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>BSC Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Solana Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Near Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Algorand Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Tezos Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Hyperledger Fabric Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>L1 Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Polkadot Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Wallet Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>ZkSync Audit</Title>
                            <Title style={{color:"white"}} fw={600} order={5}>Starknet Audit</Title>
                    </Flex>
                    <Flex w={'50%'} h={'80%'}  direction={'column'} justify={'space-between'}>
                    <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={4}>Quill Ecosystem</Title>
                    <Title style={{color:"white"}} fw={600} order={4}>Quill AI </Title>
                                <Title style={{color:"white"}} fw={600} order={5}>QuillCheck</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>QuillShield</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>QuillAcademy</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>QuillMonitor</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Web3Suggest</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Explore All Tools</Title>
                    </Flex>
                </Flex>
                <Flex mt={'xl'} w={'100%'} h={'55dvh'}>
                    <Flex  w={'100%'} h={'100%'} >
                    <Flex  w={'50%'} h={'90%'}  direction={'column'} justify={'space-between'}>
                    <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"4px",textUnderlineOffset:"5px"}} order={4}>Other Services</Title>

                        <Title style={{color:"white"}} fw={600} order={5}>Quill AI </Title>
                        <Title style={{color:"white"}} fw={600} order={5}>Red Teaming</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>dApp Pentesting</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>DeFi Diligence</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>NFT Due Diligence</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>Rug Pull Due Diligence</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>Security Consultation</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>Blockchain Forensics</Title>
                        <Title style={{color:"white"}} fw={600} order={5}>KYC (Know Your Customer)</Title>
                    </Flex>
                    <Flex  w={'50%'} h={'90%'} direction={'column'} justify={'space-between'}>
                    <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"2px",textUnderlineOffset:"5px"}} order={4}>Quick Links</Title>
                    <Title style={{color:"white"}} fw={600} order={4}>Pricing</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Audit Process</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Our Audits</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Testimonials</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Security Synopsis</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Blog</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Clients</Title>
                                <Title style={{color:"white"}} fw={600} order={5}>Careers</Title>
                    </Flex>
                    </Flex>
                </Flex>
                <Flex w={'100%'} h={'15dvh'}  direction={'column'} justify={'space-between'}>
                <Title style={{textDecoration:"underline",textDecorationColor:"blue",color:"white",textDecorationThickness:"2px",textUnderlineOffset:"5px"}} order={4}>More About Quill</Title>
                <Title style={{color:"white"}} fw={600} order={5}>About Us</Title>
                <Title style={{color:"white"}} fw={600} order={5}>FAQs</Title>
                <Title style={{color:"white"}} fw={600} order={5}>Blockchains We Audit</Title>

                </Flex>
                <Flex w={'100%'} h={'15dvh'}  direction={'column'} mt={'lg'} justify={'space-between'}>
                <Title style={{color:"white"}} order={4}>Contact us:</Title>
                <Title style={{color:"white"}} fw={600} order={5}>About Us</Title>
                <Title style={{color:"white"}} fw={600} order={5}>FAQs</Title>
                <Title style={{color:"white"}} fw={600} order={5}>Blockchains We Audit</Title>

                </Flex>
                <Title order={4} fw={600} style={{color:"white"}} mt={'xl'}>Our Location</Title>
                <Text style={{color:"white"}} mt={'lg'}>Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box : 416654</Text>
            
                <Flex h={'10dvh'} w={'100%'} justify={'space-around'} mt={'xl'}>

                <img style={{height:"5dvh",objectFit:'fill'}} src="Image 2.png" ></img>
                <img style={{height:"5dvh",objectFit:'fill',}} src="Image 1.png" ></img>

                </Flex>

                <Flex h={'10dvh'} w={'100%'} justify={'space-around'} >

                    <img style={{height:"20%",objectFit:'contain'}} src="X.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="linkedin.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="telegram.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="reddit.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="Medium.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="discord.png" ></img>
                    <img style={{height:"20%",objectFit:'contain'}} src="youtube.png" ></img>

                </Flex>

               
                <Divider mb={'md'}></Divider>
                <Text size="sm" style={{color:"white",alignSelf:"center"}}>Privacy Policy</Text>
                <Text size="sm" style={{color:"white",alignSelf:"center"}} mb={'xl'}>All Rights Reserved. © Copyright 2023. QuillAudits - LLC</Text>
            </Flex>
        </Flex>
    )
}