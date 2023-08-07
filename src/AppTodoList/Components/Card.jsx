/* eslint-disable react/prop-types */
// import editIcon from '../assets/editIcon.png'
import deleteIcon from '../assets/deleteIcon.png';
import './Card.css';

const Card = (props) => {

  return (
    <div className='card'>
      <div className="card-input">
        <div className='card-checkbox'>
          <input type="checkbox" name="checkbox" onClick={props.handleCheckTask} />
          <span className={`${props.isCompleted ? "crossed-font" : "normal-font"}`}>{props.userInput}</span>
        </div>
        <div className='card-delete'>
          <img src={deleteIcon} alt="" onClick={props.handleDeleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Card;