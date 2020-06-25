import React from 'react';
import styled from 'styled-components';

// components
import List from './components/List';

const App = () => {
	return (
		<Container>
			<List/>
		</Container>
	);
};

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;
