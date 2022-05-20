import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Character from './Character';

function Characters() {
    const [page , setPage]= useState([10])
    const fetchCharacters = async ({queryKey}) =>{
        const responce= await fetch("https://rickandmortyapi.com/api/character?pages=${queryKey[1]}")
        return responce.json();
        
    }
    const {data, status,refetch}= useQuery(["characters",page],fetchCharacters)
    console.log(data)
     if(status==="loading"){
         return <div> Loading...</div>
     }
     if(status==="error"){
         return <h2>error</h2>
     }
  return (
    <div>
        <h2 className="Heading">Fetchin Data React Queries </h2>
        {data.results.map((character)=>(
            <div>
                <Character character={character}/> 
            </div>
            ))}
            <div className='container-Btn'>
                <button className='red-Btn' onClick={()=>setPage((old)=> Math.max(old-1,1))} disabled={page===1}>privies</button>
                <button onClick={refetch}>render</button>
                <button className='green-Btn' color='green'  onClick={()=>setPage((old)=> Math.max(old+1))} disabled={!data.info.next}>next</button>
            </div>
    </div>
  )
}

export default Characters