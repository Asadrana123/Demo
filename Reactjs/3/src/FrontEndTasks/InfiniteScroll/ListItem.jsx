import React from 'react'
import './ListItem.css'
const ListItem = React.memo(function ListItem({ item }) {
  if (item.id === 1) console.log(item);
  return (
    <div className='list-item-container'>
      <h3 style={{ color: item.id === 1 ? 'red' : '' }}>
        {item.title}
      </h3>
    </div>
  )
})

export default ListItem;
