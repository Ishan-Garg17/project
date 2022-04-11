import './Header.css'
import image from './webimage.png'
const Header = ()=>{
    return(
        <div className="wrapper">
                <div className='content'>
                <span className='heading1'> The future </span>
                <br/>
                <span> of health </span>
                <br/>
                <span className='heading3'><em>&#8212;is clear</em></span>
                <button className='btn'>Shop All</button>
                </div>
        </div>
    )
}

export default Header