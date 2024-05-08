
import './App.css';
import GemTab from './components/Legacy Gems/Gem Tab/gemTab';
// import { Grid } from "antd";
import { Col, Row } from 'antd'
import FinalBag from './components/finalBag/fingalBag1/finalBag';
import AphroditeTab from './components/APHRODITE/APHRODITE TAB/aphroditeTab';
import { Footer } from 'antd/es/layout/layout';

const requireContext=require.context('../src/assets/images/footer&header/',false)
const headerNFooter = requireContext.keys().map(requireContext)



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img className="headerImg" src={headerNFooter[1]} />
        
      </header>
      <Row>
      <Col span={8} className='leftColumn'><AphroditeTab></AphroditeTab></Col>
      <Col span={8}><FinalBag></FinalBag></Col>
      <Col span={8}><GemTab></GemTab></Col>
    </Row>
       
       

      <Footer>
        <img src={headerNFooter[0]} />
      </Footer>
     
    </div>
  );
}

export default App;
