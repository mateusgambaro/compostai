import styled from 'styled-components'

export const Page = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  margin-top: 8%;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
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
  p {
    margin-top: 5%;
    text-align: center;
  }
`

export const ArtistIcon = styled.div`
  display: flex;
  width: 80%;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  p {
    margin-top: 2%;
    text-align: center;
    font-weight: 200;
  }
`

export const Instagram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.secondary};
  margin-top: -20%;
  margin-bottom: 15%;
  border-radius: 10px;
`
