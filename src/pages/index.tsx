import React, { useState } from 'react'
import Head from 'next/head'
import arabela from '../assets/arabela.jpg'
import Singers from '../assets/singers.svg'
import Image from 'next/image'
import {
  ArtistIcon,
  Container,
  Page,
  TextContainer
} from '../styles/pages/Home'
import { GiGuitarBassHead } from 'react-icons/gi'
import ArtistsAndSongs from '../components/Artists/ArtistAndSongs'

const Home: React.FC = () => {
  const artistsAndSongs = [
    {
      artistName: 'ColdPlay',
      songs: ['Viva La Vida', 'Clocks', 'Yellow']
    },
    {
      artistName: 'Pink Floyd',
      songs: ['Time', 'Another Brick In The Wall', 'Us And Them']
    },
    {
      artistName: 'Red Hot Chilli Peppers',
      songs: ['Scartissue', 'Soul To Squeeze', 'Californication']
    },
    {
      artistName: 'Alceu Valença',
      songs: ['Tu vens']
    }
  ]
  return (
    <Page>
      <Head>
        <title>Arabela App</title>
      </Head>
      <div
        style={{
          display: 'flex',
          marginTop: '-10%'
        }}
      >
        <Image src={arabela} alt="arabela-logo" height="300" width="300" />
      </div>
      <Container>
        <TextContainer>
          <h1>
            Você pede, <br /> nós tocamos! <GiGuitarBassHead />
          </h1>
          <p>Escolha uma das músicas do nosso repertório e é só aguardar.</p>
        </TextContainer>
        <ArtistIcon>
          <Singers />
          <p>Artistas</p>
        </ArtistIcon>
        <ArtistsAndSongs artists={artistsAndSongs} />
      </Container>
    </Page>
  )
}
export default Home
