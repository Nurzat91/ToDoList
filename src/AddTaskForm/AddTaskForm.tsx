import React from 'react';
interface Props{
  inputValue: string;
  onInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onBtnClick: React.MouseEventHandler;
}
const AddTaskForm: React.FC<Props> = ({onInputChange, inputValue,  onBtnClick}) =>{
  return (
    <form className='form'>
      <input type='text' className='inputAdd' value={inputValue} onChange={onInputChange}/>
      <button type='button' className='add' onClick={onBtnClick}>Add</button>
    </form>
  );
};

export default AddTaskForm;