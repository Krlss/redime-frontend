const Icon = (props) => {
    const { width, height, viewBox, color, children, onClick } = props
    return (
        <svg
            {...props}
            onClick={onClick}
            width={width}
            height={height}
            viewBox={`0 0 ${viewBox}`}
            fill={color}
        >
            {children}
        </svg>
    )
}

export default Icon