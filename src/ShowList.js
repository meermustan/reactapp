import React from 'react'
import { ListGroup,ListGroupItem } from 'react-bootstrap'
import { useEffect,useState } from 'react';

function ShowList() {
    
    let List = localStorage.getItem("List");
    const [list, setList] = useState(List)
    let listArr = JSON.parse(list)
    
    if (List == null) {
        List = []
        localStorage.setItem('List', JSON.stringify(List))
    }
    else {
        List = JSON.parse(List)
    }

    useEffect(() => {
        console.log("I am updated")
    })
    
    return (
        <div className="container my-4">
            <h2>Now I am showing List.</h2>
            <ListGroup id="showList">
                    {
                        listArr.map(element => <ListGroup.Item>{element[0]}</ListGroup.Item>)
                    }
            </ListGroup>      
        </div>
    );
}

export default ShowList;
