import { createGlobalStyle } from 'styled-components'

export const StyleProvider = createGlobalStyle`
	* {
    font-family: 'SF Pro', sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: none;
		border: none;
	}
	
	#root {
		min-height: 100vh;
		height: 0;
	}
	
  @font-face {
    font-family: 'SF Pro';
    src: url(assets/fonts/sf-pro-light.woff) format('woff'),
    url(assets/fonts/sf-pro-light.woff2) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(assets/fonts/sf-pro-regular.woff) format('woff'),
    url(assets/fonts/sf-pro-regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(assets/fonts/sf-pro-medium.woff) format('woff'),
    url(assets/fonts/sf-pro-medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
  }
	
  @font-face {
    font-family: 'SF Pro Text';
    src: url(assets/fonts/sf-pro-semibold.woff) format('woff'),
    url(assets/fonts/sf-pro-semibold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(assets/fonts/sf-pro-bold.woff) format('woff'),
    url(assets/fonts/sf-pro-bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'SF Pro';
    src: url(assets/fonts/sf-pro-heavy.woff) format('woff'),
    url(assets/fonts/sf-pro-heavy.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
  }
`

export const theme = {
  colors: {
    ascent: '#2F80ED',
    background: '#EFEFEF',
    border: '#0000004C',
    gray: '#636366'
  }
}
