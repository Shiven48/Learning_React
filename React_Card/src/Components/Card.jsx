import profile from "../assets/profile.jpg"
function Card() {
    return(
        <div className="card">
                <img className="profile" src={profile} alt="image-placeholder"></img>
                <h5>LadyBug</h5>
                <p>This is a beautiful insect</p>            
        </div>
    );
}

export default Card