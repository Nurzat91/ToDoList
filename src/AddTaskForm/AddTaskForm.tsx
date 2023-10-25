import React from 'react';
interface Props{
  value: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onBtnClick: React.MouseEventHandler;
}
const AddTaskForm: React.FC<Props> = ({onInputChange, onBtnClick}) =>{
  return (
    <form className='form'>
      <input type='text' className='inputAdd' onChange={onInputChange}/>
      <button type='button' className='add' onClick={onBtnClick}>Add</button>
    </form>
  );
};

export default AddTaskForm;