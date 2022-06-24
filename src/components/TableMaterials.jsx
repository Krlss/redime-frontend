import { ListIcon } from "../icons/Icons"
import Icon from './Icon'
import { useState } from 'react'
import Modal from './Modal'

const TableMaterial = ({ materials, categories }) => {

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
                        <th>Descripcion</th>
                        <th>Stock minimo</th>
                        <th>Categoria ID</th>
                        <th>Estado</th>
                        <th>Creado hace</th>
                        <th>Actualizado hace</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {materials.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nombre}</td>
                            <td>{item.descripcion}</td>
                            <td>{item.stock_minimo}</td>
                            <td>{item.categoria_id}</td>
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
            {modal && <Modal
                id={id}
                header='Actualizar material'
                onClick={() => setModal(!modal)}
                url='materiales'
                description
                stock_min
                categories={categories}
            />}
        </>
    )
}

export default TableMaterial
