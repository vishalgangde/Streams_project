import _ from 'lodash';
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types';

//fetch data from API and using key interpolation sends it to new state
export default ( state = {},action) => {
    switch(action.type){
        //mapKeys() is used for fecth list of record using 'id'
        case FETCH_STREAMS:
        return{...state, ..._.mapKeys(action.payload ,'id') };

        //fetch a single record and update our state 
        case FETCH_STREAM:
        return{ ...state, [action.payload.id] : action.payload };

        //fetch a record and create state
        case CREATE_STREAM:
        return {...state, [action.payload.id] : action.payload };

        //edit in the fetch data 
        case EDIT_STREAM :
        return {...state, [action.payload.id] : action.payload };

        //delete any stream than omit () automatically create new state 
        case DELETE_STREAM:
        return _.omit(state,action.payload);

        default:
        return state;
    }
}