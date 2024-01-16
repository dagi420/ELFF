const redux = require('redux');
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'inc') {
        return {
            counter: state.counter + 1,
        };
    }
    return state

}
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    console.log(store.getState())
}

store.subscribe(counterSubscriber);
store.dispatch({ type: 'inc' });
