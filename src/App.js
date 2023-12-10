
import './App.css';
import { useEffect, useState } from 'react';
import Comments from './components/Comments/Comments';

function App() {
  return (
    <div className="App">
      <Comments />
      <LoadPosts />
    <District name='Singapore' special ='girls'/>
    <District name='Puran Dhaka' special ='katchi'/>
    <District name='Uttara' special ='Momo'/>

    </div>
  );
}

function LoadPosts (){
  const [posts , setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h2>All Posts{posts.length}</h2>
      {
        posts.map(post => <Post post ={post}
          key ={post.id} />)
      }
      {
        // posts.map(post => console.log(post))
      }
    </div>
  )
}

function Post (props){
  
  const {title ,body,userId} = props.post
  return(
    <div style={districtStyle}>
      <h1>User Id: {userId}</h1>
      <h2>Post Title : {title}</h2>
      <p>Body : {body}</p>
    </div>
  )
}

const districtStyle ={
  backgroundColor: 'khaki',
  border: '2px solid brown',
  margin : '20px',
  padding: '20px',
  borderRadius: '20px'
}


function District (props){
  const [power , setPower] = useState(1);
  const boostPower = () =>{
    const newPower = power * 2
    setPower(newPower)
  }
  return(
    <div style={districtStyle}>
      <h3>State Name:{props.name}</h3>
      <p>Found: {props.special}</p>
      <h3>Power:{power}</h3>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
