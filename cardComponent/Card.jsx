import ProfilePic from './assets/linux.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-img"alt="ProfilePic" src={ProfilePic}></img>
            <h2 className="card-title">Linux</h2>
            <p className="card-text">Linux is a Opensource OS</p>
        </div>
    );
}
export default Card
