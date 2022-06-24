import { useEffect, useState } from 'react'
import Table from '../components/TableCategory'
import { getAllData } from '../services/Services'
import '../css/Pages.css'
import Modal from '../components/Modal'

const Category = () => {

    const [categories, setCategories] = useState([])
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)

    const getCategories = async () => {
        const data = await getAllData('categorias')
        setLoading(false)
        setCategories(data)
    }

    useEffect(() => {
        getCategories()
    }, [])

    return (
        loading ? <div className='loading'></div> :
            <div className='container_page'>
                <button onClick={() => setModal(!modal)} className='create_new_data'>
                    Crear nueva categoria
                </button>
                <Table categories={categories} />
                {modal && <Modal method header='Crear nueva categoría' onClick={() => setModal(!modal)} url='categorias' />}
            </div>
    )
}

export default Category