/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import DimensionCard from '../DimensionCard/DimensionCard'
import { MainContainer } from './styled'
import vermi from '../../assets/vermi.png' // Substitua com o caminho correto da sua imagem
import VermiCompostagem from '../TypeProcess/VermiCompostagem/VermiCompostagem'

interface RootState {
  composts: {
    CompostData: {
      name: string
      quantity: string
    }
  }
}

interface DimensionInfo {
  img: string
  size: string
  dimension: string
  humus: string
  dailyColect: string
}

const CompostProcess: React.FC = () => {
  const { composts } = useSelector((state: RootState) => state)


  const getCompostType = (name: string, quantity: string): string => {
   if (name === 'Apartamento' || name === 'Casa') {
      return 'Vermicompostagem'
    } else if (name === 'Sítio/ Chácara') {
      return 'Pilha de Compostagem'
    }
    return 'Compostagem em caixa'
  }

  const getDimensionInfo = (name: string, quantity: string): DimensionInfo => {
    if ((name === 'Apartamento' || name === 'Casa') && quantity === 'small') {
      return {
        img: vermi,
        size: '15 Litros',
        dimension: '44cmx35cmx43cm',
        humus: '10Kg',
        dailyColect: '500g'
      }
    } else if (
      (name === 'Apartamento' || name === 'Casa') &&
      quantity === 'medium'
    ) {
      return {
        img: vermi,
        size: '39 Litros',
        dimension: '63cmx39cmx62cm',
        humus: '26Kg',
        dailyColect: '900g'
      }
    } else if (
      (name === 'Apartamento' || name === 'Casa') &&
      (quantity === 'large' || quantity === 'xlarge')
    ) {
      return {
        img: vermi,
        size: '60 Litros',
        dimension: '80cmx39cmx62cm',
        humus: '40Kg',
        dailyColect: '1,4kg'
      }
    }
    return {
      img: '',
      size: '',
      dimension: '',
      humus: '',
      dailyColect: ''
    }
  }

  const compostType = useMemo(
    () =>
      getCompostType(composts.CompostData.name, composts.CompostData.quantity),
    [composts.CompostData]
  )
  const dimensionInfo = useMemo(
    () =>
      getDimensionInfo(
        composts.CompostData.name,
        composts.CompostData.quantity
      ),
    [composts.CompostData]
  )

  return (
    <>
      <Header />
      <MainContainer>
        <h4 style={{marginTop: '20px'}}>A melhor opção para o seu espaço é a</h4>
        <DimensionCard
          name={compostType}
          img={dimensionInfo.img}
          size={dimensionInfo.size}
          dimension={dimensionInfo.dimension}
          humus={dimensionInfo.humus}
          dailyColect={dimensionInfo.dailyColect}
        />
        {
          compostType === 'Vermicompostagem' && <VermiCompostagem/>
        }
      </MainContainer>
    </>
  )
}

export default CompostProcess
