import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import NProgress from 'nprogress'
import { Router } from 'next/router'
import Head from 'next/head'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, storeWrapper } from '../store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  Router.events.on('routeChangeStart', url => {
    NProgress.start()
  })

  Router.events.on('routeChangeComplete', url => {
    NProgress.done(false)
  })
  NProgress.configure({ showSpinner: false })

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
          <GlobalStyle />
        </PersistGate>
      </ThemeProvider>
    </>
  )
}

export default storeWrapper.withRedux(MyApp)
