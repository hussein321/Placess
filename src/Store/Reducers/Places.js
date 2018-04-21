import {
  ADD_PLACE,
  DELETE_PLACE,
} from "../Actions/ActionTypes";

const initialStatus = {
  places: [],
  selectedPlace: null
};

const Reducer = (state = initialStatus, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    // case SELECTED_PLACE:
    //   return {
    //       ...state,
    //     selectedPlace: state.places.find(place => {
    //         return place.key === action.key;
    //       })
    //   };

    //   case UN_SELECTED_PLACE:

    //   return {
    //      ...state,
    //      selectedPlace: null
    //   };

    default:
      return state;
  }
};

export default Reducer;
