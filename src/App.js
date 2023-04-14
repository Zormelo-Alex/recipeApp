import './App.css';
import { useEffect, useState } from 'react';

function App() {
  //console.log("Dom")
  const category = "https://www.themealdb.com/api/json/v1/1/categories.php"

  const [data, setdata] = useState(null);

const getCategory = () => {
    const cards = document.querySelector(".cards")
    fetch(category)
    .then(res=>res.json())
    .then(data=>{
      setdata(data);
      //console.log(data);
    })
    .catch(err=>{
        console.log(err)
        cards.textContent = err.message;
        setInterval(getCategory, 1000)
    })
}

useEffect(getCategory,[]);

  return (
    <div className="App">
      <h3 className="head">Food Categories</h3>
      <div className="categories">
        <div className="cards">
          {data? data.categories.map(info=>{
            <div className='card' key={info.idCategory}>
              <a href="#">
                <div className="image">
                  <img src={info.strCategoryThumb} alt="" />
                </div>
                <div className="name">{info.strCategory}</div>
                <div className="desc">{info.strCategoryDescription}</div>
              </a>
            </div>
            //console.log(info)
          })
            
          : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
