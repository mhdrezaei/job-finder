import React from 'react'
import { Modal, Button } from 'react-bootstrap'
function ModalJob({show , initModal , title , description}) {

  return (
    <>
      <Modal show={show}>
        <Modal.Header closeButton >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal} >
            Close
          </Button>
          <Button variant="dark" >
            Store
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalJob