import { configureStore } from '@reduxjs/toolkit' // import store api 
import { reducer } from '../utils/reducers'; // my reducer to change state 


// creating an empty redux store and exporting it .

// export default configureStore({
//     reducer: {}
// })

const store = configureStore({ reducer });



export default configureStore;