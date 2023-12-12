import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import compostai from '../assets/compostai.png'
import {
  ArtistIcon,
  Container,
  Page,
  TextContainer
} from '../styles/pages/Home'
import { CompostSpaces } from '../components/Artists/ArtistAndSongs'
import { BandMembersProps } from '../components/BandMembers/types'
import { Button } from '@mui/material'

type HomeProps = {
  bandMembers: BandMembersProps['members']
}

const Home: React.FC<HomeProps> = () => {
  const compostingTypes = [
    {
      id: 1,
      name: 'Casa'
    },
    {
      id: 2,
      name: 'Apartamento'
    },
    {
      id: 3,
      name: 'Sítio/ Chácara'
    },
    {
      id: 4,
      name: 'Restaurante'
    }
  ]

  return (
    <Page>
      <Head>
        <title>Compostai</title>
      </Head>
      <div
        style={{
          display: 'flex',
          marginTop: '10%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Image src={compostai} alt="compostai-logo" height="90" width="200" />
      </div>

      <Container>
        <TextContainer>
          <h1>Aprenda a montar a composteira ideal para você.</h1>
          <p>Selecione qual seu espaço e quantas pessoas moram com você.</p>
        </TextContainer>
        <CompostSpaces composts={compostingTypes} />
        <Button
          variant="contained"
          onClick={() => console.log('cliquei')}
          style={{
            backgroundColor: '#E65045',
            color: 'white',
            width: 135,
            height: 40,
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px'
          }}
        >Montar</Button>
      </Container>
    </Page>
  )
}
export default Home
