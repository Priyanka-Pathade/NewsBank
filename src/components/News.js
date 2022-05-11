import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    
    constructor(){
        super()
        console.log("Hello, I'm constructor from news!");
        this.state={
            articles: [],
            loading:false
        }
    }
   async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=7beee3b7d25d4a10bba051a6caa099d6";
        let data = await fetch(url);
        let parsedData = await data.json();
       console.log(parsedData);
         this.setState({articles:parsedData.articles})
     }
  render() {
      console.log("render");
    return (
      <div className='container my-3'>
          <h2>Newsbank - Top headlines</h2>
          
          <div className="row">
          {this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url?element.url:""}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,88):""} 
              imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
         

      </div>
    )
  }
}

export default News