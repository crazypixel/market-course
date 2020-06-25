import React from 'react';
import styled from 'styled-components';

const Row = ({label, onRemove, id}) => {
	return (
		<Container>
			<div>{label}</div>
			<Remove onClick={() => onRemove(id)}>Remove</Remove>
		</Container>
	);
};

export default Row;

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  font-size: 14px;
  border-bottom: 1px solid #dadada;
  justify-content: space-between;
  transition: all 300ms;
  padding: 0 10px;
  
  &:hover {
  	background: #fafafa;
  }
  
  &:last-child {
  	border: none;
  }
`;

const Remove = styled.div`
  font-size: 12px;
  cursor: pointer;
  color: #a71216;
  transition: all 300ms;
  
  &:hover {
  	color: #58090b;
  }
`;
