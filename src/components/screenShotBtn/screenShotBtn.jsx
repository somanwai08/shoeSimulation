import React from 'react'
import './screenShotBtn.scss'
import html2canvas from 'html2canvas';
import { increaseShot,decreaseShot} from '../../Store/modules/shoe';
import { useSelector,useDispatch } from 'react-redux';
import { CloseCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ScanOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';

export default function ScreenShotBtn() {
    const shotCount = useSelector(state=>state.shoe.shot)
    const dispatch = useDispatch()
    const handleClick=()=>{
    
    html2canvas(document.querySelector('.tablet .captured')).then(function(canvas) {
             dispatch(increaseShot())
               // 創建一個新的容器
           const container = document.createElement('div');
           container.classList.add('canvas-container'); // 可以為容器添加樣式類

           // 將 canvas 添加到容器中
           container.appendChild(canvas);

           // 創建 CloseCircleOutlined 圖標
        const closeIcon = React.createElement(CloseCircleOutlined, {
            style: { cursor: 'pointer', fontSize: '24px', color: '#d1a543' },
            onClick: () => {
                dispatch(decreaseShot())
                container.remove(); // 點擊圖標時刪除整個容器
            }
        });

        // 渲染圖標
        const iconContainer = document.createElement('div');
        ReactDOM.render(closeIcon, iconContainer);

        // 將圖標添加到容器中
        container.appendChild(iconContainer);

             if(shotCount===0){
                document.querySelector('.shot1').appendChild(container);
             }else if(shotCount===1){
                document.querySelector('.shot2').appendChild(container);
             }else if(shotCount===2){
                document.querySelector('.shot3').appendChild(container);
             }
      
    });
  
       }

  return (
    <div>
      <Button type='link' className='screenShot1' onClick={handleClick} icon={<ScanOutlined /> } ></Button>
    </div>
  )
}
