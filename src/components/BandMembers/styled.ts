import styled from 'styled-components'

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  margin-top: 10%;
  width: 100%;
  height: auto;
  overflow-y: hidden;
  padding: 16px 0;
`

export const MemberContainer = styled.div`
  flex-shrink: 0;
  min-width: 400px;
  padding: 0 50px 8px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 120px;
  box-shadow: 1px 2px 20px 1px black;
  height: 120px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 50%;
  overflow: hidden;
`

export const InfoContainer = styled.div`
  border-radius: 5px;
  padding: 10px 10px 10px 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};

  p {
    text-align: center;
  }
`
