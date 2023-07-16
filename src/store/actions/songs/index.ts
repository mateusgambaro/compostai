import { SAVE_SONG_REQUEST } from '..'

export const saveSongRequest = (song: string, artist: string) => ({
  type: SAVE_SONG_REQUEST,
  payload: { song, artist }
})
