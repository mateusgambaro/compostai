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

export const SpacesContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around; // or 'space-between' or 'center'
align-items: center;
width: 82%; // Ensures the container takes full width
margin-top: 10%;
`

export const Spaces = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px; // This is the margin between the buttons

  & > Button { // This targets the Button component inside Spaces
    width: 100%; // Button should take up the full width of Spaces
  }

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
