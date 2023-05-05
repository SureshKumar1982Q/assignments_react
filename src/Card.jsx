import React, { useEffect, useState } from 'react';


function Card(props) {
    const [data1,setData] = useState([])
     useEffect(()=>{
        console.log ('data1',props.movies)
        if(props.movies !== undefined && props.movies.length >= 1){
            setData(props.movies)
         }
     },[])
    
  return (
             <div style={{backgroundColor:'black',color:'white',width:'200px',height:'300px'}}>
              {data1.map(data=>{
                return(<div key={data.data.id}>
                         Name: {data.data.name}<br/>
                         rating: {data.data.rating}<br/>
                        releaseDate: {data.data.releaseDate}
                </div>)
              })}
             </div>    
  );
}
export default Card
