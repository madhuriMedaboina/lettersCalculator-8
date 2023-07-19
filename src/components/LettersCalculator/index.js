// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  getWord = event => {
    this.setState({word: event.target.value})
  }

  /// getCount = () =>{
  ///   const {word} = this.state
  ///   if (word !== ""){
  ///       this.setState({count: word.length})
  ///   }
  ///  }

  render() {
    const {word} = this.state
    console.log(word)
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">
            Calculate the
            <br /> Letters you
            <br /> enter
          </h1>
          <label htmlFor="letter" className="label-text">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="letter"
            className="input-box"
            placeholder="Enter the phrase"
            onChange={this.getWord}
          />
          <br />
          <p className="button">No.of letters: {word.length}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
