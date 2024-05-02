import ProfilePic from './assets/linux.jpg'
function Card(){
  return(
    <div className="card">
      <img className="card-img" alt="ProfilePic" src={ProfilePic}></img>
     <h2 className="card-title">Linux</h2>
    <p className="car-text">LInux is a OpenSource OS</p>
    </div>
    );
}
exportt default Card
