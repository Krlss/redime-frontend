import { useCustomHook } from '../hooks/CustomHook'
import { useState, useEffect } from 'react'
import Estado from './Estado'
import CategoriasSelect from './CategoriasSelect'
import Input from './Input'

const ModalCategory = ({ onClick, header, id, method, description, stock_min, categories, url }) => {

    const { createData, data, loading, setData, updateData, getData } = useCustomHook()
    const [error, setError] = useState(false)

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = method ? await createData(url) : await updateData(id, data, url)
        if (res?.error) setError(res.error)
        else {
            setError(false)
            window.location.reload()
        }
    }

    const getOneData = async (id) => {
        const res = await getData(id, url)
        setData(res)
    }

    useEffect(() => {
        if (id) getOneData(id)
    }, [])

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{header}</h2>
                    <button onClick={onClick} className="modal-close"><span>+</span></button>
                </div>
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>

                        <Input label='Nombre' name='nombre' onChange={handleChange} value={data?.nombre || ''} />

                        {description && <Input label='Descripción' name='descripcion' onChange={handleChange} value={data?.descripcion || ''} />}

                        {stock_min && <Input min='1' label='Stock Minimo' name='stock_minimo' onChange={handleChange} value={data?.stock_minimo || ''} type='number' />}

                        {categories && <CategoriasSelect categorias={categories} onChange={handleChange} value={data.categoria_id} />}

                        <Estado value={data.estado} onChange={handleChange} />

                        <button
                            type={loading ? `button` : `submit`}
                            className="btn">
                            {loading ? `Cargando...` : `Guardar`}
                        </button>
                    </form>
                    {error && !loading && <div className="alert alert-danger">{error}</div>}
                </div>
            </div>
        </div>
    )
}

export default ModalCategory