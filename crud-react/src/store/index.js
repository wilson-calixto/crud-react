import { createStore } from "redux";

import reducers from "./ducks";

const store = createStore(reducers);

export default store;

// import { createStore } from 'redux';

// const INITIAL_STATE = {
//   data: [
//     'React Native'
//   ],
// };

// function courses(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'ADD_COURSE':
//         console.log("SSSSSSSS")
//       return { ...state, data: [...state.data, action.title] };
//     default:
//       return state;
//   }
// }

// const store = createStore(courses);

// export default store;

