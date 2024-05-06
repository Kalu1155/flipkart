import React from 'react'
import '../Styles/Style.scss'

const Hmecard = ({imageSrc,title,description}) => {
  return (
    <>
     <div className="product-card">
      <div className="product-image">
        <img src={imageSrc} alt={title} />
      </div>
      <p className='product-description'>{description} </p>
      <h6 className="product-title">{title}</h6>
    </div>
    </>
  )
}

export default Hmecard
