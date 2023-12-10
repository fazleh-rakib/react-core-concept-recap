import React, { useEffect, useState } from 'react';
import Comment from '../Comment/Comment';

const Comments = () => {
    const [comments , setComments] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res=> res.json())
        .then(data => setComments(data))
    },[])
    return (
        <div>
            <h2>Comments :{comments.length}</h2>
            {
                comments.map(comment => <Comment  comment={comment}
                key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;