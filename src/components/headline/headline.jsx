import './headline.scss'

import React from 'react'

export default function Headline(props) {
         const {title}=props

  return (
    <div className='heading'>
      {title}
    </div>
  )
}
