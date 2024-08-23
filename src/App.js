
import './App.css';
import {  Col, Row} from 'antd'
import { Footer } from 'antd/es/layout/layout';
import { Outlet,useLocation,useNavigate } from 'react-router-dom';
import HeelsSelectPanel from './components/Heels/HeelsSelectPanel/heelsSelectPanel';
import logo from './assets/images/footer&header/Logo-for-Simulation.png'
import { setSelectedGem,ResetKelly} from './Store/modules/gem';
import { useDispatch } from 'react-redux';
import FooterButton from './components/footerButton/footerButton';
import CustomCarousel from './components/carousel/carousel';
import CarouselA from './components/carouselA/carouselA';
import PriceTag from './components/priceTag/priceTag';
import ScreenShotBtn from './components/screenShotBtn/screenShotBtn';

const requireContext=require.context('../src/assets/images/footer&header/',false)
const headerNFooter = requireContext.keys().map(requireContext)



function App() {
        let location = useLocation()
        const navigate = useNavigate()
        const dispatch = useDispatch()


  return (
    <div className="App" style={{overflowY:'hidden'}}>
      <Row  className='desktop'>
        <Row className='logo' style={{height:"10vh",minHeight:'81px',borderBottom:'1px solid #d1a543'}}>
          <img alt='' src={headerNFooter[1]} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
        <Col   className='upper'>
        <CustomCarousel></CustomCarousel>
        </Col>
      <Row className='middle'  >
        <Outlet></Outlet>
        </Row>
        <Row className='bottom'  >
        <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel>
        </Row>
    </Row>
    
    <Row className='mobile-logo' style={{height:"7vh",borderBottom:'1px solid #d1a543'}}>
          <img alt='' src={logo} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
    <Row className='tablet' >
      <CustomCarousel></CustomCarousel>
      {location.pathname.includes('kly64')&&<PriceTag></PriceTag>} 
      {location.pathname.includes('kly64')&&<ScreenShotBtn></ScreenShotBtn>} 
      <Row className='tablet-bottom'>
        <Row className='bottom-upper'  >
        <Outlet></Outlet>
        </Row>
        <Row className='bottom-bottom screenShot'  >
        {/* <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel> */}
        <Col className='shot shot1'>
        </Col>
        <Col className='shot shot2'>
        </Col>
        <Col className='shot shot3'>
        </Col>
        </Row>
      </Row>
    </Row>


<Row className='mobile' >
      <CustomCarousel></CustomCarousel>
      {location.pathname.includes('kly64')&&<PriceTag></PriceTag>} 
      <Row className='mobile-bottom'>
        <Row className='bottom-upper'  >
        <Outlet></Outlet>
        </Row>
        <Row className='mobile-bottom screenShot'  >
        <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel>
        </Row>
      </Row>
    </Row>
       
      <Footer>
        <Row className='footer'>
          {location.pathname!=='/mesh/classic'?<Col 
         className='Button-Wrap'
         onClick={()=>{
              console.log('to classic')
              // navigate('/mesh/classic')
         }}>
          <div className='fakeBtn'></div>
           {/* <FooterButton title='PREVIOUS' text='' styles={{display:'none'}} ></FooterButton>  */}
         </Col>:<Col 
          className='Button-Wrap'
         onClick={()=>{
              console.log('to legacy')
              navigate('/mesh/legacy')
         }}>
           <FooterButton title='PREVIOUS' text='LEGACY'></FooterButton>
         </Col>}
        <Col className='footer-logo'>
        <img src={headerNFooter[0]} className='footer' alt=''/>
        </Col >
       
        {location.pathname!=='/mesh/kly64'?<Col 
         className='Button-Wrap'
         onClick={()=>{
              dispatch(ResetKelly())
              navigate('/mesh/kly64')
         }}>
           <FooterButton title='NEXT' text='KLY64'></FooterButton>
         </Col>:<Col 
          className='Button-Wrap'
         onClick={()=>{
              // // 為了防止移動設備上有邊框，跳去legacy page之前先清空kelly gem信息
              dispatch(setSelectedGem('Arctic 2 White Gold Alfalfa'))
              navigate('/mesh/legacy')
         }}>
           <FooterButton title='NEXT' text='LEGACY'></FooterButton>
         </Col>}
        
        </Row>
      </Footer>
      <Row className='screentShot'>
        <Col className='shot shot1'>
        </Col>
        <Col className='shot shot2'>
        </Col>
        <Col className='shot shot3'>
        </Col>
      </Row>
     <CarouselA></CarouselA>
    </div>
  );
}

export default App;


