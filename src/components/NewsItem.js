import React from 'react'

const NewsItem =(props)=> {
        // let myStyle={
      //   width: "18rem"
      // }
      let {title, description,imageUrl,newsUrl,author, date} = props;
    return (
      <div className='my-3'>
        <div className="card" >   {/*style={{width: "18rem"}}*/}
        <img src={!imageUrl?"https://static-ai.asianetnews.com/images/d59a1226-5899-4ab0-8c3c-ca5de1605576/image_1200x630xt.jpg":imageUrl} 
        className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read</a>
        </div>
        </div>      
    </div>
    )
  }

export default NewsItem