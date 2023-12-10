import React from 'react';

const Comment = (props) => {
    console.log(props.comment,'kjs');
    const {postId, body,name,email,id} = props.comment
    return (
        <div style={commentStyle} >
           <h2>Comment ID : {postId}</h2>
           <h2>Id : {id}</h2>
           <h2>Name : {name}</h2>
           <p>Email: {email}</p>
           <p>Body {body}</p>
        </div>
    );
};


const commentStyle = {
    backgroundColor: 'gray',
    border: '2px solid brown',
    margin : '20px',
    padding: '20px',
    borderRadius: '20px'
}
export default Comment;