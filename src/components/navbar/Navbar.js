import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar(){
    return(
        <>
            <nav >
                <ul className="nav">
                    <li className='nav-item'><NavLink to='/'>صفحه اصلی</NavLink></li>
                    <li className='nav-item'><NavLink to='/about'>درباره ما</NavLink></li>
                    <li className='nav-item'><NavLink to='/blog'>بلاگ</NavLink></li>
                    <li className='nav-item'><NavLink to='/panel'>پنل کاربر</NavLink></li>
                    <li className='nav-item'><NavLink to='/login'>ورود</NavLink></li>
                </ul>
            </nav>
        </>
    )
}