import {Component} from 'react'

import './index.css'

const ResponseFeedback = props => {
  const {resourcesList} = props

  return (
    <div className="love-contaienr">
      <img src={resourcesList.loveEmojiUrl} alt="love emoji" />
      <h1>Thank You!</h1>
      <p>
        We will use your feedback to imporve our custmoer support performance
      </p>
    </div>
  )
}

const EmojiContainer = props => {
  const {emojiItem} = props
  const {id, imageUrl, name, key} = emojiItem
  return (
    <li className="eachEmoji-container">
      <img className="image" src={imageUrl} alt={name} key={id} />
    </li>
  )
}

const FeedbackContainer = props => {
  const {resourcesList, feedbackStatus} = props
  const {emojis} = resourcesList
  const status = false
  const onClickFeedbackIcon = () => {
    feedbackStatus(status)
  }
  return (
    <div className="feedback-container">
      <h1 className="paragraph">
        How satisfied are you with our customer support performance
      </h1>
      <ul className="emoji-container">
        {emojis.map(eachItem => (
          <div className="emojis-button-container">
            <button
              className="button"
              type="button"
              onClick={onClickFeedbackIcon}
            >
              <EmojiContainer emojiItem={eachItem} key={eachItem.Id} />
            </button>
            <p className="emoji-name">{eachItem.name}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}

class Feedback extends Component {
  state = {feedbackContainer: true}

  feedbackStatus = status => {
    this.setState({feedbackContainer: status})
  }

  render() {
    const {feedbackContainer} = this.state
    console.log(feedbackContainer)
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        {feedbackContainer ? (
          <FeedbackContainer
            resourcesList={resources}
            emojisItems={emojis}
            feedbackStatus={this.feedbackStatus}
          />
        ) : (
          <ResponseFeedback resourcesList={resources} />
        )}
      </div>
    )
  }
}
export default Feedback
