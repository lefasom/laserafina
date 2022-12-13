import React from 'react'
import Layout from '../components/Layout'
import Galery from '../components/Galery'


function Cocina() {
    const contentArray = [
        {
            id: 1,
            heading: 'COCINA',
            src: 'example-img/21.jpeg',
            text: `Quay es una progresión de la armonía son primordiales.
            Quay ofrece un pasaje personal e inlinaria de Peter Gilmore.`
        },
        {
            id: 2,
            heading: 'COCINA',
            src: 'example-img/17.jpeg',
            text: `Quay es una progresión de la armonía son primordiales.
            Quay ofrece un pasaje personal e inlinaria de Peter Gilmore.`
        }
      
    ]
  return (
    <div>
        <Layout>
            Cocina
            <Galery content={contentArray} />
        </Layout>
    </div>
  )
}

export default Cocina