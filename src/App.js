
import './App.css';
import { Card, Col, Row} from 'antd'
import FinalShoe1 from './components/finalShoe1/finalShoe1';
import ShoeCloseUp from './components/ShoeCloseUp/shoeCloseUp';
import { Footer } from 'antd/es/layout/layout';
import { Outlet,useLocation,useNavigate } from 'react-router-dom';
import HeelsSelectPanel from './components/Heels/HeelsSelectPanel/heelsSelectPanel';
import HeelsShowPanel from './components/Heels/HeelsShow/heelsShowPanel';
import logo from './assets/images/footer&header/Logo-for-Simulation.png'
import { setSelectedGem ,ResetKelly,ResetLegacy} from './Store/modules/gem';
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
    <div className="App" style={{overflowY:md.tablet()===null?'auto':'hidden'}}>
      <Row  className='desktop'>
        <Row className='logo' style={{height:"10vh",borderBottom:'1px solid #d1a543'}}>
          <img alt='' src={headerNFooter[1]} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
      {/* <Row className='desktop-upper'> */}
        {/* <Col  span={4}><HeelsSelectPanel></HeelsSelectPanel></Col> */}
        <Col   className='upper-middle'>
      
        <CustomCarousel></CustomCarousel>
        {/* <CarouselA></CarouselA> */}
        </Col>
        {/* <Col  span={4} style={{marginTop:"40px"}} >
        <Row  style={{height:'33%'}} justify='center'>
        <HeelsShowPanel  ></HeelsShowPanel>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <ShoeCloseUp></ShoeCloseUp>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <FinalShoe1 ></FinalShoe1>
        </Row>
        </Col> */}
      {/* </Row> */}
      <Row className='desktop-bottom'>
        <Outlet></Outlet>
      </Row>
    </Row>
    
    <Row className='mobile-logo' style={{height:"7vh",borderBottom:'1px solid #d1a543'}}>
          <img alt='' src={logo} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
    <Row className='tablet' >
      {/* <Row className='tablet-upper' justify='center'> */}
       {/* <Col> */}
      <CustomCarousel></CustomCarousel>
      {/* <CarouselA></CarouselA> */}
    {/* </Col> */}
      {/* </Row> */}
      <Row className='tablet-bottom'>
        <Row className='bottom-upper'  >
        <Outlet></Outlet>
        </Row>
        <Row className='bottom-bottom'  >
        <HeelsSelectPanel borderBottom={true}></HeelsSelectPanel>
        </Row>
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
       
      <Footer>
        <Row className='footer'>
          {location.pathname!=='/mesh-simulation/classic'?<Col 
         className='Button-Wrap'
         onClick={()=>{
              console.log('to classic')
              // navigate('/mesh-simulation/classic')
         }}>
           <FooterButton title='PREVIOUS' text='CLASSIC'></FooterButton>
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
     
    </div>
    // <CarouselA></CarouselA>
  );
}

export default App;


