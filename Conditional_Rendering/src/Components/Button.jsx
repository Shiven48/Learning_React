function Button() {
    const styles = {
        backgroundColor: "hsl(510, 100%, 20%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    };

    return(
        <div className="buttondiv">
            <button style={styles} onClick={abort}>Click me</button>
        </div>
    )
}

const abort = () => {
    alert("Cant view any page");
}

export default Button