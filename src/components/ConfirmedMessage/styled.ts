import styled from 'styled-components'

interface ModalContainerProps {
  confirmed?: boolean
}

export const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  height: 500px;
  width: 300px;
  border-radius: 10px;
  box-shadow: 1px 1px 20px 1px
    ${props => (props.confirmed ? props.theme.colors.tealGreen : 'red')};
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  text-align: center;
`
