import React, {useState, useEffect} from 'react';

const Api = () =>{

const url = 'https://rickandmortyapi.com/api/character';  
const [todos, setTodos] = useState()
const fetchApi= async () => {
    const response = await fetch(url)
    console.log(response.status);
    const responseJSON = await response.json()
    setTodos(responseJSON)

}

useEffect(()=>{
    fetchApi()
}, [])




}


export default Api;