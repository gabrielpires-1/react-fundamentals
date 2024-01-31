import React from 'react';

import { Container } from './styles';

export default function Header( { onToogleTheme, selectedTheme }) {
  return (
    <Container>
      <h1>JStack's Blog</h1>
      <button type="button" onClick={onToogleTheme}>
        { selectedTheme ===  'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}
