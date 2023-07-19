import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice ({
    name: "todo",
    initialState: {
        nextId: 2,
        data:
        {
            1:{
                content: "Clean kitchen",
                completed: false
            },

        }
        
    },

    reducers: {
        
        edit: (state, action) => {
            // creating action payload id to grab specific task ids
            let todoId = action.payload.id
            if(state.data[todoId]) {
                // accessing particular state element
                state.data[todoId] = {
                    //assigning the user input taken from prompt as the new state
                    content : action.payload.content,
                    completed: false
                }
            } else {
            }
        },

        completed: (state, action) => {
            let todoId = action.payload.id
            //taking the id to mark the specific action as either true or false
            state.data[todoId].completed = action.payload.completed
        },

        remove: (state,action) => {
            let todoId = action.payload
            //using the id and deleting the specific data element
            delete state.data[todoId]
        },

        newTodo: (state, action) => {
            //assigning the next id from initialState
            let newId = state.nextId
            //creating new data element 
            state.data[newId] = {
                // taking the input from the input field and setting that as the content
                content : action.payload,
                completed : false,
            }
            //adding 1 on to the nextId for the next added task
            state.nextId++;
        },
    },
});

export const { edit, completed, remove, newTodo } = todoSlice.actions;

 export default todoSlice.reducer;