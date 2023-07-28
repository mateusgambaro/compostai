export type ArtistType = {
  id: number
  artistName: string
  songs: Songs[]
}

export type Songs = {
  id: number
  name: string
}
