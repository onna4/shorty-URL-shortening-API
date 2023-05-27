import React from 'react'

export default function FormResult(props) {

  const urlDataArray = props.dataArray.map(Data => (
    <article key="Data.id" className='formResult'>
      <p className='resultURL' >{Data.originalLink} </p>
      <hr />
      <div className='flexCont'>
        <p className='shortURL'>{Data.fullShortLink}</p>
        {Data.isCopied ?
          <button className='btn copied' >Copied!</button> :
          <button className='btn' onClick={(e) => props.copyText(e, Data)} >Copy</button>}
        <button className='btn' onClick={(e) => props.deleteurl(e, Data)} >Delete</button>
      </div>
    </article>
    ))

  return (
    <>
      {urlDataArray}
    </>
  )
}
