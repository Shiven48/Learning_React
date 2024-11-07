import react from "react";

function Footer() {
    return(
        <div className="footer">
            <hr />
            <p>&copy; {new Date().getFullYear()} Keto's Website</p>
        </div>
    )
}

export default Footer;