import { Flex,Button, Burger } from "@mantine/core";
import { useDisclosure } from '@mantine/hooks';
export default function NavBarMobile(){
    const [opened, { toggle }] = useDisclosure();
    return (
        <Flex bg={'#061449'}  h={'10vh'} w={'100vw'} align={'center'} justify={'space-between'}>
            <img style={{height:"60%",objectFit:'contain',zIndex:1}} src="Icon.png" ></img>
            <Button radius={'md'} size="sm" variant="gradient" gradient={{ from: 'rgba(0, 132, 255, 1)', to: 'rgba(116, 138, 150, 1)', deg: 135 }}>Request An Audit</Button>
            <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" />     </Flex>
    )
}