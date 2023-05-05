import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useEffect,useState } from 'react';
function App() {

  const [movie, setMovie] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/getMovies').then(data => {return data.json()}).then(data=>{
      let arr = []
      arr.push(data)
     // console.log('arr',arr)
      setMovie(arr)
    })

  },[])
   //console.log('movie',movie)

  return (
    <div>
       {movie.length >= 1 && <Card movies={movie}/>}
    </div>
  );
}

export default App;
