const CategoriasSelect = ({ categorias, onChange, value }) => {
    return (
        <div className="form-group">
            <label htmlFor="description">Categoria</label>
            <select value={value} onChange={onChange} className="form-control" id="categoria_id" name="categoria_id">
                <option value="">Seleccione una categoria</option>
                {
                    categorias.map(category => (
                        <option key={category.id} value={category.id}>{category.nombre}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default CategoriasSelect