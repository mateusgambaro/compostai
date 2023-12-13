/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import Head from 'next/head'
import { Container, Page, TextContainer } from '../styles/pages/Home'
import { CompostSpaces } from '../components/Spaces/spaces'
import { Button } from '@mui/material'
import Header from '../components/Header/Header'
import { FloatButton, Modal } from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'

const Home: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const router = useRouter()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCompostingInfo = async () => {
    await router.push('/composting-info')
  }

  const handleDownloadPdf = () => {
    window.location.href = 'urlDoPdf'
  }

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

      <Header />
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
        >
          Montar
        </Button>
        <FloatButton
          className="meuBotaoPersonalizado"
          icon={<QuestionCircleOutlined />}
          type="primary"
          style={{ right: 24 }}
          onClick={showModal}
        />
        <Modal
          title="Mais informações"
          open={isModalVisible}
          onCancel={() => setIsModalVisible(false)}
          footer={null}
        >
          <Button onClick={handleCompostingInfo}>O que é compostagem?</Button>
          <Button onClick={handleDownloadPdf}>O que posso compostar?</Button>
        </Modal>
      </Container>
    </Page>
  )
}
export default Home
