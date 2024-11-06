import propTypes from "prop-types"

function Card(props,{img="https://via.placeholder.com/150",title="Please add a Title",description="Please add a Description"}) {
    return(
        <div className="card">
            <img className="profile" src={props.img} alt="image-placeholder"></img>
            <h5 clasname="title">{props.title}</h5>
            <p className="description">{props.description}</p>            
        </div>
    );
}
Card.propTypes = {
    img:propTypes.string,
    title:propTypes.string,
    description:propTypes.string
}

export default Card