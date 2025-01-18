# Redux Toolkit

### Folder Structure

```plaintext
├── src/
│   └── redux/                           **// Contains all Redux-related files**
│       ├── api/                         **// Manages API services**
│       │   └── baseApi.ts               **// Base API configuration using RTK Query**
│       ├── features/                    **// Contains feature-specific slices and APIs**
│       │   └── example/                 
│       │       ├── exampleSlice.ts      **// State logic and actions for "example"**
│       │       └── exampleApi.ts        **// API endpoints related to "example"**
│       ├── store.ts                     **// Configures the Redux store**
│       └── hook.ts                      **// Custom hooks like useAppSelector/useAppDispatch**
└── ...
```

## How Redux Works:

### Redux Terminology

- **Action**:  
  An action is a plain JavaScript object that describes what happened in the application. It contains a `type` property (a string constant) and, optionally, a `payload` property with additional data.  
  Example:  
  ```javascript
  { type: 'ADD_ITEM', payload: { item: 'Apple' } }
  ```

- **Dispatch**:  
  Dispatching is the process of sending an action to the Redux store. This triggers the corresponding reducer to update the state.  
  Example:  
  ```javascript
  dispatch({ type: 'ADD_ITEM', payload: { item: 'Apple' } });
  ```

- **Payload**:  
  The data sent along with the action from a component to the reducer. This is used by the reducer to update the state.

- **Reducer**:  
  A pure function that takes the current state and an action as inputs and returns a new state. Reducers define how the state changes in response to actions.  
  Example:  
  ```javascript
  function cartReducer(state = [], action) {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload.item];
      default:
        return state;
    }
  }
  ```

- **Store**:  
  The centralized location where the application's state is stored. The store handles:
  1. Dispatching actions.
  2. Maintaining the state.
  3. Notifying subscribers when the state changes.

- **Slice**  
  A slice is a small, feature-specific part of the Redux state. Each slice manages its own state, actions, and reducers.  
  Examples:  
  - A `userSlice` manages user-related state (name, email, etc.).  
  - A `cartSlice` manages shopping cart state (items, total price, etc.).

---

### Redux Flow

1. **Action is Taken**:  
   - A user interaction or event triggers an action.  
     Example: Clicking a button to add an item to a cart generates this action:  
     ```javascript
     { type: 'ADD_ITEM', payload: { item: 'Apple' } }
     ```

2. **Dispatching the Action**:  
   - The action is sent to the Redux store using the `dispatch` method.  
     Example:  
     ```javascript
     dispatch({ type: 'ADD_ITEM', payload: { item: 'Apple' } });
     ```

3. **Reducer Processes the Action**:  
   - The store forwards the action to the appropriate reducer.  
   - The reducer processes the action, updates the state, and returns the new state.  
     Example:  
     ```javascript
     function cartReducer(state = [], action) {
       switch (action.type) {
         case 'ADD_ITEM':
           return [...state, action.payload.item];
         default:
           return state;
       }
     }
     ```

4. **Updating the State**:  
   - The store replaces the old state with the new state returned by the reducer.

5. **Notifying Subscribers**:  
   - Components subscribed to the store are notified about the state changes.

6. **UI Updates**:  
   - Subscribed components re-render or update their content to reflect the new state.  
     For example, a shopping cart component updates to display the new item.


### Summary of Redux Flow

1. User triggers an **action**.  
2. Action is **dispatched** to the store.  
3. The **reducer** processes the action and updates the state.  
4. The **store** updates its state and notifies subscribers.  
5. The **UI** re-renders to reflect the updated state.












