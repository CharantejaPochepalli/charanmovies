
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";// we are importing BrowserRouter as Router,Routes,Route from react-router-dom that we imported
import Header from './components/header/header.js';
import Home from './pages/home/home';
import MovieList from './components/header/movielist/movieList';
import Movie  from './pages/home/movieDetails/movie';
function App() {
  return (
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;



// function App() {
//    return (
//     <div className="App">
//        <Router>
//         <Header/>
//              <Routes>
//                     <Route index element={<Home/>}></Route>
//                     <Route  path="movie/:id" element={<Movie/>}></Route>
//                     <Route path="movie/:type" element={<MovieList/>} ></Route>
//                     <Route path="/*" element={<h1>Error page</h1>}></Route>
//                </Routes>
//        </Router> 
//     </div>
//   );
// }