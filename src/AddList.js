import React, { useState } from "react";

function AddList() {
    // ()=> { List.push([settext]) ;()=>{localStorage.setItem('List',JSON.stringify(List))}}
    const [text, settext] = useState("")
    let List = localStorage.getItem("List");
    if (List == null) {
        List = []
        localStorage.setItem('List', JSON.stringify(List))
    }
    else {
        List = JSON.parse(List)
    }
    let func1 = () => {
        let Array = []
        Array.push(text)
        List.push(Array)
        localStorage.setItem("List", JSON.stringify(List))
        document.getElementById("addText").value = ""
    }
    
    return (
        <>
            <div className="container">
                <h2 className="my-4">Adding Item To List</h2>
                <div className="container my-4 d-flex justify-content-center">
                    <input onChange={(e) => { settext(e.target.value) }} id="addText" className="w-75" type="text" />
                    <button onClick={() => func1()}
                        className="btn btn-primary mx-3">Add Item</button>
                </div>
            </div>

        </>
    );
}
export default AddList;