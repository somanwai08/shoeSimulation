
import './App.css';
import {  Col, Row} from 'antd'
import { Footer } from 'antd/es/layout/layout';
import { Outlet,useLocation,useNavigate } from 'react-router-dom';
import HeelsSelectPanel from './components/Heels/HeelsSelectPanel/heelsSelectPanel';
import logo from './assets/images/footer&header/Logo-for-Simulation.png'
import { ResetKelly,ResetLegacy} from './Store/modules/gem';
import { useDispatch } from 'react-redux';
import FooterButton from './components/footerButton/footerButton';
import MobileDetect from 'mobile-detect';
import CustomCarousel from './components/carousel/carousel';
import CarouselA from './components/carouselA/carouselA';

const requireContext=require.context('../src/assets/images/footer&header/',false)
const headerNFooter = requireContext.keys().map(requireContext)



function App() {
        let location = useLocation()
        const navigate = useNavigate()
        const dispatch = useDispatch()
        const md = new MobileDetect(window.navigator.userAgent)


  return (
    <div className="App" style={{overflowY:md.tablet()!==null||md.mobile()!==null?'hidden':'auto'}}>
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
      <Row className='tablet-bottom'>
        <Row className='bottom-upper'  >
        <Outlet></Outlet>
        </Row>
        <Row className='bottom-bottom'  >
        <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel>
        </Row>
      </Row>
    </Row>


<Row className='mobile' >
      <CustomCarousel></CustomCarousel>
      <Row className='mobile-bottom'>
        <Row className='bottom-upper'  >
        <Outlet></Outlet>
        </Row>
        <Row className='mobile-bottom'  >
        <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel>
        </Row>
      </Row>
    </Row>
       
      <Footer>
        <Row className='footer'>
          {location.pathname!=='/mesh-simulation/classic'?<Col 
         className='Button-Wrap'
         onClick={()=>{
              console.log('to classic')
              // navigate('/mesh-simulation/classic')
         }}>
           <FooterButton title='PREVIOUS' text='CLASSIC' style={{opacity:0}} ></FooterButton> 
         </Col>:<Col 
          className='Button-Wrap'
         onClick={()=>{
              console.log('to legacy')
              navigate('/mesh-simulation/legacy')
         }}>
           <FooterButton title='PREVIOUS' text='LEGACY'></FooterButton>
         </Col>}
        <Col className='footer-logo'>
        <img src={headerNFooter[0]} className='footer' alt=''/>
        </Col >
       
        {location.pathname!=='/mesh-simulation/kelly'?<Col 
         className='Button-Wrap'
         onClick={()=>{
              dispatch(ResetLegacy())
              navigate('/mesh-simulation/kelly')
         }}>
           <FooterButton title='NEXT' text='KELLY'></FooterButton>
         </Col>:<Col 
          className='Button-Wrap'
         onClick={()=>{
              // // 為了防止移動設備上有邊框，跳去legacy page之前先清空kelly gem信息
              dispatch(ResetKelly())
              navigate('/mesh-simulation/legacy')
         }}>
           <FooterButton title='NEXT' text='LEGACY'></FooterButton>
         </Col>}
        
        </Row>
      </Footer>
     <CarouselA></CarouselA>
    </div>
  );
}

export default App;


