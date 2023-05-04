import React, { useState } from 'react'
import { Button, InputLabel } from '@mui/material'
import {
  Container,
  InputContainer,
  RatingButtons,
  StyledTextField,
  TextContainer
} from './styled'
import { TbHandRock } from 'react-icons/tb'
import { GoThumbsdown } from 'react-icons/go'

interface FormData {
  name: string
  age: string
  phone: string
  thumbsUp: boolean
  thumbsDown: boolean
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    phone: '',
    thumbsUp: false,
    thumbsDown: false
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form data submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <InputContainer>
          <StyledTextField
            required
            label="Nome"
            name="name"
            value={formData.name}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            required
            label="Idade"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            required
            label="Telefone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            variant="outlined"
          />
          <StyledTextField
            label="Comentários"
            multiline
            rows={4}
            placeholder="Deixe uma mensagem para a banda :) (Opcional)"
          />
        </InputContainer>
        <TextContainer>
          <h1>Gostou da banda?</h1>
        </TextContainer>
        <RatingButtons>
          <Button
            type="submit"
            onClick={() =>
              setFormData({
                ...formData,
                thumbsUp: true
              })
            }
            variant="contained"
            style={{
              backgroundColor: '#C80C5D',
              color: 'white',
              width: 50,
              height: 50,
              borderRadius: '50%'
            }}
          >
            <TbHandRock size={45} />
          </Button>
          <Button
            type="submit"
            onClick={() =>
              setFormData({
                ...formData,
                thumbsDown: true
              })
            }
            variant="contained"
            style={{
              backgroundColor: '#C80C5D',
              color: 'white',
              width: 50,
              height: 50,
              borderRadius: '50%'
            }}
          >
            <GoThumbsdown size={45} />
          </Button>
        </RatingButtons>
        <Button
          type="submit"
          variant="contained"
          style={{
            backgroundColor: '#C80C5D',
            color: 'white',
            width: 250,
            marginBottom: '10%'
          }}
        >
          Enviar
        </Button>
      </Container>
    </form>
  )
}

export default FormComponent
