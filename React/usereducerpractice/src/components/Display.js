import React, { useReducer } from 'react';
 
const initialState = {
    firstName: {
        value: '',
        error: "Hermine"
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};
 
function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
        
    };
}
 
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const {name, value, error} = e.target;
        dispatch({
            type: name,
            payload: value
        }
);
    }
 
    return (
        <div>
this is a string
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName}
                        error = {state.error}
                        onChange={handleChange}
                    />
                   
    
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email}
                        error = {state.error}
                        onChange={handleChange}
                    />
                </label>
            </div>
             
        </div>
    );
}