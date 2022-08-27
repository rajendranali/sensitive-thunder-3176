import * as types from './actionTypes';



const initState={
    task:[],
    tags:[],
    isLoading:false,
    isError:false
}

const reducer= (oldState= initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_TAGS_REQUEST:
            return {
                ...oldState,
                isLoading:true,
                isError:false,
            }
        case types.GET_TAGS_SUCCESS:
            return {
                ...oldState,
                tags:payload,
                isLoading:false,
                isError:false,
            }
        case types.GET_TAGS_FAILURE:
            return {
                ...oldState,
                isLoading:false,
                isError:true,
            }
        default:return oldState;

        }
    }
export {reducer}