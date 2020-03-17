import {createStore} from 'redux';
import { act } from 'react-dom/test-utils';

const store = createStore((state = {count:0}, action) =>{
    switch (action.type){
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy :  1;
        return{
            count: state.count + incrementBy
        }   
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy:1;
            return{
                count: state.count-1
            }
            default: 
        return state;         
    }
});

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
})

store.dispatch({
    type: 'DECREMENT',

})