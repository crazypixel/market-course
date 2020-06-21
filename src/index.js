import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const items = ['Milk', 'Eggs', 'Bread'];
const App = () => (
	<div>
		<h1>My List</h1>
		<List>
			{items.map(item => <Item key={item} label={item}/>)}
		</List>
	</div>
);

const List = ({children}) => <ul>{children}</ul>;

const Item = ({label}) => <li style={{color: 'red'}}>{label}</li>;

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
