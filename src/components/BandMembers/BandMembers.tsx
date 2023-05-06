import React, { useState } from 'react'
import { BandMembersProps } from './types'
import {
  ImageContainer,
  InfoContainer,
  MemberContainer,
  ScrollContainer
} from './styled'
import Image from 'next/image'
import arabela from '../../assets/arabela.jpg'
import gustavo_arabela from '../../assets/gustavo_arabela.png'
import mateus_arabela from '../../assets/mateus_arabela.jpg'
import joao_arabela from '../../assets/joao_arabela.jpg'
import { Button } from '@mui/material'
import { BsInstagram } from 'react-icons/bs'
import { FaArrowRight } from 'react-icons/fa'
import Footer from '../Footer/Footer'
import { GiDrumKit, GiGuitarBassHead } from 'react-icons/gi'
import { TbMicrophone2 } from 'react-icons/tb'

const BandMembers: React.FC<BandMembersProps> = ({ members }) => {
  return (
    <>
      <h2 style={{ marginTop: '20%', marginBottom: '5%' }}>CONHEÇA A BANDA</h2>
      <p style={{ marginBottom: '5%' }}>Arrasta para o lado</p>
      <FaArrowRight />
      <hr
        style={{
          background: 'white',
          height: '2px',
          marginTop: '5%',
          width: '80%'
        }}
      />
      <ScrollContainer>
        {members.map(member => (
          <MemberContainer key={member.name}>
            <InfoContainer>
              {member.id === 1 ? (
                <ImageContainer>
                  <Image
                    src={gustavo_arabela}
                    width="200"
                    height="120"
                    alt="band-member-photo"
                  ></Image>
                </ImageContainer>
              ) : member.id === 2 ? (
                <ImageContainer>
                  <Image
                    src={joao_arabela}
                    width="200"
                    height="180"
                    alt="band-member-photo"
                  ></Image>
                </ImageContainer>
              ) : (
                <ImageContainer>
                  <Image
                    src={mateus_arabela}
                    width="200"
                    height="180"
                    alt="band-member-photo"
                  ></Image>
                </ImageContainer>
              )}

              {member.id === 1 ? (
                <h2>
                  {member.name}&nbsp;
                  <GiGuitarBassHead />
                </h2>
              ) : member.id === 2 ? (
                <h2>
                  {member.name}&nbsp;
                  <TbMicrophone2/>
                </h2>
              ) : (
                <h2>
                  {member.name}&nbsp;
                  <GiDrumKit />
                </h2>
              )}

              <h4>{member.instrument}</h4>
              <br />
              <Button
                color="inherit"
                onClick={() =>
                  window.open(
                    `https://www.instagram.com/${member.instagram}`,
                    '_blank',
                    'noreferrer'
                  )
                }
              >
                <BsInstagram />
              </Button>
              <p>{member.instagram}</p>
            </InfoContainer>
          </MemberContainer>
        ))}
      </ScrollContainer>
      <hr
        style={{
          background: 'white',
          height: '2px',
          marginTop: '5%',
          width: '80%'
        }}
      />
      <Footer />
    </>
  )
}

export default BandMembers
