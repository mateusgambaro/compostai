import { SAVE_SONG_REQUEST } from '..'

export const saveSongRequest = (name: string) => ({
  type: SAVE_SONG_REQUEST,
  payload: { name }
})
