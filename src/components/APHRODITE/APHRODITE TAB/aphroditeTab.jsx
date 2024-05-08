import './aphroditeTab.scss'

import React from 'react'
import SizeBar from '../Size Bar/Size Bar'
import Headline from '../../headline/headline'
import MaterialBar from '../Material Bar/Material Bar'
import WoodHDBar from '../Wood Handle Bar/Wood Handle'

export default function AphroditeTab() {
  return (
    <div className='aphrodite'>
      <Headline title="APHRODITE"></Headline>
      <MaterialBar></MaterialBar>
      <SizeBar></SizeBar>
      <WoodHDBar></WoodHDBar>
    </div>
  )
}
