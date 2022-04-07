import logo from './logo.svg';
import './App.css';

function App() {
  const data = ["Android","Blackberry","Iphone","Windows Phone"]
  const brands = ["Samsung","HTC","Micromax","Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      {data.map((e)=>(
        <ul>
        <li>{e}</li>
        </ul>
      ))}
      <h1>Mobile Manufacturers</h1>
      {brands.map((p)=>(
        <ul>
          <li>{p}</li>
        </ul>
      ))}

        
    </div>
  );
}

export default App;
