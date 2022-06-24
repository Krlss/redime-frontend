import { Link } from 'react-router-dom'

const CardLink = ({ children, to, name, ...props }) => {
    return (
        <Link to={to}>
            {children}
            <span>
                {name}
            </span>
        </Link>
    )
}

export default CardLink