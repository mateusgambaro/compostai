import React, { useState } from 'react'
import { Spaces, SpacesContainer } from './styled'
import { CompostType } from './types'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveSongRequest } from '../../store/actions/songs'
import HouseIcon from '../../assets/house.svg'
import FarmIcon from '../../assets/farm.svg'
import ShopIcon from '../../assets/shop.svg'
import AptoIcon from '../../assets/apto.svg'
import { Select } from 'antd'

interface CompostProps {
  composts: CompostType[]
}

export const CompostSpaces: React.FC<CompostProps> = ({ composts }) => {
  const dispatch = useDispatch()

  const router = useRouter()

  const handleSongClick = async compost => {
    dispatch(saveSongRequest(compost))
    await router.push('/Forms')
  }

  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  return (
    <SpacesContainer>
      {composts.map((compost, index) => (
        <Spaces>
          <Button
            variant="contained"
            onClick={() => console.log('cliquei')}
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
          { value: 'large', label: '6-8 Pessoas' }
        ]}
      />
    </SpacesContainer>
  )
}

export default CompostSpaces
