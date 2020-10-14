import React from 'react';
import ReactLoading from 'react-loading';

export default function LoadingComponent() {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<ReactLoading type='bubbles' color={'#FFF'} />
		</div>
	);
}
