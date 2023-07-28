import React, { useState } from 'react'
import Head from 'next/head'
import arabela from '../assets/arabela.jpg'
import Singers from '../assets/Singers.svg'
import Image from 'next/image'
import {
  ArtistIcon,
  Container,
  Instagram,
  Page,
  TextContainer
} from '../styles/pages/Home'
import { GiGuitarBassHead } from 'react-icons/gi'
import ArtistsAndSongs from '../components/Artists/ArtistAndSongs'
import BandMembers from '../components/BandMembers/BandMembers'
import { Button } from '@mui/material'
import { BsInstagram } from 'react-icons/bs'
import { BandMembersProps } from '../components/BandMembers/types'

type HomeProps = {
  bandMembers: BandMembersProps['members']
}

const Home: React.FC<HomeProps> = ({ bandMembers }) => {
  const artistsAndSongs = [
    {
      id: 1,
      artistName: 'ColdPlay',
      songs: [
        { id: 1, name: 'Viva La Vida' },
        { id: 2, name: 'Clocks' },
        { id: 3, name: 'Yellow' }
      ]
    },
    {
      id: 2,
      artistName: 'Pink Floyd',
      songs: [
        { id: 1, name: 'Time' },
        { id: 2, name: 'Another Brick In The Wall' },
        { id: 3, name: 'Us And Them' }
      ]
    },
    {
      id: 3,
      artistName: 'Red Hot Chilli Peppers',
      songs: [
        { id: 1, name: 'Scartissue' },
        { id: 2, name: 'Soul To Squeeze' },
        { id: 3, name: 'Californication' }
      ]
    },
    {
      id: 4,
      artistName: 'Alceu Valença',
      songs: [{ id: 1, name: 'Tu vens' }]
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
          marginTop: '-10%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image src={arabela} alt="arabela-logo" height="300" width="300" />
        <Instagram>
          <Button
            color="inherit"
            onClick={() =>
              window.open(
                `https://www.instagram.com/arabela.banda`,
                '_blank',
                'noreferrer'
              )
            }
          >
            <BsInstagram />
            &nbsp;&nbsp; arabela.banda
          </Button>
        </Instagram>
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
      <BandMembers members={bandMembers} />
    </Page>
  )
}
export default Home

export async function getServerSideProps() {
  const bandMembers = [
    {
      id: 1,
      name: 'Gustavo Faria',
      instagram: 'gbcfaria',
      instrument: 'Baixo',
      imageUrl: '/gustavo_arabela.png'
    },
    {
      id: 2,
      name: 'João Dias',
      instagram: 'jdays__',
      instrument: 'Voz e Guitarra',
      imageUrl: '/joao_arabela.jpg'
    },
    {
      id: 3,
      name: 'Mateus Nagy',
      instagram: 'mateusnagy',
      instrument: 'Bateria',
      imageUrl: '/mateus_arabela.jpg'
    }
  ]
  return {
    props: {
      bandMembers
    }
  }
}
