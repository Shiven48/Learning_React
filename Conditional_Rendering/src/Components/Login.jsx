import Footer from "./Footer"
import Header from "./Header"
import Card from "./Card"
import Button from "./Button"
import profile from "../assets/profile.jpg"

function Login(props) {
    const Username = props.username;
    const Password = props.password;

    if(Username === "keto" && Password === "Keto") {
        return(
        <div className="app-container">
            <Header />
        <main className="main-content">
            <Card img={profile} title="A bug" description="A beautiful red bug"/>
            <Card img={profile} title="A Ladybug" description="A beautiful red Ladybug"/>
            <Card img={profile} title="An insect" description="A beautiful insect"/>
            <Card img={profile} title="Life" description="A living insect"/>
            <Button />
        </main>
            <Footer />
        </div>
        );
    }
    else {
        return(
            <>
                <Button />
            </>
        );
    } 
}

export default Login;