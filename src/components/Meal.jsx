import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AiFillYoutube } from "react-icons/ai";
import Loading from './Loading';
import "../stylesheets/other.css";

const Meal = () => {

    const [data, setdata] = useState(null);
    const meal = useParams().meal;
    //console.log(meal)

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`;

    const getMeal = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            setdata(data);
        })
    }

    useEffect(()=> {
        getMeal()
    }, [])

  return (
    <div>
        <div className="top meals">
        <div>
          <h2 className="text-white text-5xl font-bold mt-8">{data? <span>{data.meals.map((info)=> (
            <span key={info.idMeal}>{info.strMeal}</span>
          ))}</span> : <span>-</span>}</h2>
        </div>
      </div>
        <div className="">
        <div>
          <div className="">
            {data ? (
              data.meals.map((info) => {
                return (
                  <div className="meal" key={info.idMeal}>
                    <div className="category">Meal category : <span>{info.strCategory}</span></div>
                    <div className="category">Popular tags : <span>{info.strTags}</span></div>
                      <div className="image">
                        <img src={info.strMealThumb} alt="image" />
                        <div className="ingredients">
                        <h2>Ingredients for Easy {info.strMeal} Recipe</h2>
                        <p>This {info.strMeal} recipe requires the following ingredients:</p>
                        <h2>{info.strMeal}  Ingredients</h2>
                        <div className="single">
                            <div>{info.strIngredient1}</div>
                            <div>{info.strMeasure1}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient2}</div>
                            <div>{info.strMeasure2}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient3}</div>
                            <div>{info.strMeasure3}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient4}</div>
                            <div>{info.strMeasure4}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient5}</div>
                            <div>{info.strMeasure5}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient6}</div>
                            <div>{info.strMeasure6}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient7}</div>
                            <div>{info.strMeasure7}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient8}</div>
                            <div>{info.strMeasure8}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient9}</div>
                            <div>{info.strMeasure9}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient10}</div>
                            <div>{info.strMeasure10}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient11}</div>
                            <div>{info.strMeasure11}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient12}</div>
                            <div>{info.strMeasure12}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient13}</div>
                            <div>{info.strMeasure13}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient14}</div>
                            <div>{info.strMeasure14}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient15}</div>
                            <div>{info.strMeasure15}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient16}</div>
                            <div>{info.strMeasure16}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient17}</div>
                            <div>{info.strMeasure17}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient18}</div>
                            <div>{info.strMeasure18}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient19}</div>
                            <div>{info.strMeasure19}</div>
                        </div>
                        <div className="single">
                            <div>{info.strIngredient20}</div>
                            <div>{info.strMeasure20}</div>
                        </div>
                      </div>
                      </div>
                      <div className="instructions">{info.strInstructions}</div>
                      <div className="links">
                      <div className="youtube">
                      <a href={info.strYoutube}> <AiFillYoutube/> Watch tutorial</a>
                      </div>
                      <div className="source">
                        <a href={info.strSource}>View source</a>
                      </div>
                      </div>
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

export default Meal;