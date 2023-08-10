/* eslint-disable react/prop-types */
import deleteIcon from '../assets/deleteIcon.png';
import './Card.css';

const Card = (props) => {

  return (
    <div className='card'>
      <div className="card-input">
        <div className='card-checkbox'>
          <input
            type="checkbox"
            checked={props.isChecked}
            name="checkbox"
            onChange={props.handleCheckTask}
          />
          <span className={`${props.isChecked ? "crossed-font" : "normal-font"}`}>{props.userInput}</span>
        </div>
        <div>
          <img src={deleteIcon} alt="" onClick={props.handleDeleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Card;
