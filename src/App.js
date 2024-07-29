
import './App.css';
import { Col, Row } from 'antd'
import FinalShoe1 from './components/finalShoe1/finalShoe1';
import ShoeCloseUp from './components/ShoeCloseUp/shoeCloseUp';
import { Footer } from 'antd/es/layout/layout';
import { Outlet,useLocation,useNavigate } from 'react-router-dom';
import HeelsSelectPanel from './components/Heels/HeelsSelectPanel/heelsSelectPanel';
import HeelsShowPanel from './components/Heels/HeelsShow/heelsShowPanel';
import logo from './assets/images/footer&header/Logo-for-Simulation.png'
import FooterButton from './components/footerButton/footerButton';
import MobileDetect from 'mobile-detect';
import { setSelectedHeel, setSelectedView } from './Store/modules/shoe';
import { useDispatch,useSelector } from 'react-redux';

const requireContext=require.context('../src/assets/images/footer&header/',false)
const headerNFooter = requireContext.keys().map(requireContext)





function App() {
        let location = useLocation()
        const navigate = useNavigate()
        const md = new MobileDetect(window.navigator.userAgent)
        const dispatch = useDispatch()
        const onChangeView = (view)=>{
          return(e)=>{
              dispatch(setSelectedView(view))
              
          }
        }
        const viewStatus = useSelector(state=>state.shoe.selectedView)


  return (
    <div className="App" style={{overflowY:md.tablet()===null?'auto':'hidden'}}>
      <Row  className='desktop'>
        <Row className='logo' style={{height:"10vh",borderBottom:'1px solid #d1a543'}}>
          <img alt='' src={headerNFooter[1]} style={{height:'100%',margin:'0 auto'}}></img>
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
        <Outlet></Outlet>
      </Row>
    </Row>
    
    <Row className='mobile-logo' style={{height:"8vh",borderBottom:'1px solid #d1a543'}}>
          <img alt='' src={logo} style={{height:'100%',margin:'0 auto'}}></img>
        </Row>
    <Row className='tablet' >
      <Row className='tablet-upper'>
        <Col className='shoes'  sm={20} md={20} >
        {viewStatus==='Final'?<FinalShoe1 style={{height:'100%'}}></FinalShoe1>:<ShoeCloseUp style={{height:'100%'}}></ShoeCloseUp>}
        
        </Col>
        <Col className='shoes-heels' sm={4} md={4} >
         <Row style={{height:'33%',paddingTop:'20px'}} justify='center' onClick={onChangeView('Final')}>
         <FinalShoe1></FinalShoe1>
         </Row>
         <Row style={{height:'33%',paddingTop:'20px'}} justify='center' onClick={onChangeView('Close Up')}>
         <ShoeCloseUp></ShoeCloseUp>
         </Row>
         <Row style={{height:'33%'}} justify='center' >
         <HeelsShowPanel></HeelsShowPanel>
         </Row>
        </Col>
      </Row>
      <Row className='tablet-bottom'>
        <Col className='bottom-left' sm={20} md={20} >
        <Outlet></Outlet>
        </Col>
        <Col className='bottom-right' sm={4} md={4} >
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
              console.log('to kelly')
              navigate('/mesh-simulation/kelly')
         }}>
           <FooterButton title='NEXT' text='KELLY'></FooterButton>
         </Col>:<Col 
          className='Button-Wrap'
         onClick={()=>{
              console.log('to legacy')
              navigate('/mesh-simulation/legacy')
         }}>
           <FooterButton title='NEXT' text='LEGACY'></FooterButton>
         </Col>}
        
        </Row>
      </Footer>
     
    </div>
  );
}

export default App;


