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
  const APIURL = "https://api.shrtco.de/v2/shorten?url="


  function handleChange (e) {
    setShortenLink({
      ...shortenLink,
      value: e.target.value})
  }

  useEffect(() => {
    localStorage.setItem("linkData", JSON.stringify(dataArray))

  }, [dataArray])

  function newURLResult () {
    const newURL = {
      id: nanoid(),
      isCopied: false,
      originalLink: formData.result.original_link,
      fullShortLink: formData.result.full_short_link
  }
  setDataArray(prevDataArray => [...prevDataArray, newURL])
  }


    function handleSubmit(event) {
      event.preventDefault()
      handleclick()
      setShortenLink({value: "", isTouched: false})
    }

  // const handleclick = useEffect(()=> {
  //   fetch(`${APIURL}${shortenLink.value}`)
  //     .then(res => res.json())
  //     .then(data => setFormData(data))
  //       formData.ok ? newURLResult() :
  //       loggingError()
  //     .catch((error) => loggingError()
  //  )
  // },[formData])

  const handleclick = async () => {
    try {
        const data = await (await fetch(`${APIURL}${shortenLink.value}`)).json()
        const dataset = setFormData(data)
        formData.ok? newURLResult():
        loggingError()
    } catch (err) {
        loggingError()
    }
}

  function loggingError () {
    let error = ""
    switch (error) {
      case 1:
        error = "Please add a link"
        break
      case 2:
        error = "Invalid URL submitted"
        break
      case 3:
        error = "Rate limit reached. Wait a second and try again"
        break
      case 4:
        error = "IP-Address has been blocked because of violating our terms of service"
        break
      case 5:
        error = "shrtcode code (slug) already taken/in use"
        break
      case 6:
        error = "Unknown error"
        break
      case 7:
        error = "No code specified ('code' parameter is empty)"
        break
      case 8:
        error = "Invalid code submitted (code not found/there is no such short-link)"
        break
      case 9:
        error = "Missing required parameters"
        break
      case 10:
        error = "Trying to shorten a disallowed Link. More information on disallowed links"
    }
    console.log(error)
  }

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
        <button className='btn' >Shorten It!</button>
      </form>
      { formData.ok &&
      <FormResult dataArray={dataArray}
                  copyText={copyText}
                  deleteurl={deleteData}
          /> }
    </>
  )
}