import React from 'react'
import styles from '../styles/logo.module.css'
import { useState, useEffect } from 'react'


function Logo() {

	  const [ logo, setLogo ] = useState('block')

  useEffect(() => {
      setTimeout(function logo(){
           setLogo('hidden')
      },1000)

      setTimeout(function logo(){
        setLogo('hidden2')
      },2000)
        setTimeout(function logo(){
           setLogo('block')
      },3000)

      setTimeout(function logo(){
        setLogo('hidden')
      },4000)
        setTimeout(function logo(){
           setLogo('hidden2')
      },5000)

      setTimeout(function logo(){
        setLogo('block')
      },6000)
          setTimeout(function logo(){
        setLogo('hidden')
      },7000)
        setTimeout(function logo(){
           setLogo('hidden2')
      },8000)

      setTimeout(function logo(){
        setLogo('block')
      },9000)
  }, [])


	return (
	<>

    <style jsx>
      {`
      .block{
        opacity:1
      }
      .hidden{
        opacity:.5
      }
      .hidden2{
        opacity: .1
      }
      `}
    </style>
    	
    		<div className={logo}>
				<div className={styles.container}>
					<div className={styles.containerLogo}>
					<div className={styles.name}>
				         <h1><span>La</span> Serafina</h1>
				         <h4>Market</h4>
						</div>
					</div>
				</div>
    		</div>
</>
	)
}

export default Logo