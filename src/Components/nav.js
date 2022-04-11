import './nav.css';
const Nav = ()=>{
    return(
        <nav className="nav">
            <ul className='nav-titles'>
                <li className='Menu'>Menu</li>
                <li className='logo'>Ritual</li>
                <li className='cart'>
                    <span>Who We Are</span>
                    <i class="uil uil-shopping-bag cart-icon"></i>
                </li>
            </ul>
        </nav>
    )
}
export default Nav