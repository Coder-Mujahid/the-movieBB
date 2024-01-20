import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzVmMmE0NGFlOTNhMDBhOTc2MGYwNDMzYTQ4N2Y1OCIsInN1YiI6IjY1YWJmZGYyYmQ1ODhiMDBjYTYxYTdjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.90310K5TloZPBE4igS_8O8cxiqQzQNMecaUDE0TbrsU'
    }
  };
  
  fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <>
     <Navbar></Navbar>
    </>
  )
}

export default App
