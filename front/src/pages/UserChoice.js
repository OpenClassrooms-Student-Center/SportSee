import { NavLink } from 'react-router-dom'
import '../styles/global.css'

function HomePage() {
    return (
        <div className='user-choice'>
            <p><NavLink to="user/12">Karl</NavLink></p>
            <p><NavLink to="user/18">Cecilia</NavLink></p>
        </div>
    )
}
export default HomePage;