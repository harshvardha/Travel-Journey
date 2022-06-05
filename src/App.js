import NavBar from "./components/NavBar";
import Card from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <NavBar />
      {data.map(item => {
        return (
          <Card
            key={item.id}
            item={item}
          />
        )
      })}
    </div>
  );
}

export default App;
