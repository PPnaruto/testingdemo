import React, {  useRef, useState } from 'react'

const Action = ({data}) => {

    const [query,setQuery] = useState("");
    const timeref = useRef();

    const debounce = (cb,delay=1000)=>{
        return (...args)=>{
            clearTimeout(timeref.current);
            timeref.current = setTimeout(()=>{
                cb(...args);
            },delay);
        }
    }
    console.log(query);
    let handleChange=(e)=>{
        // console.log("data");
        debounce(()=>{
            setQuery(e.target.value);
        },1000)();
        // setState(e.target.value);
    }
    let filteredData =
    query.length > 0 ? data.filter((e) => e.includes(query)) : [];
    console.log(filteredData);
  return (
    <div style={{marginTop:"50px"}}>
        <input type="text" placeholder='Enter name' onChange={handleChange}/>
        <div style={{display:"flex",flexDirection:"column"}}>
            
            {
                filteredData.map((ele)=>{
                    return <span>{ele}</span>
                })
            }
        </div>
    </div>
  )
}

export default Action;