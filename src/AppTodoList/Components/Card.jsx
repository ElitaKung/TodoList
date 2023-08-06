/* eslint-disable react/prop-types */
// import editIcon from '../assets/editIcon.png'
import deleteIcon from '../assets/deleteIcon.png'
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
        <div className='checkbox'>
            <input type="checkbox" name="checkbox" />
            <span>{props.userInput}</span>
        </div>
        <div className='icons'>
            {/* <img src={editIcon} alt="" onClick={ ()=> {}} /> */}
            <img src={deleteIcon} alt="" onClick={props.handleDeleteTask} />
        </div>
    </div>
  )
}

export default Card