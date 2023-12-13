/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { Spaces, SpacesContainer } from './styled'
import { CompostType } from './types'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveCompostRequest } from '../../store/actions/composts'
import HouseIcon from '../../assets/house.svg'
import FarmIcon from '../../assets/farm.svg'
import ShopIcon from '../../assets/shop.svg'
import AptoIcon from '../../assets/apto.svg'
import { Select } from 'antd'

interface CompostProps {
  composts: CompostType[]
}

type CompostData = {
  name: string
  quantity: string
}

export const CompostSpaces: React.FC<CompostProps> = ({ composts }) => {
  const dispatch = useDispatch()
  const [compostData, setCompostData] = useState<CompostData>({
    name: '',
    quantity: ''
  })

  const router = useRouter()

  const handleChange = (value: string) => {
    console.log(value)
    setCompostData(prevState => ({
      ...prevState,
      quantity: value
    }))
  }

  const handleSubmit = async () => {
    dispatch(saveCompostRequest(compostData))
    await router.push('/CompostProcess')
  }

  
  return (
    <SpacesContainer>
      {composts.map((compost, index) => (
        <Spaces key={index}>
          <Button
            variant="contained"
            onClick={() => {
              setCompostData(prevState => ({
                ...prevState,
                name: compost.name
              }))
            }}
            style={{
              backgroundColor: '#299966',
              color: 'white',
              width: 135,
              height: 120,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {compost.name === 'Casa' && (
              <HouseIcon
                style={{ width: '50px', height: '50px', marginBottom: '10px' }}
              />
            )}
            {compost.name === 'Sítio/ Chácara' && (
              <FarmIcon
                style={{ width: '50px', height: '50px', marginBottom: '2px' }}
              />
            )}
            {compost.name === 'Apartamento' && (
              <AptoIcon
                style={{ width: '50px', height: '50px', marginBottom: '10px' }}
              />
            )}
            {compost.name === 'Restaurante' && (
              <ShopIcon
                style={{ width: '50px', height: '50px', marginBottom: '10px' }}
              />
            )}
            {compost.name}
          </Button>
        </Spaces>
      ))}
      <Select
        defaultValue="Quantidade de pessoas"
        style={{
          width: 220,
          marginTop: '20px',
          height: '50px',
          fontWeight: 'bold'
        }}
        onChange={handleChange}
        options={[
          { value: 'small', label: '1-4 Pessoas' },
          { value: 'medium', label: '4-6 Pessoas' },
          { value: 'large', label: '6-8 Pessoas' },
          { value: 'xlarge', label: 'Mais de 8 pessoas' }
        ]}
      />
      <Button
        variant="contained"
        onClick={handleSubmit}
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
    </SpacesContainer>
  )
}

export default CompostSpaces
