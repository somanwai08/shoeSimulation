import './headline.scss'
import classNames from 'classnames'
import React from 'react'

export default function Headline(props) {
         const {title,borderTop}=props
         const myClass=classNames({
          heading:true,
          borderTop:borderTop===false?true:false
         })

  return (
    <div className={myClass}>
      {title}
    </div>
  )
}
