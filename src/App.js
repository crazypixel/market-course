import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Provider} from 'react-redux';
import store from './redux/store';

// components
import List from './components/List';

const theme = {
	primary: 'red'
};

const App = () => (
	<ThemeProvider theme={theme}>
		<Provider store={store}>
			<Container>
				<List/>
			</Container>
		</Provider>
	</ThemeProvider>
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
