import React,{useState}from 'react'
import './App.css'
import { FcExpand, FcCollapse } from "react-icons/fc";
const Data =({title,boby})=>{
    const [show,setShow]=useState(false)
    const handleclick=()=>{
        setShow(!show)
    };

    return (
      <div className={show ? "accordion-opened accordion-item" : "accordion-item"} onClick={handleclick}>
        <div className="accordion-title">
          <h2>{title}</h2>
          <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
        </div>

        {show && <p>{boby}</p>}
      </div>
    );
}

export default Data;

