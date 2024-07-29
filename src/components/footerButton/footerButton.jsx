import './footerButton.scss'

import React from 'react'

export default function FooterButton(props) {
         const {title,text}=props

  return (
    <div className='footer-Button'>
        <h6>{title}</h6>
        <div className='square'>
           <p>{text}</p>

        </div>

    </div>
  )
}
