// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, setActiveFilteredItemId, languageFilterDetails} = props
  const {id, language} = languageFilterDetails

  const btnClassName = isActive ? 'lang-btn active-btn' : 'lang-btn'

  const onClickLanguageBtn = () => {
    setActiveFilteredItemId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
