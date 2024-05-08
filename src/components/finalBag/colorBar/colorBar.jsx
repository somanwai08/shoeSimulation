import React from 'react'
import './colorBar.scss'
import {useSelector,useDispatch} from 'react-redux'
import {setSelectedColor} from '../../../Store/modules/bag'
// 導入顏色的相
const requireContext=require.context('../../../assets/images/colors',true)
const colorImages = requireContext.keys().map(requireContext)


export default function ColorBar() {
     const selectedSize=useSelector(state=>state.bag.selectedSize)
     const selectedMaterial=useSelector(state=>state.bag.selectedMaterial)
     const dispatch=useDispatch()
     const handleClick=(e)=>{
             e.preventDefault()
             dispatch(setSelectedColor(e.target.dataset.color))
             
     }
    const selectedColor=useSelector(state=>state.bag.selectedColor)

  return (
    <div className='colorBar' >

<a href="/" 
    style={{
        display:selectedMaterial==='Box Calf Maia Calf'?'block':'none'
      }}
      onClick={handleClick}
     >
      <img src={colorImages[12]} alt='' data-color="Gold White" 
      className={selectedColor==='Gold White'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Gold White</div> */}
    </a>

       <a href="/" 
       style={{
        display:selectedMaterial==='Box Calf Maia Calf'&&selectedSize!=='PM'?'block':'none'
      }}
      
      onClick={handleClick}
         >
         
          <img src={colorImages[1]} alt=''  data-color="Gold Black" 
             className={selectedColor==='Gold Black'?'active':' '}
      ></img>
        
      
      {/* <div 
      data-material="Box Calf">Gold Black</div> */}
    </a>

    <a href="/" 
      style={{
        display:selectedMaterial==='Box Calf Maia Calf'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
     >
      <img src={colorImages[11]} alt='' data-color="Gold Sienna" 
      className={selectedColor==='Gold Sienna'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Gold Sienna</div> */}
    </a>

    <a href="/" 
    style={{
        display:selectedMaterial==='Box Calf Maia Calf'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
     >
      <img src={colorImages[0]} alt='' data-color="Gold Alfalfa" 
      className={selectedColor==='Gold Alfalfa'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Gold Alfalfa</div> */}
    </a>

    <a href="/" 
       style={{
        display:selectedMaterial==='Box Calf Maia Calf'&&selectedSize!=='PM'?'block':'none'
      }}
      onClick={handleClick}
    >
      <img src={colorImages[5]} alt='' data-color="Poudre" 
      className={selectedColor==='Poudre'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Poudre</div> */}
    </a>

    <a href="/" 
    style={{
        display:selectedMaterial==='Box Calf Maia Calf'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
     >
      <img src={colorImages[2]} alt='' data-color="Bleu" 
      className={selectedColor==='Bleu'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Bleu</div> */}
    </a>

    <a href="/" 
      style={{
        display:selectedMaterial==='Box Calf Maia Calf'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
    >
      <img src={colorImages[4]} alt='' data-color="Emerald" 
      className={selectedColor==='Emerald'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Emerald</div> */}
    </a>







    <a href="/" 
      style={{
        display:selectedMaterial==='Precious Skins'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
    >
      <img src={colorImages[8]} alt='' data-color="Gold Ruby" 
        className={selectedColor==='Gold Ruby'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Gold Ruby</div> */}
    </a>

    <a href="/" 
      style={{
        display:selectedMaterial==='Precious Skins'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
    >
      <img src={colorImages[7]} alt='' data-color="Precious Skins-Emerald" 
        className={selectedColor==='Precious Skins-Emerald'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Precious Skins-Emerald</div> */}
    </a>

    <a href="/" 
       style={{
        display:selectedMaterial==='Precious Skins'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
         >
      <img src={colorImages[6]} alt='' 
      data-color="Precious Skins-Gold Black" 
        className={selectedColor==='Precious Skins-Gold Black'?'active':' '}
      ></img>
      {/* <div 
      data-material="Box Calf">Precious Skins-Gold Black</div> */}
    </a>


    <a href="/" 
      style={{
        display:selectedMaterial==='Precious Skins'&&selectedSize!=='PM'&&selectedSize!=='CLUTCH'?'block':'none'
      }}
      onClick={handleClick}
    >
      <img src={colorImages[9]} alt='' data-color="Turquoise" 
        className={selectedColor==='Turquoise'?'active':' '}
      ></img>
      {/* <div data-material="Box Calf Maia Calf">Turquoise</div> */}
    </a>


    </div>
  )
}
