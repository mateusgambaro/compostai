/* eslint-disable @typescript-eslint/no-misused-promises */
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
import Loading from '../Loading/Loading'
import AlertModal from '../ConfirmedMessage/ConfirmModal'
import { useRouter } from 'next/router'
import Loader from '../Loader/Loader'
import { useSelector } from 'react-redux'
import axios from 'axios'
interface FormData {
  name: string
  age: string
  phone: string
  comments?: string
  rating: boolean
}

interface RootState {
  songs: {
    id: string
    song: string
    artist: string
  }
}

//
const maskPhone = (phone: string) => {
  const regexPhone = phone.replace(/\D/g, '').replace(/(\d{2})(\d)/, '($1) $2')

  if (regexPhone.length > 13) {
    return regexPhone.replace(/(\d{5})(\d)/, '$1-$2')
  }

  return regexPhone.replace(/(\d{4})(\d)/, '$1-$2')
}

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    phone: '',
    comments: '',
    rating: null
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('Success! Operation completed.')
  const [description, setDescription] = useState('')
  const [success, setSuccess] = useState(true)
  const router = useRouter()

  const song = useSelector((state: RootState) => state.songs)
  console.log('SONG', song)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    const newValue = name === 'phone' ? maskPhone(value) : value
    setFormData({ ...formData, [name]: newValue })
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleSubmit = async (event: React.FormEvent) => {
    const endpoint =
      'https://11dsf3r6r6.execute-api.us-east-1.amazonaws.com/stage'
    event.preventDefault()
    setIsLoading(true)
    const { name, phone, age, comments, rating } = formData
    const body = {
      song_name: song.song,
      artist_name: song.artist,
      user_name: name,
      age,
      phone,
      comments,
      rating
    }
    console.log('BODY', body)
    await axios.post(endpoint, body)
    setIsLoading(false)
    setOpen(true)
    setMessage(`Valeu, ${formData.name}!`)
    setDescription(
      'Agora é só curtir o show que logo tocamos sua música escolhida.'
    )
    setTimeout(async () => {
      await router.push('/')
    }, 5000)
  }

  return (
    <>
      {isLoading && <Loader />}
      <form onSubmit={handleSubmit}>
        <Container>
          <InputContainer>
            <div style={{ width: '100%' }}>
              <InputLabel style={{ color: '#d9d9d9' }}>Nome</InputLabel>
              <StyledTextField
                required
                placeholder="Digite seu nome *"
                name="name"
                InputLabelProps={{ shrink: false }}
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
            <div style={{ width: '100%' }}>
              <InputLabel style={{ color: '#d9d9d9' }}>Idade</InputLabel>
              <StyledTextField
                required
                placeholder="Digite sua idade *"
                name="age"
                type="number"
                InputLabelProps={{ shrink: false }}
                value={formData.age}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
            <div style={{ width: '100%' }}>
              <InputLabel style={{ color: '#d9d9d9' }}>Telefone</InputLabel>
              <StyledTextField
                required
                placeholder="Digite seu telefone *"
                name="phone"
                InputLabelProps={{ shrink: false }}
                value={formData.phone}
                onChange={handleChange}
                variant="outlined"
              />
            </div>
            <div style={{ width: '100%' }}>
              <InputLabel style={{ color: '#d9d9d9' }}>Comentários</InputLabel>
              <StyledTextField
                InputLabelProps={{ shrink: false }}
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                multiline
                rows={4}
                placeholder="Deixe uma mensagem para a banda :) (Opcional)"
              />
            </div>
          </InputContainer>
          <TextContainer>
            <h1>Gostou da banda?</h1>
          </TextContainer>
          <RatingButtons>
            <Button
              onClick={() =>
                setFormData(prevFormData => ({
                  ...prevFormData,
                  rating: true
                }))
              }
              variant="contained"
              style={{
                backgroundColor: `${formData.rating ? 'green' : '#C80C5D'}`,
                color: 'white',
                width: 50,
                height: 50,
                borderRadius: '50%'
              }}
            >
              <TbHandRock size={45} />
            </Button>
            <Button
              onClick={() =>
                setFormData(prevFormData => ({
                  ...prevFormData,
                  rating: false
                }))
              }
              variant="contained"
              style={{
                backgroundColor: `${
                  formData.rating || formData.rating === null
                    ? '#C80C5D'
                    : 'green'
                }`,
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
            {isLoading ? <Loading type="spin" color="white" /> : 'Enviar'}
          </Button>
        </Container>
        <AlertModal
          open={open}
          handleClose={handleClose}
          message={message}
          description={description}
          success={success}
        />
      </form>
    </>
  )
}

export default FormComponent
