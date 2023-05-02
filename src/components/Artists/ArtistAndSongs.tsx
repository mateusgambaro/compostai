import React, { useState } from 'react'
import { Artists, ArtistsContainer, Songs } from './styled'
import { ArtistType } from './types'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

interface ArtistsListProps {
  artists: ArtistType[]
}

export const ArtistsAndSongs: React.FC<ArtistsListProps> = ({ artists }) => {
  const [expandedArtist, setExpandedArtist] = useState(null)

  const handleToggleCollapse = index => {
    setExpandedArtist(expandedArtist === index ? null : index)
  }

  const handleSongClick = song => {
    // Save and send the song to the database here
    console.log(`Selected song: ${song}`)
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
