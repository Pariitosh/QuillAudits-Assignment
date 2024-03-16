import { Flex,Text,Title,List,Rating, Button, TextInput } from "@mantine/core";
import {em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
export default function MainContent(){
    const isMobile = useMediaQuery(`(max-width: ${em(750)})`);  

    return(
        <>
        <Flex h={'25dvh'} w={'100dvw'}  justify={'center'}>
            <Flex w={isMobile?'90%':'60%'} h={'100%'} justify={'space-between'} align={'center'}>
                <Flex h={'80%'} w={isMobile?'100%':'44%'}  justify={'center'} align={'center'}>
                    <Text>Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.</Text>
                </Flex>
                {!isMobile&&<Flex h={'100%'} w={'44%'} justify={'center'} align={'flex-end'}>
                    <Flex h={'60%'} w={'80%'}  style={{border:"2px solid blue",borderRadius:"15px"}} justify={'center'} align={'center'}>
                        <Flex h={'80%'} w={'80%'}  direction={'column'} justify={'space-between'}>
                            <Flex h={'40%'} w={'100%'}  direction={'column'}>
                                <Text style={{color:"gray"}}>Headquarters</Text>
                                <Text>Switzerland</Text>
                            </Flex>
                            <Flex h={'40%'} w={'100%'}   direction={'column'}>
                                <Text style={{color:"gray"}}>Chain</Text>
                                <Text>Pulse Blockchain</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>}
            </Flex>
        </Flex>
        <Flex  w={'100dvw'}  justify={'center'}>
            <Flex w={isMobile?'90%':'60%'} h={'60%'}  >
                <Flex h={'100%'} w={isMobile?'100%':'60%'}  direction={'column'}>
                    <Title>CarpeDiem Pension's Flexible, Blockchain-Enabled Future</Title>
                    <Text size={isMobile?'md':'lg'} mb={'lg'} mt={'lg'}>CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet. </Text>
                    <img imgstyle={{height:"80%",objectFit:'contain'}} src="image 17.png" ></img>
                    <Title mt={'lg'}>CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting</Title>
                    <Text mb={'lg'} mt={'lg'}>CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension. </Text>
                    <img imgstyle={{height:"80%",objectFit:'contain'}} src="image 18.png" ></img>
                    <Title mt={'lg'}>CarpeDiem Pension's Journey Through our Audit Process</Title>
                    <Title mt={'lg'} order={2}>1. Information Gathering:</Title>
                    <List  size="xl">
                        <List.Item mt={'md'}>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</List.Item>
                        <List.Item mt={'md'}>Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.</List.Item>
                        <List.Item mt={'md'}>Discussed client concerns and specific areas of focus for the audit.</List.Item>
                    </List>
                    <Title mt={'xl'} order={2}>2. Manual Code Review:</Title>
                    <List size="xl">
                        <List.Item mt={'md'}>Conducted a line-by-line review of the smart contract code, focusing on:</List.Item>
                        <List withPadding size="xl" mt={'md'}>
                            <List.Item>Vulnerability identification: Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.</List.Item>
                            <List.Item mt={'md'}>Logic flaws: Identifying inconsistencies or unintended behaviors in the code logic.</List.Item>
                            <List.Item mt={'md'}>Tokenomics correctness: Verifying if the code accurately implements the intended economic model and token distribution mechanisms.</List.Item>
                            <List.Item mt={'md'}>Solidity best practices: Compliance with secure coding standards and adherence to established guidelines.</List.Item>
                        </List>
                    </List>
                    <Title mt={'xl'} order={2}>3. Functional Testing:</Title>
                    <List  size="xl">
                        <List.Item mt={'md'}>Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.</List.Item>
                        <List.Item mt={'md'}>Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.</List.Item>
                        <List.Item mt={'md'}>Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).</List.Item>
                        <List.Item mt={'md'}>Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.</List.Item>

                    </List>
                    <Title mt={'xl'} order={2}>4. Automated Testing:</Title>
                    <List  size="xl">
                        <List.Item mt={'md'}>Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.</List.Item>
                        <List.Item mt={'md'}>Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.</List.Item>
                        <List.Item mt={'md'}>Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.</List.Item>

                    </List>
                    <Title mt={'xl'} order={2}>5. Reporting & Remediation:</Title>
                    <List  size="xl">
                        <List.Item mt={'md'}>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.</List.Item>
                        <List.Item mt={'md'}>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</List.Item>
                        <List.Item mt={'md'}>Collaborated with the CDP team to prioritize and address the identified issues.</List.Item>
                        <List.Item mt={'md'}>Conducted additional verification testing after vulnerability fixes were implemented.</List.Item>

                    </List>
                    <Title mt={'xl'}>QuillAudits' Strategic Approach to CDP Security Audits</Title>
                    <Text  mt={'xl'} size="lg">We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution.</Text>
                    <Title mt={'xl'}>Comprehensive Audit Discoveries and Remediation Strategies</Title>
                    <Text mt={'xl'} size="lg">Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :</Text>

                    <Title mt={'lg'} fw={600} order={4}>1. Unauthorized Claim/Compound:</Title>
                    <Text ml={'xl'} size="lg">a- Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.</Text>

                    <Title mt={'lg'} fw={600} order={4}>2. Precision Loss in mintCDP():</Title>
                    <Text ml={'xl'} size="lg">a- Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.</Text>

                    <Title mt={'lg'} fw={600} order={4}>3. Multiplication Accuracy:</Title>
                    <Text ml={'xl'} size="lg">a- Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.</Text>

                    <Title mt={'lg'} fw={600} order={4}>4. Incorrect Share Allocation:</Title>
                    <Text ml={'xl'} size="lg">a- The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.</Text>

                    <Title mt={'lg'} fw={600} order={4}>5. Logic Error in Referral Handling:</Title>
                    <Text ml={'xl'} size="lg">a- A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system</Text>

                    <Title mt={'lg'} fw={600} order={4}>6. Unauthorized Claim/Compound:</Title>
                    <Text ml={'xl'} size="lg">a- Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.</Text>

                    <Title mt={'xl'} order={2}>Remediation & Impact:</Title>
                    <Text size="xl" mt={'lg'}>All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include</Text>

                    <List withPadding size="xl">
                        <List.Item mt={'md'}>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.</List.Item>
                        <List.Item mt={'md'}>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</List.Item>
                        <List.Item mt={'md'}>Collaborated with the CDP team to prioritize and address the identified issues.</List.Item>
                        <List.Item mt={'md'}>Conducted additional verification testing after vulnerability fixes were implemented.</List.Item>

                    </List>
                    <Flex  align={'center'}>
                    <Title mt={'lg'} order={4}>Embed this tweet-: </Title >
                    <Text size="lg" style={{color:"#204ecf"}} mt={'lg'}> https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20</Text>
                    </Flex>

                    <Text size="xl" mt={'lg'}>CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.</Text>

                    <Flex mt={'15%'} h={isMobile?'60dvh':'52dvh'}  w={'100%'} direction={'column'} style={{borderRadius:"10px"}}>
                        <Flex ml={isMobile?'4%':'22%'} mt={isMobile?'18%':'1.5%'} style={{position:"absolute",borderRadius:'15px'}} h={'20%'} w={isMobile?'35%':'10%'} bg={'blue'}></Flex>
                        <Flex h={'40%'} w={'100%'} bg={'#152664'} direction={'column'} justify={isMobile?'center':""} align={isMobile?'flex-end':''}>
                            <Title  mt={'5%'} ml={!isMobile?'5%':'0%'} mr={'5%'} style={{color:"white"}}>CarpeDiem</Title>
                            <Title mr={'5%'} ml={!isMobile?'5%':'0%'} style={{color:"white"}} order={4}>TEAM</Title>
                        </Flex>
                        <Flex style={{boxShadow:"0 4px 4px rgba(0, 0, 0, 0.2)",borderBottom:"3px solid gray"}} h={'60%'} w={'100%'}  direction={'column'}>
                            <Rating style={{alignSelf:"flex-end"}} size={"lg"} mt={'5%'} ml={'5%'} value={5} ></Rating>
                            <Text size="xl" ml={'5%'} mt={'3%'}>“It felt like the auditing team was available within a short timeframe, which was excellent. The auditing process looked thorough, and I really appreciate the fact that you took time to investigate GAS optimizations.”</Text>
                        </Flex>
                        
                    </Flex>
                </Flex>
                
            </Flex>
        </Flex>
        {!isMobile&&<Flex h={'50dvh'} w={'100%'}  justify={'center'}>
            <Flex w={'60%'} h={'100%'}  >
                <Flex w={'50%'} h={'100%'}  direction={'column'} >
                    <Title order={2} style={{color:'#407aff'}} mt={'15%'}>Newsletter</Title>
                    <Title style={{color:"#14316c"}} mt={'5%'}>Security First News</Title>
                    <Title style={{color:"#14316c"}} mt={'2%'}>Letter by QuillAudits</Title>
                    <Text style={{color:"gray"}} mt={'4%'} size="xl">Subscribe for the most Exclusive Weekly security based newsletter and covering all the  recent hacks up to date.</Text>
                </Flex>
                <Flex w={'50%'} h={'100%'}  direction={'column'}>
                    <img imgstyle={{height:"80%",objectFit:'contain'}} src="OBJECTS.png" ></img>
                    <Flex w={'100%'} align={'center'} justify={'space-between'}>
                        <Text style={{color:"gray"}}>vitalik@ethereum.org</Text>
                        <Button radius={'md'} size="md" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>

                    </Flex>
                </Flex>
            </Flex>
        </Flex>}
        {isMobile && 
        <><Flex mt={'xl'}  w={'100dvw'} justify={'center'} align={'center'}>
            <Flex w={'90%'}   direction={'column'} >
                <Flex w={'100%'} h={'10dvh'}   justify={'center'} align={'center'}>
                    <Text size="xl" fw={600}>Security First Newsletter by QuillAudits</Text>
                </Flex>
                <Flex w={'100%'} mt={'xl'} direction={'column'} align={'center'}> 
                <img style={{height:"20dvh",objectFit:'fill'}} src="OBJECTS(1).png" ></img>
                <Text mt={'xl'} style={{textAlign:'center'}}>DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to your Inbox. Explore our weekly newsletter: HashingBits. Stay updated on everything we’re publishing. Stand a step ahead.</Text>
                
                </Flex>
                <Flex w={'100%'}  align={'center'} direction={'column'}>
                    <TextInput mt={'xl'} w={'100%'} size="xl" style={{alignSelf:"center"}} placeholder="vitalik@ethereum.org"></TextInput>
                    <Button mt={'lg'} radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>

                </Flex>
            </Flex>
            </Flex>
            </>
        }

        
        </>
    )
}