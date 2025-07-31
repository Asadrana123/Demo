import React, { useState, useCallback, useEffect } from "react";
 const arr=[];
  for(let i=0;i<100;i++){
     arr.push({id:i,type:`item ${i}`});
  }
const Child=React.memo(({item,onClick,isSelected})=>{
      console.log('render')
      return (
        <div  style={{color:isSelected?'red':''}} onClick={()=>onClick(item.id)}>
            Item:{item.type}
        </div>
      )
})

export default function Example3() {
  const [select,setSelect]=useState(null)
  const handleClick=useCallback((id)=>{
       setSelect(id);
  },[])
  return (
    <div>
     {arr.map((item)=>{
          return  <Child 
           isSelected={select===item.id?true:false}
           key={item.id} item={item} onClick={handleClick} />
     })}
    </div>
  );
}
