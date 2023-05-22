import React from 'react'
import { useRef } from 'react'

export default function FormResult(props) {

  const shrtURL = useRef()

  function copyText () {
    navigator.clipboard.writeText(shrtURL.current.innerHTML)
    console.log(shrtURL.current.innerHTML)
  }
  return (
    <>
        <article className='formResult'>
            <p className='resultURL' >{props.formData.result.original_link}</p>
            <hr />
            <p className='shortURL' ref={shrtURL} >{props.formData.result.full_short_link}</p>
            {shrtURL ?
            <button className='btn' >Copied!</button> :
            <button className='btn' onClick={copyText} >Copy</button> }
        </article>
      </>
  )
}
