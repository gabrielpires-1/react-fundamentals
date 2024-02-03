import React, { useMemo } from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function Post() {
  const params = useParams();
  const { search } = useLocation();

  // só cria nova instancia caso o search mude
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);

  console.log(queryParams.get('myQueryParam'));

  return (<h1>Post page</h1>);
}
