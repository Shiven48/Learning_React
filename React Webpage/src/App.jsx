// import Food from "./Food"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Card from "./Components/Card"
import Button from "./Components/Button"
import profile from "./assets/profile.jpg"

function App() {
  return (
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

export default App
