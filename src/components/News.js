import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
    constructor(){
        super()
        console.log("Hello, I'm constructor from news!");
        this.state={
            articles: [],
            loading:false,
            page:1
        }
    }    
   async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7beee3b7d25d4a10bba051a6caa099d6&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults: parsedData.totalResults
            })
     }
     handlePrevClick =async()=>{
        console.log("prev");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7beee3b7d25d4a10bba051a6caa099d6&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles:parsedData.articles,
            page : this.state.page-1,
            loading:false
        })
     }
     handleNextClick = async()=>{
        //console.log("next")
        if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7beee3b7d25d4a10bba051a6caa099d6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true})
          let data = await fetch(url);
          let parsedData = await data.json();
          this.setState({
              articles:parsedData.articles,
              page : this.state.page + 1,
              loading:false
          })
      }
    }
  render() {
    //  console.log("render");
    return (
      <div className='container my-3'>
        <h1 className="text-center">Newsbank - Top headlines</h1>
        {/* if loading = true then only show spinner */}
          {this.state.loading && <Spinner />} 
          <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
             return <div className="col-md-4" key={element.url?element.url:""}>
              <NewsItem  title={element.title?element.title:""} description={element.description?element.description.slice(0,88):""} 
              imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
         <div className="container d-flex justify-content-between">
             <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Prev</button>
             <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
         </div>

      </div>
    )
  }
}
export default News