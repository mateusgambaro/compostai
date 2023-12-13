import Image from 'next/image'
import React, { useState } from 'react'
import compostai from '../../assets/compostai.png'
import { Button } from '@mui/material'
import { Input, Modal } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

export const Header: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>()

  return (
    <div
      style={{
        display: 'flex',
        marginTop: '10%',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <Image src={compostai} alt="compostai-logo" height="80" width="180" />
      <Button
        variant="contained"
        onClick={() => setIsModalVisible(true)}
        style={{
          backgroundColor: '#E65045',
          color: 'white',
          width: 105,
          height: 40,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        Login
      </Button>
      <Modal
        title="Minha Composteira"
        open={isModalVisible}
        centered
        style={{padding: '40px 20px'}}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
          marginTop: '20px'
        }}>
          <Input size="large" placeholder="Usuário" prefix={<UserOutlined />} />
          <Input size="large" placeholder="Senha" prefix={<LockOutlined />} />
          <Button
            variant="contained"
            style={{
              backgroundColor: '#299966',
              color: 'white',
              width: 105,
              height: 40,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            Entrar
          </Button>
        </div>
      </Modal>
    </div>
  )
}

export default Header
