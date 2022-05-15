import React, { Component } from 'react'
import loading from './loading(1).gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
          <img src={loading} alt="loading"/>
          {/* console.log("loading .....") */}
      </div>
    )
  }
}

export default Spinner