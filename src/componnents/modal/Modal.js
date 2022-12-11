import React from 'react'
import './Modal.css'
import { Modal, Button } from 'react-bootstrap'
import { BsCurrencyDollar , BsCalendarCheck , BsServer , BsFillGeoAltFill } from 'react-icons/bs'
function ModalJob({show , initModal , title , image , address , salary , date , category , description}) {

  return (
    <>
      <Modal show={show}>
        <Modal.Header  >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='d-flex' >
          <div className='img-modal' ><img className='img-fluid' src={image} alt={title}  /></div>
          <div className='detail-modal' >
          <p className='p-detail' > <BsCurrencyDollar/> : {salary}</p>
          <p className='p-detail' ><BsCalendarCheck/> : {date}</p>
          <p className='p-detail' ><BsServer/> : {category}</p>
          <p className='p-detail' ><BsFillGeoAltFill/> : {address}</p>
          </div>
        </div>
          {description}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalJob