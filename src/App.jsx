import './App.css'
import {em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import NavBarDesktop from './NavBarDesktop';
import PageContent from './PageContent';
import Diffrences from './Diffrences';
import MainContent from './MainContent';
import Footer from './Footer';
import NavBarMobile from './NavBarMobile';
import FooterMobile from './FooterMobile';

function App() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);  

  return (
    <>
    {isMobile?<NavBarMobile/>:<NavBarDesktop/>}
    <PageContent/>
    <Diffrences/>
    <MainContent/>
    {isMobile?<FooterMobile/>:<Footer/>}
    </>
  );
}

export default App;