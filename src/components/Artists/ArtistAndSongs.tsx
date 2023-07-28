import React, { useState } from 'react'
import { Artists, ArtistsContainer, Songs } from './styled'
import { ArtistType } from './types'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { saveSongRequest } from '../../store/actions/songs'

interface ArtistsListProps {
  artists: ArtistType[]
}

export const ArtistsAndSongs: React.FC<ArtistsListProps> = ({ artists }) => {
  const [expandedArtist, setExpandedArtist] = useState(null)
  const dispatch = useDispatch()

  const router = useRouter()

  const handleToggleCollapse = index => {
    setExpandedArtist(expandedArtist === index ? null : index)
  }

  const handleSongClick = async (song, artist) => {
    dispatch(saveSongRequest(song, artist))
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
                  onClick={() => handleSongClick(song.name, artist.id)}
                >
                  {song.name}
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
