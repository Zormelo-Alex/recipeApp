import React from 'react'
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./Loading";
import { useNavigate } from 'react-router-dom';

const Categories = () => {
      //console.log("Dom")

  const navigate = useNavigate()

  const [data, setdata] = useState(null);
  const [search, setsearch] = useState("");

  const categories = "https://www.themealdb.com/api/json/v1/1/categories.php";
  


  const getCategory = () => {
    toast.success("Welcome", {
      position: "bottom-center",
    })
    //getting all food categories
    fetch(categories)
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        //console.log(data.categories);
      })
      .catch((err) => {
        toast.error(err.message)
        setInterval(getCategory, 1000);
      });
  };

 const Search = () => {
  console.log(search)
  navigate(`/search/${search}`);
 }

 window.addEventListener("keypress", (e)=>{
  //console.log(e.key)
  if(e.key == "Enter"){
    Search()
  }
})

  useEffect(()=>{
    getCategory()
  }
    , []);

  return (
    <div>
        <ToastContainer />
      <div className="top">
        <div className="search">
          <input
            type="search"
            placeholder="Search meal..."
            onChange={(e)=> {
              setsearch(e.target.value)
            }}
          />
          <AiOutlineSearch className="cursor-pointer w-8 pl-2 pr-2 h-full" 
          onClick={Search}
          />
        </div>
        <div>
          <h2 className="text-white text-5xl font-bold">Explore Recipes</h2>
          <p>Food is a vital part of our daily lives, providing us with the energy and nutrients we need to sustain ourselves. From fast food to gourmet cuisine, there is a vast array of food options available to us, each with its own unique flavor and cultural significance. Food can be a source of comfort, a way to bring people together, or a means of expressing creativity. However, it's important to remember that not all foods are created equal, and a balanced diet is key to maintaining good health.</p>
        </div>
      </div>
      <div className="list">
        <h3 className="header">Food Categories</h3>
        <h5>You have {data? <span>{data.categories.length}</span> : <span>-</span>} categories to explore</h5>
        <div>
          <div className="categories-container">
            {data ? (
              data.categories.map((info) => {
                return (
                  <div className="category-container" key={info.idCategory}>
                    <a className="category-content" href={`/category/${info.strCategory}`}>
                      <div className="image">
                        <img src={info.strCategoryThumb} alt="" />
                      </div>
                      <div className="name">{info.strCategory}</div>
                      <div className="desc">{info.strCategoryDescription}</div>
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

export default Categories;