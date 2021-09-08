import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    changeInputValue,
    enterSearchInput,
    categoryOptions,
    changeCategory,
    changeRating,
    ratingsList,
    clearFilter,
    searchInput,
    activeCategoryId,
    activeRatingId,
  } = props

  const OnClickClearFilter = () => {
    clearFilter()
  }

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeInputValue = event => {
    changeInputValue(event.target.value)
  }

  const renderSearchInput = () => (
    <div className="search-input-container">
      <input
        type="search"
        value={searchInput}
        placeholder="Search"
        className="search-input"
        onChange={onChangeInputValue}
        onKeyDown={onEnterSearchInput}
      />
      <BsSearch className="search-icon" />
    </div>
  )

  const renderCategoriesList = () =>
    categoryOptions.map(category => {
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })

  const renderProductCategory = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
      {}
    </>
  )

  const renderRatingsFiltersList = () =>
    ratingsList.map(rating => {
      const onClickRatingItem = () => changeRating(rating.ratingId)
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`
      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating-${rating.ratingId}`}
            className="rating-image"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderRatingsFilters()}
      <button
        type="submit"
        className="clear-filters-btn"
        onClick={OnClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
