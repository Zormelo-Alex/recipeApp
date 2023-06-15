import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from './Loading';

const SearchResults = () => {

    const [data, setdata] = useState(null);

    const key = useParams().key;

    const searchAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${key}`;

    const getSearch = () => {
        fetch(searchAPI)
        .then(res => res.json())
        .then(data => {
            setdata(data)
            //console.log(data);
        })
        .catch(err => {
          console.log(err.message);
        })
      }
      useEffect(()=> {
        getSearch()
      }, [])
  return (
    <div>
        <div className="top meals">
        <div>
          <h2 className="text-white text-5xl font-bold mt-8">Search Results</h2>
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
                    <a className="category-content" href={`/category/${info.strCategory}/${info.strMeal}`}>
                      <div className="image">
                        <img src={info.strMealThumb} alt="" />
                      </div>
                      <div className="name">{info.strMeal}</div>
                      <div className="name">{info.strCategory}</div>
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

export default SearchResults