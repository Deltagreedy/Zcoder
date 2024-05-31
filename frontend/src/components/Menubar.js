import { Link } from 'react-router-dom'

const Menubar = () => {
    return (
        <div className="menu">
            <ul className="ul-menu">
                <li className='li-menu'><Link className='link-menu' to = '/'>Home</Link></li>
                <li className='li-menu'><Link className='link-menu'><s>smth 2</s></Link></li>
                <li className='li-menu'><Link className='link-menu'><s>smth 3</s></Link></li>
                <li className='li-menu'><Link className='link-menu' to = '/problem'>problem set</Link></li>
                <li className='li-menu'><Link className='link-menu'><s>profile</s></Link></li>
            </ul>
        </div>
    )
}


export default Menubar;