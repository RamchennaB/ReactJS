import { Outlet, Link } from 'react-router-dom';
import img1 from '../assets/tatva.jpg'
function Home(){
    return(
        <>
        <h1>TATVA VAIDIKA GRAMA</h1>
        <p>Tatva Vadihika Grama is a community that embraces the principles of naturopathy, an ancient medical approach focusing on natural healing and wellness.</p>
        <img src={img1} alt="Home" className="image"/>
       </>
    );

}
export default Home;
