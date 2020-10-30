import _ from 'lodash'
import { FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, CREATE_STREAM, DELETE_STREAM, UPDATE_STREAM } from '../actions/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type){
    case FETCH_STREAM: 
      return {...state, [action.payload.id]: action.payload};
    case CREATE_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case EDIT_STREAM:
      return {...state, [action.payload.id]: action.payload};
    case DELETE_STREAM:
      return _.omit(state, action.payload); //Using lodash library(_omit is to delete)
    default: return state;
  }
}