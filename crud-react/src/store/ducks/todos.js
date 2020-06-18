import { dark } from "@material-ui/core/styles/createPalette";
// import Types from '../Types';
import { api } from '../../Api';
import httpStatus from '../../Config/httpStatus';
import { toast } from 'react-toastify';
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
  ADD_ROW: "ADD_ROW",
  SET_SELECTED_PRODUCT:"SET_SELECTED_PRODUCT",
  SET_LAST_RATING:"SET_LAST_RATING",
  SET_MAIN_IMAGENS:"SET_MAIN_IMAGENS",
  SET_ADTIONAL_IMAGES:'SET_ADTIONAL_IMAGES'

};


const initialState = {
  rows: [
  {}
  ],
    SelectedProduct:{information:{},details:{Sizes:[]},imagens:[]}, //,main_imagens:[]
    main_imagens:[],
    adtional_images:[],
    last_ratings:[{ _id:'', category:'', date:'', email:'',  fk_product:'', fk_product_details:'',imagens:[],rate:'',text:'',user:'' }],
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
    },
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],

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

export const add_row = ( rows) => ({
  type: Types.ADD_ROW,
  rows
});

export const findAll = async route => {
  const { data } = await api.get(`${route}`);
  const itens = [];
  data.map(value => {
      const { id, name } = value;
      itens.push({ id, name });
  });
  return itens;
};


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


export const addRow = (newData) => {
  return async dispatch => {
      const data='success'
      try {
          dispatch(save(newData));
          return { data, success: true };
      } catch (error) {
          return { data, success: false };
      }
  };
};

function save(newData) {
  console.log('newData',newData)
}



export const create = (route, body, nome_do_registro = 'Registro') => {
  return async dispatch => {
      try {
        console.log("dentro do create body", body)
          const { data } = await api.post(route, body);
          // dispatch(setLoading(false));

          toast.info(`${nome_do_registro} criado com sucesso`);

          console.log("dentro do create data",data)

          return { data, success: true };
      } catch (error) {

        let data = false
        let status = httpStatus.INTERNAL_SERVER_ERROR;
        
        // if(error.response){
        //   data, status  = error.response;
        // }
          

          // dispatch(setLoading(false));

          if (
              status === httpStatus.INTERNAL_SERVER_ERROR ||
              status === httpStatus.NOT_FOUND
          ) {
              toast.error('Erro interno na criação');
          }

          return { data, success: false };
      }
  };
};



export const findProducts = (route,store_id='') => {
  return async (dispatch) => {
    const searchData = store_id ? `store_id=${store_id}` : '';
    const { data } = await api.get(
        `${route}?${searchData}`
      );
      dispatch(setRows(data));
  };
};

export const findRatingByProductId = (route, id = '') => {
  return async (dispatch) => {
      const { data } = await api.get(
          `${route}`
      );
      console.log('findRatingByProductId',data)
      dispatch(setLast_ratings(data));
  };
};
export const setLast_ratings = last_ratings => ({
  type: Types.SET_LAST_RATING,
  last_ratings,
});

export const findProductById = (route, id = '') => {
  return async (dispatch) => {
      const { data } = await api.get(
          `${route}/${id}`
      );
      console.log('datadata',data)
      console.log('datadata',data)
      console.log('datadata',data)

      dispatch(setSelectedProduct(data));

      dispatch(findProductMainImagesById(route+'/main_images',id));
      dispatch(findProductAdtionalImagesById(route+'/adtional_images',id));
      
  };
};

export const setSelectedProduct = SelectedProduct => ({
  type: Types.SET_SELECTED_PRODUCT,
  SelectedProduct,
});

export const findProductMainImagesById = (route, id = '') => {
  return async (dispatch) => {
      const { data } = await api.get(
          `${route}/${id}`
      );
      dispatch(setSelectedImages(data));
  };
};

export const findProductAdtionalImagesById = (route, id = '') => {
  return async (dispatch) => {
      const { data } = await api.get(
          `${route}/${id}`
      );
      dispatch(setAdtionalImages(data));
  };
};



export const setSelectedImages = main_imagens => ({
  type: Types.SET_MAIN_IMAGENS,
  main_imagens,
});

export const setAdtionalImages = adtional_images => ({
  type: Types.SET_ADTIONAL_IMAGES,
  adtional_images,
});




export const find = (route, search = '') => {
  return async (dispatch, getState) => {
      const searchData = search ? `search=${search}&` : '';
      const { data } = await api.get(
          `${route}`
          //   /?${searchData}page=${
          //   getState().register.pageNumber
          //   }&size=${getState().register.pageSize}
      );
      const { content, pageable } = data;
      // dispatch(setLoadingRows(false));
      console.log('novas rows : ',data)
      dispatch(setRows(data));
      // dispatch(setPageSize(pageable.pageSize));
      // dispatch(setTotaElements(data.totalElements));
  };
};


export const update = (route, id, body, nome_do_registro = 'Registro') => {
  return async dispatch => {
      try {
          const { data } = await api.put(`${route}/${id}`, body);
          return { data, success: true };
      } catch (error) {
          const { data, status } = error.response;
          return { data, success: false };
      }
  };
};


export const remove = (route, id, nome_do_registro = 'Registro', innerData = null) => {
  return async dispatch => {
      try {
          const { data } = await api.delete(`${route}/${id}`);
          toast.info(`${nome_do_registro} removido com sucesso`);
          return { data, success: true };
      } catch (error) {
          const { data, status } = error.response;
          return { data, success: false };
      }
  };
};



export const setRows = rows => ({
  type: Types.SET_ROWS,
  rows,
});



export default function reducer(state = initialState, action) {
  switch (action.type) {

      case Types.ADD_COURSE:
          return { ...state, data: [...state.data, action.data] };
      
      case Types.ADD_ROW:
          return { ...state, rows: [...state.rows, action.rows] };
    
      case Types.SET_ROWS:
          return { ...state, rows: action.rows };   
      
      case Types.SET_SELECTED_PRODUCT:
          return { ...state, SelectedProduct: action.SelectedProduct };      
      
      case Types.SET_MAIN_IMAGENS:
          return { ...state, main_imagens: action.main_imagens };      
        
      case Types.SET_ADTIONAL_IMAGES:
        return { ...state, adtional_images: action.adtional_images };      

      
      case Types.SET_LAST_RATING:
          return { ...state, last_ratings: action.last_ratings };                                         
          
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




