/* eslint-disable react/prop-types */
import deleteIcon from '../assets/deleteIcon.png';
import editIcon from '../assets/editIcon.png';
import './Card.css';
import { useEffect, useState } from "react";

const Card = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    console.log('isEditing child:  ' + props.isEditing);
    setIsEditing(props.isEditing);
  }, [props.isEditing]);

  const handleEditChange = (e) => props.editChange(e.target.value);

  return (
    <div className='card'>
      <div className="card-input">
        <div className='card-checkbox'>
          <input
            type="checkbox"
            checked={props.isChecked}
            name="checkbox"
            onChange={props.checkTask}
          />
          {
            isEditing ?
              <input
                value={props.editValue}
                placeholder="Edit your task"
                onChange={handleEditChange}
                onKeyDown={props.editInputOnKeyDown}
                autoFocus={true}
              />
              : <span className={`${props.isChecked ? "crossed-font" : "normal-font"}`}>{props.userInput}</span>
          }
        </div>
        <div className='card-edit'>
          <img src={editIcon} alt="" onClick={props.editIconOnClick} />
        </div>
        <div className='card-delete'>
          <img src={deleteIcon} alt="" onClick={props.deleteTask} />
        </div>
      </div>
    </div>
  );
};

export default Card;

//className={`${props.isCompleted ? "crossed-font" : "normal-font"}`