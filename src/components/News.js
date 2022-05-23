import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News =(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    // document.title=`${this.capitalizeFirstLetter(props.category)}- NewsBank`;

   const  capitalizeFirstLetter=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const updateNews=async()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      setloading(true)
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      setArticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
      setloading(false)
    }
     useEffect(()=>{
        updateNews();
     },[])
    const handlePrevClick =async()=>{
        setpage(page-1)
        updateNews();
     }
    const handleNextClick = async()=>{
      setpage(page+1)
      updateNews();
    }
  
    return (
      <div className='container my-3'>
        <h1 className="text-center">Newsbank - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {/* if loading = true then only show spinner */}
          {loading && <Spinner />} 
          <div className="row">
          {!loading && articles.map((element)=>{
             return <div className="col-md-4" key={element.url?element.url:""}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,88):""} 
              imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
              </div>
            })}
          </div>
         <div className="container d-flex justify-content-between">
             <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Prev</button>
             <button  disabled={page+1>Math.ceil(totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
         </div>

      </div>
    )
  }

export default News

News.propTypes = {
  country: PropTypes.string
};
News.defaultProps ={
  country:'in',
  pageSize:5,
  category: 'general'
}
News.propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}