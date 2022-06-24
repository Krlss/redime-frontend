import '../css/Home.css';
import CardLink from '../components/CardLink'
import Icon from '../components/Icon'
import { ListIcon } from '../icons/Icons'

const Home = () => {
    return (
        <div className='container'>
            <CardLink name='Materiales' to='/materiales' >
                <Icon width={20} height={20} viewBox='24 24' color='#333'>
                    <path d={ListIcon.Material} />
                </Icon>
            </CardLink>
            <CardLink name='Categorías' to='/categorias' >
                <Icon width={20} height={20} viewBox='20 20' color='#333'>
                    <path d={ListIcon.Category} />
                </Icon>
            </CardLink>
        </div>
    )
}
export default Home