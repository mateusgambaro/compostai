import { SAVE_SONG_REQUEST } from '..'

export const saveSongRequest = song => ({
  type: SAVE_SONG_REQUEST,
  payload: song
})
