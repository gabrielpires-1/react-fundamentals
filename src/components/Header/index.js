import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';


export default function Header() {
  const history = useHistory();

  function handleNavigate() {
    history.push('/posts');
  }

  return (
    <ThemeContext.Consumer>
      {(context) => (
        <Container>
        <h1>JStack's Blog</h1>
        <button
          type="button" 
          onClick={context.handleToggleTheme}
        > 
          { context.theme ===  'dark' ? '🌞' : '🌚'}
        </button>
        <button
          onClick={handleNavigate}
          style={{ color: '#FFF'}}
        >
          Navegar
        </button>
      </Container>
      )}
    </ThemeContext.Consumer>
  );
}

// export default function Header( { onToogleTheme, selectedTheme }) {
//   return (
//     <Container>
//       <h1>JStack's Blog</h1>
//       <button type="button" onClick={onToogleTheme}>
//         { selectedTheme ===  'dark' ? '🌞' : '🌚'}
//       </button>
//     </Container>
//   );
// }
