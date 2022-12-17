import React from 'react'
import LayoutCopy from '../components/LayoutCopy'
import Galery from '../components/Galery'
import Slider from '../components/Slider'


function Cocina() {
    const contentArray = [
        {
            id: 8,
            heading: 'COCINA',
            src: 'example-img/21.jpeg',
            text: `Quay es una progresión de la armonía son primordiales.
            Quay ofrece un pasaje personal e inlinaria de Peter Gilmore.`
        },
        {
            id: 7,
            heading: 'COCINA',
            src: 'example-img/17.jpeg',
            text: `Quay es una progresión de la armonía son primordiales.
            Quay ofrece un pasaje personal e inlinaria de Peter Gilmore.`
        }
      
    ]
    const sliderContent = [
        {id: 1, src: 'example-img/1.jpeg'},
        {id: 2, src: 'example-img/2.jpeg'},
        {id: 3, src: 'example-img/3.jpeg'},
        {id: 4, src: 'example-img/4.jpeg'},
        {id: 5, src: 'example-img/5.jpeg'},
        {id: 6, src: 'example-img/6.jpeg'}
    ]
  return (
    <LayoutCopy>
        <Slider content={sliderContent}/>
        <Galery content={contentArray}/>
    </LayoutCopy>
  )
}

export default Cocina