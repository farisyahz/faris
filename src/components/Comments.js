import React, {useEffect} from 'react'
import { appendComments } from '../helper'


const Comments = () => {
  useEffect(()=>{
    appendComments();
  },[]);

  return (
    <div id="append-comments-here" />
  )
}

export default Comments;