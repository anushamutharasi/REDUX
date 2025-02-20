import React, { useState } from 'react'
import { addtodo, deletetodo, edittodo } from "../Reducers/TodoSlice";
import { useDispatch, useSelector } from 'react-redux'

const TodoApp = () => {

    const {todo}=useSelector(state=>state.todo)
    const dispatch=useDispatch()

    const [todoname,setTodoname]=useState("")
     const [description, setDescription] = useState("");
     const[id,setId]=useState("")
    
     const SubmitHandler=(e)=>{
            e.preventDefault();
        if(id){
             const EditTodo = {
               id: id,
               TodoName: todoname,
               Description: description,
             };
             console.log(EditTodo);
             dispatch(edittodo(EditTodo));
             setTodoname("");
             setDescription("");
             setId("")

        }
    else{
         const newTodo = {
           id: todo.length + 1,
           TodoName: todoname,
           Description: description,
         };
         console.log(newTodo);
         dispatch(addtodo(newTodo));
         setTodoname("");
         setDescription("");

    }
       

        
     }
     const EditHandler=(id,todo)=>{
        console.log(id,todo.todoname);
        setId(id)
        setTodoname(todo.TodoName);
        setDescription(todo.Description)



        
     }
      const DeleteHnadler = (id) => {
        console.log(id);
        dispatch(deletetodo(id))
      };
  return (
    <>
      <div>TodoApp</div>
      <form>
        TODONAME:
        <input
          type="text"
          value={todoname}
          onChange={(e) => setTodoname(e.target.value)}
          //   disabled={editId}
        />
        <br />
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button type="Submit" onClick={(id)=>SubmitHandler(id)}>
       {id?"UPDATE":"SUBMIT"}
        </button>
      </form>

      {todo?.length !== 0 ? (
        <>
          <>
            <table
              style={{
                border: "2px solid",
                marginLeft: "40%",
                marginTop: "3%",
              }}
            >
              <tr>
                <th>PRODUCT_ID</th>
                <th>PRODUCT_NAME</th>
                <th>PRODUCT_BODY</th>
                <th>ACTIONS</th>
              </tr>
              {todo?.map((todo, index) => (
                <tr>
                  <td key={index}>{todo.id}</td>
                  <td>{todo.TodoName}</td>
                  <td>{todo.Description}</td>
                  <td>
                    <button type="button" onClick={()=>EditHandler(todo.id,todo)}>Edit</button>
                  </td>
                  <td>
                    <button type="button" onClick={()=>DeleteHnadler(todo.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </table>
          </>
        </>
      ) : (
        "There is no data"
      )}
    </>
  );
}

export default TodoApp