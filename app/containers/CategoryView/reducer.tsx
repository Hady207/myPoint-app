import {createActions} from 'reduxsauce';

export const {Types: CategoryTypes, Creators: CategoryActions} = createActions({
  getCategoryData: ['category'],
  getCategoryDataSuccess: ['data'],
  getCategoryDataFailed: ['errorMessage'],
});

export const initialState = {
  isLoading: false,
  errorMessage: null,
  categoryStores: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoryTypes.GET_CATEGORY_DATA:
      return {...state, isLoading: true};

    case CategoryTypes.GET_CATEGORY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categoryStores: action.data,
      };

    case CategoryTypes.GET_CATEGORY_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };
    default:
      return state;
  }
};
