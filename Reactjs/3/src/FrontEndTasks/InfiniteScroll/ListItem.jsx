import React from 'react'
import './ListItem.css'
export default function ListItem({item}) {
 
  return (
    <div className='list-item-container'>
        <h3>
            {item.title}
        </h3>
    </div>
  )
}
