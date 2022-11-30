import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../components/carousel'
import Navbar from '../../components/navbar'
import '../../components/carousel/carousel.css'
import { apiLibro } from '../../api/apiLibro'

const Home = () => {
    const [libros, setLibros] = useState([])
    useEffect(() => {
        getLibros();
    }, [])
    const getLibros = async () => {
        const res = await apiLibro.get('/api/libro')
        const data = await res.data;
        
        setLibros(data)
    }
    return (
        <>
            <Navbar />
            <div className='container mx-auto'>
                <div className='flex flex-col gap-20'> 

                <div className='flex flex-col items-center mt-10'>
                    <h2 className='text-lg text-gray-500'>¿ Que queres aprender hoy?</h2>
                    <input className='input w-1/2   ' type="text" placeholder='Buscar por nombre o autor' />
                </div>
                <Carousel
                    show={3}
                    withIndicator
                >
                    {libros.map(libro=>(
                         <img className='ml-5' src={`${apiLibro.getUri()}${libro.portada}`} />
                         )

                        )}
                </Carousel>
                <div className=''>
                        <h3>Temas</h3>
                </div>
                </div>

            </div>

        </>
    )
}

export default Home