
import './App.css';
import GemTab from './components/Gems/Gem Tab/Legacy/Mobile Gem Tab/MobileLegacyGemTab';
import { Col, Row } from 'antd'
import FinalShoe1 from './components/finalShoe1/finalShoe1';
import ShoeCloseUp from './components/ShoeCloseUp/shoeCloseUp';
import { Footer } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import HeelsSelectPanel from './components/Heels/HeelsSelectPanel/heelsSelectPanel';
import HeelsShowPanel from './components/Heels/HeelsShow/heelsShowPanel';
import logo from './assets/images/footer&header/Logo-for-Simulation.png'
const requireContext=require.context('../src/assets/images/footer&header/',false)
const headerNFooter = requireContext.keys().map(requireContext)



function App() {
        


  return (
    <div className="App">
    
      <Row  className='desktop'>
        <Row className='logo' style={{height:"10vh",borderBottom:'1px solid #d1a543'}}>
          <img src={logo} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
      <Row className='desktop-upper'>
        <Col  span={4}><HeelsSelectPanel></HeelsSelectPanel></Col>
        <Col  span={16} className='upper-middle'>
        <FinalShoe1 ></FinalShoe1>
        </Col>
        <Col  span={4} style={{marginTop:"40px"}} >
        <Row  style={{height:'33%'}} justify='center'>
        <HeelsShowPanel  ></HeelsShowPanel>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <ShoeCloseUp></ShoeCloseUp>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <FinalShoe1 ></FinalShoe1>
        </Row>
        </Col>
      </Row>
      <Row className='desktop-bottom'>
        {/* <DesktopGemTab></DesktopGemTab> */}
        <Outlet></Outlet>
      </Row>
    </Row>
    <Row className='tablet'>
    <Row className='logo' style={{height:"10vh",borderBottom:'1px solid #d1a543'}}>
          <img src={logo} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
      <Row className='tablet-upper'>
        <Row className='shoes' justify='center'>
          <FinalShoe1 style={{height:'100%'}}></FinalShoe1>
        </Row>
        <Row className='shoes-heels' justify='start'>
          <FinalShoe1></FinalShoe1>
          <ShoeCloseUp></ShoeCloseUp>
          <HeelsShowPanel></HeelsShowPanel>
        </Row>
      </Row>
      <Row className='tablet-bottom'>
        <Col className='bottom-left' sm={16} md={16} >
        {/* <GemTab></GemTab> */}
        <Outlet></Outlet>
        </Col>
        <Col className='bottom-right' sm={8} md={8} >
        <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel>
        </Col>
      </Row>
    </Row>
    <Row className='mobile'>
      <Row >
        <Col span={16} className='mobile-upper'><FinalShoe1></FinalShoe1></Col>
        
        <Col span={8}  style={{height:'40vh'}}>
        <Row  style={{height:'33%'}} justify='center'>
        <FinalShoe1 ></FinalShoe1>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <FinalShoe1 ></FinalShoe1>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <HeelsShowPanel  ></HeelsShowPanel>
        </Row>
        </Col>

      </Row>
      <Row>
      <Col span={16} className='mobile-halfContainer'>
      {/* <GemTab></GemTab> */}
      <Outlet></Outlet>
      </Col>
        <Col span={8} className='mobile-halfContainer' just>
        <HeelsSelectPanel></HeelsSelectPanel>
        </Col>
        
        </Row>
      
    </Row>
       
      {/* <Outlet></Outlet> */}

      {/* <Footer>
        <img src={headerNFooter[0]} className='footer' alt=''/>
      </Footer> */}
     
    </div>
  );
}

export default App;


