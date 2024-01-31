import React from 'react';

import { Container } from './styles';

export default function Footer({ onToogleTheme, selectedTheme }) {
  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button 
        type="button"
        onClick={onToogleTheme}
      >
        { selectedTheme ===  'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
