import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from "./Loading";
import "../stylesheets/other.css";


const Meals = () => {
    const [data, setdata] = useState(null);
   
    const name = useParams().category;
    //console.log(name);

    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`

    const getCategory = () =>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            //console.log(data)
            setdata(data)
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    useEffect(()=>{
        getCategory()
    }, [])

  return (
    <div>
      <div className="top meals">
        <div>
          <h2 className="text-white text-5xl font-bold mt-8">Explore Our Exquisite Meals</h2>
        </div>
      </div>
        <div className="list meals">
        <h5>You have {data? <span>{data.meals.length}</span> : <span>-</span>} meals to explore</h5>
        <div>
          <div className="categories-container">
            {data ? (
              data.meals.map((info) => {
                return (
                  <div className="category-container" key={info.idMeal}>
                    <a className="category-content" href={`/category/${name}/${info.strMeal}`}>
                      <div className="image">
                        <img src={info.strMealThumb} alt="" />
                      </div>
                      <div className="name">{info.strMeal}</div>
                    </a>
                  </div>
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meals;