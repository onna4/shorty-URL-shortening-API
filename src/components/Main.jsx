import React from 'react'
import Form from "./Form"
import illusM from './images/illustration-mobile.png'
import records from "./images/icon-detailed-records.svg"
import brand from "./images/icon-brand-recognition.svg"
import customizable from "./images/icon-fully-customizable.svg"

export default function Main() {
  return (
    <main>
        <section className='hero-section' >
            <img className='heroImg' src={illusM} alt="illustration banner image" />
            <article className='head-article'>
                <h1 className='main-heading'>More than just shorter links</h1>
                <p className='main-parag'>Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <button className='btn round' >Get Started</button>
            </article>
        </section>
        <Form />
        <section className='advSection'>
            <h2 className='advHead' >Advanced Statistics</h2>
            <p className='advP' >Track how your links are performing across the web with our
                advanced statistics dashboard.</p>
        </section>
        <article className='infoContainer'>
            <section className='infoblock'>
                <div className='icon-container'>
                    <img src={brand} alt="brand icon" className='section--icon' />
                </div>
                <h2 className='subheading' >Brand Recognition</h2>
                <p>Boost your brand recognition with each click. Generic links don’t
                    mean a thing. Branded links help instil confidence in your content.</p>
            </section>
            <section className='infoblock'>
                <div className='icon-container iconCon'>
                    <img src={records} alt="records icon" className='section--icon' />
                </div>
                <h2 className='subheading' >Detailed Records</h2>
                <p>Gain insights into who is clicking your links. Knowing when and where
                    people engage with your content helps inform better decisions.</p>
            </section>
            <section className='infoblock'>
                <div className='icon-container iconCon'>
                    <img src={customizable} alt="records icon" className='section--icon' />
                </div>
                <h2 className='subheading' >Fully Customizable</h2>
                <p>Improve brand awareness and content discoverability through customizable
                    links, supercharging audience engagement.</p>
            </section>
        </article>
        <article className='bottom-article' >
            <h2 className='subheading' >Boost your links today</h2>
            <button className='btn round'>Get Started</button>
        </article>
    </main>
  )
}
