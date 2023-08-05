/* eslint-disable react/prop-types */
import editIcon from '../assets/editIcon.png'
import deleteIcon from '../assets/deleteIcon.png'

import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <div className='checkbox'>
            <input type="checkbox" name="checkbox" checked={props.isChecked} />
            <span>{props.userInput}</span>
        </div>
        <div className='icons'>
            <img src={editIcon} onClick={ ()=>{} } />
            <img src={deleteIcon} onClick={ ()=>{} } />
        </div>
    </div>
  )
}

export default Card