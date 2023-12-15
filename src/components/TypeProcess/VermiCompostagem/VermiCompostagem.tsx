import React from 'react'
import { StyledCollapse } from './styled'

export const VermiCompostagem: React.FC = () => {
  const toolsList = (
    <ul>
      <li>Pá ou espátula</li>
      <li>Balde ou recipiente para compostagem</li>
      <li>Luvas de jardinagem</li>
      <li>Tesoura ou triturador de jardim</li>
      <li>Regador ou mangueira</li>
      <li>Termômetro de compostagem (opcional)</li>
    </ul>
  )

  const materialList = (
    <ul>
      <li>Pá ou espátula</li>
      <li>Balde ou recipiente para compostagem</li>
      <li>Luvas de jardinagem</li>
      <li>Tesoura ou triturador de jardim</li>
      <li>Regador ou mangueira</li>
      <li>Termômetro de compostagem (opcional)</li>
    </ul>
  )
  const items = [
    {
      key: '1',
      label: 'Ferramentas',
      children: <div style={{padding: '10px 20px', fontSize: '15px'}}>{toolsList}</div>
    },
    {
      key: '2',
      label: 'Materiais',
      children: <div style={{padding: '10px 20px', fontSize: '15px'}}>{materialList}</div>
    }
  ]

  return (
    <>
      <h2 style={{ marginTop: '20px' }}>O que você vai precisar</h2>
      <StyledCollapse
        items={items}
        defaultActiveKey={['1']}
        style={{
          color: 'white',
          width: '350px',
          marginTop: '20px',
          fontSize: '15px'
        }}
      />
    </>
  )
}

export default VermiCompostagem
