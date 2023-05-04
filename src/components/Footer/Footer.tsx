import React from 'react'
import {
  FooterButtonInstagram,
  FooterButtonWhatsapp,
  FooterContainer
} from './styled'
import { Button } from '@mui/material'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer: React.FC = () => {
  const whatsappRedirectLink = `https://api.whatsapp.com/send`
  const whatsappMessage =
    'Olá! Gostei da banda e gostaria de saber qual a agenda para os próximos shows :)'
  const link = `${whatsappRedirectLink}?phone=5515991274518&text=${whatsappMessage}`
  return (
    <FooterContainer>
      <p> Entre em contato! </p>
      <FooterButtonWhatsapp>
        <Button
          color="inherit"
          onClick={() => window.open(link, '_blank', 'noreferrer')}
        >
          <BsWhatsapp />
          &nbsp;&nbsp; (15) 99127-4518
        </Button>
      </FooterButtonWhatsapp>
      <FooterButtonInstagram>
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
      </FooterButtonInstagram>
    </FooterContainer>
  )
}

export default Footer
