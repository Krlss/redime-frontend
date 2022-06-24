const Estado = ({ onChange, value }) => {
    return (
        <div className="form-group">
            <label htmlFor="description">Estado</label>
            <select value={value} onChange={onChange} className="form-control" id="estado" name="estado">
                <option value="ACTIVO">Activo</option>
                <option value="CANCELADO">Cancelado</option>
                <option value="ELIMINADO">Eliminado</option>
            </select>
        </div>
    )
}

export default Estado