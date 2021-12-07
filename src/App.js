import './App.css';
import Navbar from './Components/Navbar';
import data from'./data';
import Card from './Components/Card';

function App() {
  const newData= data.map(item =>{
    return(
      <Card
      key={item.id}
    item={item}
    
    />
    )
    
  })
  return (
    <div className="App">
     <Navbar/>
     {newData}
    </div>
  );
}

export default App;
