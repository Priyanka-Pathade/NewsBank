import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
      let myStyle={
        width: "18rem"
      }
      let {title, description,imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={myStyle}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read</a>
        </div>
        </div>      
    </div>
    )
  }
}

export default NewsItem