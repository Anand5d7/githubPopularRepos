// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props

  const {
    name,
    imageUrl,
    forksCount,
    starsCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="list-items">
      <img src={imageUrl} alt={name} className="avatar" />
      <h1 className="heading">{name}</h1>
      <div className="count">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="count-image"
        />
        <p className="count-para">{starsCount} stars</p>
      </div>
      <div className="count">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="count-image"
        />
        <p className="count-para">{forksCount} forks</p>
      </div>
      <div className="count">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="count-image"
        />
        <p className="count-para">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
