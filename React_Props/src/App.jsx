import Card from "./Components/Card"
import profile from "./assets/profile.jpg"

function App() {
  return (
    <div className="app-container">
      <main className="main-content">
        <Card img={profile} title="A bug" description="A beautiful red bug"/>
        <Card img={profile} title="A Ladybug" description="A beautiful red Ladybug"/>
        <Card img={profile} title="An insect" description="A beautiful insect"/>
        <Card img={profile} title="Life" description="A living insect"/>
      </main>
    </div>
  );
}

export default App
