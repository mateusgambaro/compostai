// AlertModal.tsx
import React from 'react'
import { Modal, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ErrorIcon from '@mui/icons-material/Error'
import { MessageContainer, ModalContainer } from './styled'
import { AiFillCheckCircle } from 'react-icons/ai'
import { GiGuitar } from 'react-icons/gi'

interface AlertModalProps {
  open: boolean
  handleClose: () => void
  message: string
  success: boolean
  description: string
}

const AlertModal: React.FC<AlertModalProps> = ({
  open,
  handleClose,
  message,
  description,
  success
}) => {
  return (
    <Modal
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      open={open}
      onClose={handleClose}
    >
      <ModalContainer>
        <MessageContainer>
          <Typography variant="h3" component="div">
            {message}
          </Typography>
          <Typography
            variant="p"
            style={{ fontWeight: 200, marginTop: '5%' }}
            component="div"
          >
            {description}
          </Typography>
        </MessageContainer>

        {success ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '20%'
            }}
          >
            <AiFillCheckCircle color="green" size={100} />
            <p style={{ fontWeight: 200, marginTop: '5%' }}>
              Música enviada com sucesso!
            </p>
          </div>
        ) : (
          <ErrorIcon color="error" fontSize="large" />
        )}
      </ModalContainer>
    </Modal>
  )
}

export default AlertModal
