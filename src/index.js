import React from 'react';
import ReactDOM from 'react-dom';
import './base.sass';
import { HashRouter } from 'react-router-dom';
import { SubApp } from './subApp';
import { ThemeProvider } from 'styled-components';
import Theme from './Theme';

const inSubDir = !!document.location.pathname.match(/pages\/autoit\/website/);

ReactDOM.render(
	<HashRouter>
		<ThemeProvider theme={Theme}>
			<SubApp path='/*' />
		</ThemeProvider>
	</HashRouter>,
	document.getElementById('root')
);
