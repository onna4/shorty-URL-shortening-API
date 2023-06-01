import React from 'react'
import { useState, useEffect } from 'react'
import FormResult from './FormResult';
import { nanoid } from 'nanoid'

const ErrorMessage = () => {
  return (
    <p className="fieldError">Please add a link</p>
  );
 };

export default function Form() {
  const [shortenLink, setShortenLink] = useState({
    value: "",
    isTouched: false
  })
  const [formData, setFormData] = useState({})
  const [dataArray, setDataArray] = useState(
    JSON.parse(localStorage.getItem("linkData")) ||
    [])
  const [isClicked, setIsClicked] = useState(false)
  const APIURL = "https://api.shrtco.de/v2/shorten?url="

  function handleChange (e) {
    setShortenLink({
      ...shortenLink,
      value: e.target.value})
  }
function newURLResult () {
  const newURL = {
    id: nanoid(),
    isCopied: false,
    originalLink: formData.result.original_link,
    fullShortLink: formData.result.full_short_link
}
console.log("updated")
  setDataArray(prevDataArray => [...prevDataArray, newURL]) }

  useEffect(() => {
    if(formData.ok) {newURLResult ()}
      localStorage.setItem("linkData", JSON.stringify(dataArray))
  }, [formData])

    function handleSubmit(event) {
      event.preventDefault()
      setShortenLink({value: "", isTouched: false})
    }
  console.log(formData)
  console.log(dataArray)

  useEffect(() => {
    try {
      fetch(`${APIURL}${shortenLink.value}`)
        .then(res => res.json())
        .then(data => setFormData(data))
    }
    catch {
      (error) => console.error(error)
    }
  }, [isClicked])

  function handleClick() {
    setIsClicked(prevIsClicked => !prevIsClicked)
  }

  // const handleClick = async () => {
  //   try {
  //     const data = await (await fetch(`${APIURL}${shortenLink.value}`)).json()
  //     setFormData(data)
  //     formData.ok ? newURLResult() :
  //       loggingError()
  //   } catch (err) {
  //     loggingError()
  //   }
  // }


  function copyText (e, Data) {
    navigator.clipboard.writeText(Data.fullShortLink)
    setDataArray(prevDataArray => prevDataArray.map(urldata =>
      (Data.id === urldata.id) ?
      {...urldata, isCopied: true} : urldata
     ))

  setTimeout(() => {
    setDataArray(prevDataArray => prevDataArray.map(urldata =>
      (Data.id === urldata.id) ?
      {...urldata, isCopied: false} : urldata
     ))
  }, 3000 )
}

  function deleteData(e, Data) {
    setDataArray(prevDataArray =>
      prevDataArray.filter(data => data.id !== Data.id )
      )
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label className='formInput'>
          <input type="text"
            placeholder='Shorten a link here...'
            name="shortenLink"
            value={shortenLink.value}
            onBlur={() => {
              setShortenLink({ ...shortenLink, isTouched: true });
            }}
            onChange={handleChange} />
          {shortenLink.isTouched && !shortenLink.value ? <ErrorMessage /> : null}
        </label>
        <button className='btn' onClick={handleClick} >Shorten It!</button>
      </form>
      { formData.ok &&
      <FormResult dataArray={dataArray}
                  copyText={copyText}
                  deleteurl={deleteData}
          /> }
    </>
  )
}