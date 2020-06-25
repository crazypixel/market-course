import React from 'react';
import styled from 'styled-components';

const EmptyState = () => (<Container>No Items!</Container>);

export default EmptyState;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;
