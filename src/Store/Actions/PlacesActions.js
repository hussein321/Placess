import {ADD_PLACE,  DELETE_PLACE} from './ActionTypes';

// export const ADD_PLACE = "ADD_PLACE";
// export const DELETE_PLACE = "DELETE_PLACE";
// export const SLECTED_PLACE = "SLECTED_PLACE";
// export const UN_SELECTED_PLACE = "UN_SELECTED_PLACE";

export const addPlace = (placeName) => {
     return {
       
          type: ADD_PLACE,
          placeName: placeName
     }
};

export const deletePlace = () => {
    return {
      
         type: DELETE_PLACE,
     
    }
};
// export const selectPlace = (key) => {
//     return {
      
//          type: SELECTED_PLACE,
//          key: key
//     }
// };

// export const deSelectPlace = () => {
//     return {
//          type: UN_SELECTED_PLACE,
//     }
//}