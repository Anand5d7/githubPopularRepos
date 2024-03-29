// Write your code here
// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {isActive, languageFiltersDetails, setActiveLanguageFilterId} = props
  const {id, language} = languageFiltersDetails
  const btnClassName = isActive ? 'language-btn active-btn' : 'language-btn'

  const onClickLanguageFilter = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li>
      <button
        className={btnClassName}
        type="button"
        onClick={onClickLanguageFilter}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
