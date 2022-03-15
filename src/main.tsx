import React from 'react'
import ReactDOM from 'react-dom'
import { StyleProvider, theme } from '@/main.s'
import App from '@/App'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
	<React.StrictMode>
		<StyleProvider/>
		<ThemeProvider theme={ theme }>
			<App>
				Gexa Web Application
			</App>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
