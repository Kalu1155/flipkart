import React from 'react'
import Hmecard2 from '../Cards/Hmecard2'
import Hmecard3 from '../Cards/Hmecard3'
import '../Styles/Style.scss'
import Written from '../written/Written'

const Hmeremain = () => {
  return (
    <>
    <div className="flex">
    <Hmecard2/>
      <Hmecard3/>
    </div>
    <Written/>
    </>
  )
}

export default Hmeremain
