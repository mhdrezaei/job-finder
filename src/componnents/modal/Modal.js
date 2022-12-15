import React, { useContext } from 'react'
import './Modal.css'
import { Modal, Button } from 'react-bootstrap'
import { BsCurrencyDollar , BsCalendarCheck , BsServer , BsFillGeoAltFill } from 'react-icons/bs'
import Context from '../../context/context'
function ModalJob({show , initModal , title , image , address , salary , date , category , description}) {
  const { dark } = useContext(Context)

  return (
    <>
      <Modal  show={show}>
        <Modal.Header className={!dark ? 'light' : ''}  >
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={!dark ? 'light' : ''}>
        <div className='d-flex' >
          <div className='img-modal' ><img className='img-fluid' src={image} alt={title}  /></div>
          <div className='detail-modal mx-2' >
          <p className='p-detail' > <BsCurrencyDollar/> : {salary}</p>
          <p className='p-detail' ><BsCalendarCheck/> : {date}</p>
          <p className='p-detail' ><BsServer/> : {category}</p>
          <p className='p-detail' ><BsFillGeoAltFill/> : {address}</p>
          </div>
        </div>
          {description}
        </Modal.Body>
        <Modal.Footer className={!dark ? 'light' : ''}>
          <Button variant="danger" onClick={initModal} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalJob