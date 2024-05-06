import React from 'react'
import '../Styles/Style.scss'
// import img from '../www.flipkart.com-1711445631140/43a29fc06d62a752.jpg'
import img from '../www.flipkart.com-1711445631140/43a29fc06d62a752.webp'
function ShopCard1() {
  return (
    <>
    <div className="advert d-flex">
        <div className="topimg h-50 bg-white shadow m-1">
            <img src={img} alt="img" />
        <h6 className='title  p-3 pb-0'>Spoyl Tees</h6>
        <p className='description text-nowrap p-2'>Youthful Vibes From $100</p>
        </div>
         <div className="writeupflex w-auto bg-white shadow p-2 m-2 mb-0 text-body-tertiary te">
          <p>Home > Clothing and Accessories > Topwear > T-shirts > Men's T-shirts</p>
        <p> From attending a casual hangout session with your friends and family to running errands, tees can come in handy for you in varied scenarios. So, check out the wide array of T-shirts that can meet your requirements. You can have a look at the various options with different sleeve lengths, ranging from half sleeves to full sleeves and more. On the other hand, if you are searching for sleeveless T-shirts that can be useful when you are working out or enjoying your downtime, such options are also available online. You can also find tees that feature intricate patterns to elevate their aesthetic appeal too. So, browse options like chequered, striped, zigzagged, and graphic tees, among others, and opt for the ones that you like the most. You can find outfits with varied neck designs too, including the likes of V-neck T-shirts, round neck tees, polo neck tees, and more. In addition, if you are looking for tees with pockets, T-shirts like that are also available online. As a result, you can easily store your belongings inside the outfit pockets. Explore the various tees from brands like FTX, VeBNoR, KYK, TQH, EyeBogler, and more to bring home the T-shirts of your choice! The information you are reading has been last updated on 03-Apr-24.
          <h5 className='text-dark d-flex align-content-center '>Men's T-shirts <p className='whtshowing'> (Showing 1 – 40 products of 48,082 products)</p></h5>
          <ul className='d-flex sort'>
            <li>Sort By </li>
            <li>popularity</li>
            <li>price--low to high</li>
            <li>price--high to low</li>
            <li>Newest First</li>
          </ul>
        </p>
         </div>
    </div>

    </>
  )
}

export default ShopCard1
