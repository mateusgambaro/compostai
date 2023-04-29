import React from 'react'
import Head from 'next/head'
import arabela from '../assets/arabela.jpg'
import Image from 'next/image'
import { Container, Page } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Arabela App</title>
      </Head>
      <Page>
        <div
          style={{
            display: 'flex',
            marginTop: '-10%'
          }}
        >
          <Image src={arabela} alt="arabela-logo" height="300" width="300" />
        </div>
        <Container>
          <main>
            <h1>ARABELA</h1>
          </main>
        </Container>
      </Page>
    </div>
  )
}
export default Home
