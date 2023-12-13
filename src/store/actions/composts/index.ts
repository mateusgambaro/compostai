import { SAVE_COMPOST_DATA } from '..'

type CompostData = {
  name: string
  quantity: string
}

export const saveCompostRequest = (CompostData: CompostData) => ({
  type: SAVE_COMPOST_DATA,
  payload: { CompostData }
})
