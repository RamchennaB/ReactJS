import { Outlet, Link } from 'react-router-dom';
function Root(){
   return( 
    <>
   <nav className="nav">
    <ul className='nav-list'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
   </nav>

   <Outlet />
   </>
   );
}
export default Root;