import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { edit, completed, remove } from "./store/todo"

 export default function Buttons (props) {
    const dispatch = useDispatch();

    const edits = () => {
        //prompt to get user edit
        let userChange = prompt("Enter change you want to make");
        // action.payload.id from reducer set here as props.id, to be later input as parameters when component is called
        // content is set as userChange, which takes the place of action.payload.content set in reducer
        let data = {id: props.id, content: userChange};
        //dispatch the state with the data for payload.id and payload.action
        dispatch(edit(data));
    }

    const completes = () => {
        //variable to pass to completed reducer with the action.payload information
        let checked 
        //checking the boolean state of the completed property
        if (props.complete === false) {
            //filling the action.payload.id from reducer with props.id, and marking the completed property as true as we are changing it from false
            checked = {completed: true, id: props.id}
            //passing checked variable with reducer
            dispatch(completed(checked))
            return ("True")
            
        } 
        
        else if (props.complete === true){
            //filling the action.payload.id from reducer with props.id, and marking the completed property as false as we are changing it from true
            checked = {completed: false, id: props.id}
            //passing the checked variable with the reducer 
            dispatch(completed(checked))
            return ("False")
        }

    }

    const removes = () => {
        //passing props.id since the remove reducer just needs the payload to access the specific task by id
        dispatch(remove(props.id))
    }

    return (
        <div>
            {/* the three buttons created to call the functions */}
            <button onClick={() => edits()}>Edit</button>
            <button onClick={() => completes()}>Completed</button>
            <button onClick={() => removes()}>Delete</button>
        </div>
    )


}