import React from 'react';
import styled from 'styled-components';
import {Provider} from 'react-redux';
import store from './redux/store';

// components
import List from './components/List';

const App = () => (
	<Provider store={store}>
		<Container>
			<List/>
		</Container>
	</Provider>
);

export default App;

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;
