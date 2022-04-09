import logo from './logo.svg';
import './App.css';
import{Category} from  "./components/categories"

function App() {
  const data = [{image:"https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",title:"Grocery"},{
    image:"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",title:"Mobiles"
  }]
  return (
    <div className="App">
     {data.map((e)=>{
      return  <Category image ={e.image} label = {e.title}/>
     })}
    </div>
  );
}

export default App;
