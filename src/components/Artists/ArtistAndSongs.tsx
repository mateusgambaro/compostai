import React, { useState } from 'react'
import { Artists, ArtistsContainer, Songs } from './styled'
import { ArtistType } from './types'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import axios from 'axios'
import Loader from '../Loader/Loader'
import { useRouter } from 'next/router'

interface ArtistsListProps {
  artists: ArtistType[]
}

export const ArtistsAndSongs: React.FC<ArtistsListProps> = ({ artists }) => {
  const [expandedArtist, setExpandedArtist] = useState(null)

  const router = useRouter()

  const handleToggleCollapse = index => {
    setExpandedArtist(expandedArtist === index ? null : index)
  }

  const handleSongClick = async song => {
    const teste = {
      user_name: 'demasi',
      email: 'jarbinha@gmail.com',
      song_name: song
    }

    // TODO colocar um loading quando estiver enviando a música
    // Save and send the song to the database here
    console.log(`Selected song: ${song}`)
    // await axios.post(
    //   'https://11dsf3r6r6.execute-api.us-east-1.amazonaws.com/stage',
    //   teste
    // )
    await router.push('/Forms')
  }
  return (
    <ArtistsContainer>
      {artists.map((artist, index) => (
        <Artists>
          <Button
            variant="contained"
            onClick={() => handleToggleCollapse(index)}
            style={{
              backgroundColor: '#C80C5D',
              color: 'white',
              width: 300
            }}
            endIcon={
              expandedArtist === index ? <ExpandLessIcon /> : <ExpandMoreIcon />
            }
          >
            {artist.artistName}
          </Button>
          <Collapse in={expandedArtist === index}>
            {artist.songs.map((song, songIndex) => (
              <Songs>
                <Button
                  variant="outlined"
                  style={{
                    display: 'flex',
                    color: 'white',
                    width: 300
                  }}
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onClick={() => handleSongClick(song)}
                >
                  {song}
                </Button>
              </Songs>
            ))}
          </Collapse>
        </Artists>
      ))}
    </ArtistsContainer>
  )
}

export default ArtistsAndSongs
