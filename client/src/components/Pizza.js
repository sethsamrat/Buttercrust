import React, { useState } from 'react'
import pizzas from '../pizzasdata'
import {Modal} from 'react-bootstrap'

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1)
  const [variant, setvariant] = useState('small')
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded' key={pizza._id}>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
      </div>

      <div className='flex-container'>

        <div className='w-100 m-1'>
          <p>Variants</p>
          <select className='form-control' value={variant} onChange={(e) => { setvariant(e.target.value) }}>
            {pizza.variants.map(variant => {
              return <option value={variant}>{variant}</option>
            })}
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
            {[...Array(10).keys()].map((x, i) => {

              return <option value={i + 1}>{i + 1}</option>

            })}
          </select>
        </div>

      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Prices: {pizza.prices[0][variant] * quantity} Rs</h1>
        </div>

        <div className='m-1 w-100'>
          <button className='btn'>ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height: '400px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
