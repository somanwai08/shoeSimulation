
import './App.css';
import GemTab from './components/Legacy Gems/Gem Tab/gemTab';
import { Col, Row } from 'antd'
import FinalBag from './components/finalShoe1/finalShoe1';
import { Footer } from 'antd/es/layout/layout';
import HeelsSelectPanel from './components/Heels/HeelsSelectPanel/heelsSelectPanel';
import HeelsShowPanel from './components/Heels/HeelsShow/heelsShowPanel';

const requireContext=require.context('../src/assets/images/footer&header/',false)
const headerNFooter = requireContext.keys().map(requireContext)



function App() {
        


  return (
    <div className="App">
      {/* <header className="App-header">
        <img className="headerImg" alt='' src={headerNFooter[1]} />
        
      </header> */}
      <Row  className='desktop'>
      {/* <Col span={8} className='leftColumn'><AphroditeTab></AphroditeTab></Col> */}
      <Col span={8}><FinalBag></FinalBag></Col>
      <Col span={8}><GemTab></GemTab></Col>
    </Row>
    <Row className='tablet'>
      <Row className='tablet-upper'>
        <Row className='shoes' justify='center'>
          <FinalBag style={{height:'100%'}}></FinalBag>
        </Row>
        <Row className='shoes-heels' justify='start'>
          <FinalBag></FinalBag>
          <FinalBag></FinalBag>
          <HeelsShowPanel></HeelsShowPanel>
        </Row>
      </Row>
      <Row className='tablet-bottom'>
        <Col className='bottom-left' sm={16} md={16} >
        <GemTab></GemTab>
        </Col>
        <Col className='bottom-right' sm={8} md={8} >
        <HeelsSelectPanel></HeelsSelectPanel>
        </Col>
      </Row>
    </Row>
    <Row className='mobile'>
      <Row >
        <Col span={16} className='mobile-upper'><FinalBag></FinalBag></Col>
        
        <Col span={8}  style={{height:'40vh'}}>
        <Row  style={{height:'33%'}} justify='center'>
        <FinalBag ></FinalBag>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <FinalBag ></FinalBag>
        </Row>
        <Row  style={{height:'33%'}} justify='center'>
        <HeelsShowPanel  ></HeelsShowPanel>
        </Row>
        </Col>

      </Row>
      <Row>
      <Col span={16} className='mobile-halfContainer'><GemTab></GemTab></Col>
        <Col span={8} className='mobile-halfContainer' just>
        <HeelsSelectPanel></HeelsSelectPanel>
        </Col>
        
        </Row>
      
    </Row>
       
      

      <Footer>
        <img src={headerNFooter[0]} className='footer' alt=''/>
      </Footer>
     
    </div>
  );
}

export default App;
