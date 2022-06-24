const Input = ({
    type = 'text',
    name,
    label,
    value,
    onChange,
    min,
}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange}
                type={type}
                className="form-control"
                id={name}
                name={name}
                placeholder={label}
                value={value}
                min={min}
            />
        </div>
    );
}

export default Input