/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

interface RootState {
  composts: {
    CompostData: {
      name: string
      quantity: string
    }
  }
}

const CompostProcess: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('Success! Operation completed.')
  const [description, setDescription] = useState('')
  const [success, setSuccess] = useState(true)
  const router = useRouter()

  const { composts } = useSelector((state: RootState) => state)
  console.log('🚀 ~ file: Form.tsx:62 ~ song:', composts)

  return (
    <>
      <h1>{composts.CompostData.name}</h1>
    </>
  )
}

export default CompostProcess
