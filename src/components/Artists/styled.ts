import styled from 'styled-components'

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

export const ArtistsContainer = styled.div`
  display: flex;
  width: 80%;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const Artists = styled.div`
  display: flex;
  width: 80%;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const Songs = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  .MuiButton-outlined {
    border-color: ${props => props.theme.colors.secondary} !important;
  }
`
