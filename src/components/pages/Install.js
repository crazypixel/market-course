import React from 'react';
import {Button} from '@datorama/app-components';
import sdk from '@datorama/sdk';

const Install = () => {
	const handleClick = () => {
		sdk.app.install({config: {totals: 10}});
		// sdk.app.installInBackground
	};
	
	return (
		<div>
			<Button onClick={handleClick}>Install App</Button>
		</div>
	);
};

export default Install;
