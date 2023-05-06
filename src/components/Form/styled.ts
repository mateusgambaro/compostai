import { TextField } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  width: 80%;
  border-radius: 20px;
  margin-top: 10%;
  margin-bottom: 20%;
  background-color: ${props => props.theme.colors.secondary};
  padding: 30px;
`

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 15px;
    width: 100%;
    .MuiOutlinedInput-root {
      border-radius: 8px;
      background-color: rgba(217, 217, 217, 0.7);
    }
    .MuiFilledInput-root {
      border-radius: 8px;
      background-color: rgba(217, 217, 217, 0.7);
    }
    .MuiInputBase-input {
      background-color: transparent;
    }
  }
`

export const TextContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  h1 {
    font-weight: 900;
    text-align: center;
  }
`
export const RatingButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  margin-top: 5%;
  margin-bottom: 10%;
`
