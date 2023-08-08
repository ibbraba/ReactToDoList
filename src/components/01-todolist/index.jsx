import React, { useEffect, useState } from 'react'

const TodoList = () => {

    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState({})
    const [newItemName, setNewItemName] = useState("")


    useEffect(() => {
        setNewItem({ "id": items.length + 1, "name": newItemName, "isDone": false })

    }, [newItemName])



    const addItem = () => {

        if (newItemName.trim() !== "") {
            setItems(items => [...items, newItem])
            setNewItemName("")

        }

        console.log(items);


    }




    const DeleteItem = (index) => {
        const updatedItem = items.filter((_, i) => i !== index)
        setItems(updatedItem)
    }

    const UpdateItem = (item) => {

        let newItems = [...items]

      

       if(item.isDone === true){
          newItems[newItems.indexOf(item)].isDone = false 
       }else{
         newItems[newItems.indexOf(item)].isDone = true 
       }

       setItems( items => newItems)

       console.log(items);

    }


    return (
        <div>
            <h1>Todo List</h1>

            <div id='list'>
                {items.map(item => <div>
                    <p><a style={ {textDecoration: item.isDone ? "line-through" : "none", color: "white" }} href="/" onClick={(event) => {
                    event.preventDefault()
                    UpdateItem(item)    


                    }}> {item.name}  </a>  </p>

                    

                    <button onClick={() => DeleteItem(items.indexOf(item))} >Supprimer</button>
                </div>
                )}

            </div>



            <form>

                <input type="text" id='itemInput' placeholder='item' onChange={(event) => setNewItemName(event.target.value)} />
                <button type='submit' onClick={(e) => {
                    e.preventDefault()
                    addItem()
                }}>Valider</button>


            </form>



        </div>
    )
}

export default TodoList