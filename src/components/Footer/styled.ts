import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  width: 100%;

  p {
    font-weight: 200;
  }
`

export const FooterButtonInstagram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  background-color: ${props => props.theme.colors.secondary};
  margin-top: 1%;
  margin-bottom: 4%;
  border-radius: 10px;
`

export const FooterButtonWhatsapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  background-color: #25d366;
  margin-top: 4%;
  margin-bottom: 4%;
  border-radius: 10px;
`
