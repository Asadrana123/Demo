import React, { useState, useTransition } from 'react';

function Child(props){
    props.name='osmam'
    return(
        <div>
              {props.name}
        </div>
    )
}
export default function Example1() {
 
  return (
    <>
      <Child  name='Asad'/>
    </>
  );
}


