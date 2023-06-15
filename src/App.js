import "./App.css";
import Categories from "./components/Categories";
import { Link, Route, Routes } from "react-router-dom";
import Meals from "./components/Meals";
import Meal from "./components/Meal";
import SearchResults from "./components/SearchResults";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
            <Categories/>
        }/>

        <Route path="/search/:key" element={
          <SearchResults/>
        }/>

        <Route path="/category/:category" element={
          <Meals/>
        } />

        <Route path="/category/:category/:meal" element={
          <Meal/>
        }/>
        
        <Route path="*" element={
          <>
          <h1>Page not found</h1>
          <p><Link to="/">Go Home</Link></p>
          </>
        }/>
      </Routes>
    </div>
  );
}

export default App;
