import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
          <h2>Newsbank - Top headlines</h2>
          <div className="row">
              <div className="col-md-4">
            
              <NewsItem title="MyTitle" description="desc" imageUrl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
               newsUrl="TODO" />
              </div>
              <div className="col-md-4">
              <NewsItem title="MyTitle" description="desc"/>
              </div>
              <div className="col-md-4">
              <NewsItem title="MyTitle" description="desc"/>
              </div>
          </div>
         

      </div>
    )
  }
}

export default News