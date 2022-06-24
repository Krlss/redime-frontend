import { ListIcon } from "../icons/Icons"
import Icon from './Icon'
import { useState } from 'react'
import Modal from './Modal'

const TableCategory = ({ categories }) => {

    const [modal, setModal] = useState(false)
    const [id, setId] = useState(null)

    const handleClick = (id) => {
        setModal(!modal)
        setId(id)
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Creado hace</th>
                        <th>Actualizado hace</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.estado}</td>
                            <td>{item.creado_a ?? '####/##/##'}</td>
                            <td>{item.actualizado_a ?? '####/##/##'}</td>
                            <td>
                                <Icon onClick={() => handleClick(item.id)} className='edit' width={20} height={20} viewBox='100 100' color='#333'>
                                    <path d={ListIcon.Edit} />
                                </Icon>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {modal && <Modal id={id} header='Actualizar nueva categoría' onClick={() => setModal(!modal)} url='categorias' />}
        </>
    )
}

export default TableCategory
