import { useEffect, useState } from 'react'
import Table from '../components/TableMaterials'
import { getAllData } from '../services/Services'
import '../css/Pages.css'
import Modal from '../components/Modal'

const Category = () => {

    const [materiales, setMateriales] = useState([])
    const [categories, setCategories] = useState([])
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    const getMateriales = async () => {
        const data2 = await getAllData('categorias')
        data2.length ? setCategories(data2) : setError('No hay categorias, almenos crea una!')

        const data = await getAllData('materiales')
        setMateriales(data)

        setLoading(false)
    }

    useEffect(() => {
        getMateriales()
    }, [])

    return (
        error ? <div className='error'>{error}</div> :
            loading ? <div className='loading'></div> :
                < div className='container_page' >
                    <button onClick={() => setModal(!modal)} className='create_new_data'>
                        Crear nuevo material
                    </button>
                    <Table materials={materiales} categories={categories} />
                    {
                        modal && <Modal method header='Crear nuevo material'
                            onClick={() => setModal(!modal)}
                            url='materiales'
                            categories={categories}
                            description
                            stock_min />
                    }
                </div >
    )
}

export default Category