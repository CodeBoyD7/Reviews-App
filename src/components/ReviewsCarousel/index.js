import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  leftMove = () => {
    this.setState(prevState => {
      if (prevState.index > 0) {
        return {index: prevState.index - 1}
      }
      return null
    })
  }

  rightMove = () => {
    const {reviewsList} = this.props
    this.setState(prevState => {
      if (prevState.index < reviewsList.length - 1) {
        return {index: prevState.index + 1}
      }
      return null
    })
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const {username, imgUrl, companyName, description} = reviewsList[index]

    return (
      <div className="main-container">
        <button type="button" testid="leftArrow" onClick={this.leftMove}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>

        <div className="profile">
          <h1>Reviews</h1>
          <img src={imgUrl} alt={username} />
          <p>{username}</p>
          <p>{companyName}</p>
          <p>{description}</p>
        </div>

        <button type="button" testid="rightArrow" onClick={this.rightMove}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
