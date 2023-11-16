// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomNum = Math.floor(Math.random() * 100)

    this.setState(prevState => ({count: prevState.count + randomNum}))
  }

  render() {
    const {count} = this.state
    let isEven = true

    if (count % 2 !== 0) {
      isEven = false
    }

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <div>
          {isEven && <p className="is-even-odd">Count is Even</p>}
          {!isEven && <p className="is-even-odd">Count is Odd</p>}
        </div>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="button-label">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
