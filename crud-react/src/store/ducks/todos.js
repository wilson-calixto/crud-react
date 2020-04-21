import { dark } from "@material-ui/core/styles/createPalette";

// import { useTheme } from "../../ThemeContext";

const Types = {
  SET_MODE: 'uqms/MODE',
  SET_MENU: 'uqms/MENU',
  SET_SUBMENU: 'uqms/SUBMENU',
  SET_ROWS: 'register/ROWS',
  SET_PAGE_NUMBER: 'register/PAGE_NUMBER',
  SET_PAGE_SIZE: 'register/PAGE_SIZE',
  SET_TOTAL_ELEMENTS: 'register/TOTAL_ELEMENTS',
  SET_APP_MODE:"SET_APP_MODE",
  SET_ERROR: 'register/ERROR',
  SET_LOADING: 'register/LOADING',
  SET_LOADING_ROWS: 'register/LOADING_ROWS',
  SET_VIEW_INFO: 'register/VIEW_INFO',
  SET_UPDATE_INFO: 'register/UPDATE_INFO',
  SET_DELETE_INFO: 'register/DELETE_INFO',
  SET_INITIAL_STATE: 'register/INITIAL_STATE',
  ADD_COURSE:"ADD_COURSE",
  SET_MATERIAL_THEME: 'SET_MATERIAL_THEME',

};


const initialState = {
    rows: [],
    pageNumber: 0,
    pageSize: 10,
    totalElements: 0,
    error: null,
    appMode: "light",
    loading: false,
    loadingRows: false,
    viewInfo: {},
    updateInfo: {},
    deleteInfo: {},
    data: [
      'React Native',
      'ReactJS',
      'NodeJS'
    ],
    material_theme: {
      palette: {
        type: "light"
      }
    }
};

// const themeState = useTheme();

export const setInitialState = () => ({
  type: Types.SET_INITIAL_STATE,
  initialState,
});


export const add_course = ( data) => ({
    type: Types.ADD_COURSE,
    data
});
export const setando_total_element_de_outra_forma = totalElements => ({
  type: Types.SET_TOTAL_ELEMENTS,
  totalElements,
});





export const setTotaElements = totalElements => ({
  type: Types.SET_TOTAL_ELEMENTS,
  totalElements,
});




export const setIsDark2 = appMode => ({
  type: Types.SET_APP_MODE,
  appMode,
});


export const setMaterialTheme = material_theme => ({
  type: Types.SET_MATERIAL_THEME,
  material_theme,
});






export const changeTheme = (search = '') => {
  return async (dispatch) => {
    console.log("redux changeTheme")
    // themeState.toggle()
    console.log("redux changeTheme")
  };
};



export default function reducer(state = initialState, action) {
  switch (action.type) {

      case Types.ADD_COURSE:

          return { ...state, data: [...state.data, action.data] };


      case Types.SET_APP_MODE:
          return { ...state, appMode: action.appMode };

      case Types.SET_TOTAL_ELEMENTS:
          return { ...state, totalElements: action.totalElements };

      case Types.SET_INITIAL_STATE:
          return { ...state, ...action.initialState };
      
  
      case Types.SET_MATERIAL_THEME:
        return { ...state, material_theme: action.material_theme };


          

      default:
          return state;
  }
}




