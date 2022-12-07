import ECommerce from './views/ecommerce'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './store/reducer'

// Create the redux store for persistent storing of the data.
// Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. 
// That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside 
// the function's body once the asynchronous operations have been completed.
// Here, reducer is the pure function that accepts 2 parameters: the current state and an action object. 
// Depending on the action object, the reducer decides what it should do and reflects the new data to the current state
const store = createStore(reducer, applyMiddleware(thunk))

export function App () {
  return (
    <div className="App">
      <Provider store={store}>{/* Define the store provider in root of the chain so that all the components defined inside could be available to access the persistent store */}
        <ECommerce></ECommerce>
      </Provider>
    </div>
  )
}
