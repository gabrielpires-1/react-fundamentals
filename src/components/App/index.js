import React, { useState } from 'react';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import styles from './App.scss';
import { Title } from './styles';



// Props -> Propriedades
function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Título 01', subtitle: 'Subtítulo 01', likes: 10, read: false },
    { id: Math.random(), title: 'Título 02', subtitle: 'Subtítulo 02', likes: 20, read: true },
    { id: Math.random(), title: 'Título 03', subtitle: 'Subtítulo 03', likes: 30, read: false },
    { id: Math.random(), title: 'Título 04', subtitle: 'Subtítulo 04', likes: 40, read: false },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título ${prevState.length + 1}`,
        subtitle: `Subtítulo ${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
      }
    ]); 
  }

  function handleRemovePost(postId){
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId ? { ...post, removed: true} : post
        )
    ));
  }

  return (
    <ThemeProvider> 
      <Header>
        <Title as="h2">Posts da semana</Title>
        <button onClick={handleRefresh}>Novo post</button>
      </Header>

      <hr/>

      { posts.map(post => (
        <Post
          key={post.title}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={post}
        />
      )) }
    </ThemeProvider>
  );
}

export default App;
