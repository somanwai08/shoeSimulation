import React ,{useEffect, useState}from 'react'
import './KellyPanel.scss'
import GemBar from '../../gem bar/gemBar';
import { useDispatch, useSelector } from 'react-redux'
import { Tabs } from 'antd';
import { setSelectedKellySide } from '../../../../Store/modules/gem';
import ScrollableTabContent1 from '../../ScrollableTabContent/ScrollableTabContent';



export default function KellyGemPanel() {

    // 獲取視口寬度
    const windowWidth = window.innerWidth
  // kelly gem 組
    const gemGroup1=useSelector(state=>state.gem.artist.gemGroup6)
    const selectedSide = useSelector(state=>state.gem.selectedKelly.selectedSide)
    const tabArr = ['LEFT','RIGHT']
    const [activeKey, setActiveKey] = useState('0')
    const [isSmallScreen, setIsSmallScreen] = useState(windowWidth<992?true:false)
    const dispatch=useDispatch()

    
    
     // 监听窗口宽度变化
  useEffect(() => {
    const handleResize = () => {
      
      if(window.innerWidth<992){
        setIsSmallScreen(true)
      }else{
        setIsSmallScreen(false)
      }

    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 初始化状态

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const setKellySide = (e)=>{
            dispatch(setSelectedKellySide(tabArr[e]))
            setActiveKey(e)

    }

        //  set kelly tab是哪一面
           useEffect(()=>{
             if(selectedSide==='LEFT'){
               setActiveKey('0')
             }
           },[selectedSide])

        // 綁定resize事件


     
  return (
    <div className='KellyTab'>
      {windowWidth<992?<Tabs
              activeKey={activeKey}
              centered
              className='KellyTab1'
              onChange={setKellySide}
              items={tabArr.map((item, i) => {
                return {
                  label: item==='LEFT'?'Left':'Right',
                  key: String(i),
                  children: <GemBar group={gemGroup1} series={'Artist Series'} side={tabArr[i]}></GemBar>,
                
                };
              })}
            />:<Tabs
              activeKey={activeKey}
              centered
              className='KellyTab1'
              onChange={setKellySide}
              items={tabArr.map((item, i) => {
                return {
                  label: item==='LEFT'?'Left':'Right',
                  key: String(i),
                  children:<ScrollableTabContent1 
                            groups={[gemGroup1]} 
                            series={'Artist Series'} side={tabArr[i]}
                            className='Scrollable'>
                               
                            </ScrollableTabContent1>
                 

                };
              })}
            />}
   
    </div>
  )
}
