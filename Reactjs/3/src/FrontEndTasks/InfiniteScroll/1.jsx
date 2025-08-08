import React, { useCallback, useState, useEffect } from "react"
import axios from "axios"
import Header from "./Header"
import ListItem from "./ListItem"
import { useApiPagination } from "./hooks/hooks"
import './1.css'
import Loader from "./Loader"
const LIMIT = 10;
export default function Example1() {
  const {items,error,loading,hasMore}=useApiPagination({limit:LIMIT})
  return (
    <div className="main-container">
      <Header />
      <div className="items-container">
        {items.map((item) => {
          return <ListItem key={item.id} item={item} />
        })}
      </div>
      {error &&
        <div className="error-container">
          Some Error Occured Please Try Again
        </div>
      }
      {loading &&
        <div className="loader-container">
          <Loader />
        </div>
      }
      {
        !hasMore &&
        <div className="no-items-container">No items to Load Know</div>
      }
    </div>
  )
}
