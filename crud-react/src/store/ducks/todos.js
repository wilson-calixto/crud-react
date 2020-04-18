const Types = {
  SET_MODE: 'uqms/MODE',
  SET_MENU: 'uqms/MENU',
  SET_SUBMENU: 'uqms/SUBMENU',
  SET_ROWS: 'register/ROWS',
  SET_PAGE_NUMBER: 'register/PAGE_NUMBER',
  SET_PAGE_SIZE: 'register/PAGE_SIZE',
  SET_TOTAL_ELEMENTS: 'register/TOTAL_ELEMENTS',
  SET_ERROR: 'register/ERROR',
  SET_LOADING: 'register/LOADING',
  SET_LOADING_ROWS: 'register/LOADING_ROWS',
  SET_VIEW_INFO: 'register/VIEW_INFO',
  SET_UPDATE_INFO: 'register/UPDATE_INFO',
  SET_DELETE_INFO: 'register/DELETE_INFO',
  SET_INITIAL_STATE: 'register/INITIAL_STATE',
  ADD_COURSE:"ADD_COURSE"
};


const initialState = {
    rows: [],
    pageNumber: 0,
    pageSize: 10,
    totalElements: 0,
    error: null,
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
};



export const setInitialState = () => ({
  type: Types.SET_INITIAL_STATE,
  initialState,
});


export const add_course = ( data) => ({
    type: Types.ADD_COURSE,
    data
});

export const setTotaElements = totalElements => ({
  type: Types.SET_TOTAL_ELEMENTS,
  totalElements,
});


export const setando_total_element_de_outra_forma = totalElements => ({
  type: Types.SET_TOTAL_ELEMENTS,
  totalElements,
});


export default function reducer(state = initialState, action) {
  switch (action.type) {

      case Types.ADD_COURSE:

          return { ...state, data: [...state.data, action.data] };

      case Types.SET_TOTAL_ELEMENTS:
          return { ...state, totalElements: action.totalElements };

      case Types.SET_INITIAL_STATE:
          return { ...state, ...action.initialState };

      default:
          return state;
  }
}






// export default function reducer(state = initialState, action) {
//     switch (action.type) {
//         case Types.SET_ROWS:
//             return { ...state, rows: action.rows };

//         case Types.SET_PAGE_NUMBER:
//             return { ...state, pageNumber: action.pageNumber };

//         case Types.SET_PAGE_SIZE:
//             return { ...state, pageSize: action.pageSize };

//         case Types.SET_TOTAL_ELEMENTS:
//             return { ...state, totalElements: action.totalElements };

//         case Types.SET_ERROR:
//             return { ...state, error: action.error };

//         case Types.SET_LOADING:
//             return { ...state, loading: action.loading };

//         case Types.SET_LOADING_ROWS:
//             return { ...state, loadingRows: action.loadingRows };

//         case Types.SET_VIEW_INFO:
//             return { ...state, viewInfo: action.viewInfo };

//         case Types.SET_UPDATE_INFO:
//             return { ...state, updateInfo: action.updateInfo };

//         case Types.SET_DELETE_INFO:
//             return { ...state, deleteInfo: action.deleteInfo };

//         case Types.SET_INITIAL_STATE:
//             return { ...state, ...action.initialState };

//         default:
//             return state;
//     }
// }





// export default function reducer(state = INITIAL_STATE, action) {
//     switch (action.type) {
//       case 'ADD_COURSE':
//         return { ...state, data: [...state.data, action.title] };
//       default:
//         return state;
//     }
//   }
