import './Layout.css'
import { Outlet, Link } from 'react-router-dom';
function Layout(){
    return(
        <>
         <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            
         </nav>

         <Outlet />
        </>
    );
}
export default Layout;
