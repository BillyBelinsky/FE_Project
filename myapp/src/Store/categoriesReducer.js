const initialState = {
  categories: []
}

let ADD_CATEGORY = 'ADD_CATEGORY'
let DELETE_CATEGORY = 'DELETE_CATEGORY'

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category]
      }
    case DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(
          category => category.id !== action.id
        )
      }
    default:
      return state
  }
}

export default categoriesReducer

export const AddCategoryAction = category => {
  return {
    type: ADD_CATEGORY,
    category
  }
}

export const DeleteCategoryAction = id => {
  return {
    type: DELETE_CATEGORY,
    id
  }
}
