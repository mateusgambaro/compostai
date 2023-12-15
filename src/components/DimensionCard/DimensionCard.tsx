import React from 'react'
import { BoxContainer, DimensionContainer } from './styled'
import Image from 'next/image'

type DimensionProps = {
  name: string
  img: string
  size?: string
  dimension?: string
  humus?: string
  dailyColect?: string
}

export const DimensionCard: React.FC<DimensionProps> = ({
  name,
  img,
  size,
  dimension,
  humus,
  dailyColect
}) => {
  return (
    <BoxContainer>
      <Image src={img} alt="dimension-img" width={220} height={150}></Image>
      <h1 style={{marginBottom: '10px'}}>{name}</h1>
      <DimensionContainer>
        <p>
          Caixa de <strong>{size}</strong>
        </p>
        <p>
          Dimensões(AxLxC): <strong>{dimension}</strong>
        </p>
        <p>
          Geração de Húmus Mensal: <strong>{humus}</strong>
        </p>
        <p>
          Capacidade Diária de Coleta: <strong>{dailyColect}</strong>
        </p>
      </DimensionContainer>
    </BoxContainer>
  )
}

export default DimensionCard
