import React from 'react'
// import img from '../www.flipkart.com-1711445631140/-original-imagbwf3wvhzfh5z.jpeg'

const Cardimg = ({title,description,imgsrc}) => {
  return (
    <>
        <div className="w- border bg-primary shadow ps-4 pe-4 pt-2 pb-2 mt-3  rounded-0 text-white mb-4 cardimg">
            <h1 className='mt-5 mb-3'>{title}</h1>
            <p>{description}</p>
            <img src={imgsrc} alt="" />
        </div>
    </>
  )
}

export default Cardimg
