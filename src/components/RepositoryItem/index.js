// Write your code here
// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    name,
    imageUrl,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img className="repository-image" alt={name} src={imageUrl} />
      <h1 className="repository-name">{name}</h1>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          className="icon-img"
          alt="stars"
        />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          className="icon-img"
          alt="forks"
        />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          className="icon-img"
          alt="open issues"
        />
        <p className="count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
