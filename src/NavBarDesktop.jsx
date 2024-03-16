import { Button, Flex,Title,Text, Divider,Menu } from "@mantine/core";

export default function NavBarDesktop(){
    return (
        <>
        <Flex bg={'#061449'} h={'15dvh'} w={'100dvw'} justify={'center'} align={'center'} direction={'column'}>
            <Flex  h={'60%'} w={'80%'}>
                <Flex  h={'100%'} w={'20%'} justify={'center'} align={'center'}>
                    <Title order={2} style={{color:'white'}}>QuillAudits</Title>
                </Flex>
                <Flex  h={'100%'} w={'60%'} align={'center'} justify={'space-between'}>
                <Menu shadow="md" width={'10%'}>
                    <Menu.Target><Title order={3} fw={500}  style={{color:'white',cursor:"pointer"}} >Services ⌄</Title></Menu.Target>
                    <Menu.Dropdown><Menu.Item>Option 1</Menu.Item><Menu.Item>Option 2</Menu.Item><Menu.Item>Option 3</Menu.Item><Menu.Item>Option 4</Menu.Item></Menu.Dropdown>
                </Menu>
                    
                    <Title order={3} fw={500} style={{color:'white'}} >Pricing</Title>
                    <Title order={3} fw={500} style={{color:'white'}} >Our Audits</Title>
                    <Menu shadow="md" width={'10%'}>
                    <Menu.Target><Title order={3} fw={500}  style={{color:'white',cursor:"pointer"}} >Tools ⌄</Title></Menu.Target>
                    <Menu.Dropdown><Menu.Item>Option 1</Menu.Item><Menu.Item>Option 2</Menu.Item><Menu.Item>Option 3</Menu.Item><Menu.Item>Option 4</Menu.Item></Menu.Dropdown>
                </Menu>
                <Menu shadow="md" width={'10%'}>
                    <Menu.Target><Title order={3} fw={500}  style={{color:'white',cursor:"pointer"}} >Resources ⌄</Title></Menu.Target>
                    <Menu.Dropdown><Menu.Item>Option 1</Menu.Item><Menu.Item>Option 2</Menu.Item><Menu.Item>Option 3</Menu.Item><Menu.Item>Option 4</Menu.Item></Menu.Dropdown>
                </Menu>
                    <Title order={3} fw={500} style={{color:'white'}} >Refer-Earn-Secure</Title>
                </Flex>
                <Flex  h={'100%'} w={'20%'} justify={'center'} align={'center'}>
                    <Button radius={'md'} size="lg" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>
                </Flex>
            </Flex>
            <Divider color="gray" mt={'md'} w={'80vw'}/>
        </Flex>
        
        </>
    )
}