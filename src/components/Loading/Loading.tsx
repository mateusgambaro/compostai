import React from 'react'
import ReactLoading from 'react-loading'

interface LoadingProps {
  type: string
  color: string
}

const Loading: React.FC<LoadingProps> = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={667} width={375} />
)

export default Loading
