import css from './RadioButtonForm.module.css';
import { useState } from 'react';

export const RadioButtonForm = ({ onChange }) => {
  const [selectedOption, setSelectedOption] = useState('day');

  const handleOptionChange = ({ target }) => {
    setSelectedOption(target.name);

    onChange(target.name);
  };

  return (
    <form className={`${css.radioButtonsContainer}`}>
      <div className={`${css.radioButton}`}>
        <input
          name="day"
          id="day"
          className={`${css.radioButtonInput}`}
          type="radio"
          checked={selectedOption === 'day'}
          onChange={handleOptionChange}
        />
        <label htmlFor="day" className={`${css.radioButtonLabel}`}>
          <span className={`${css.radioButtonCustom}`}></span>
          Day
        </label>
      </div>
      <div className={`${css.radioButton}`}>
        <input
          name="week"
          id="week"
          className={`${css.radioButtonInput}`}
          type="radio"
          checked={selectedOption === 'week'}
          onChange={handleOptionChange}
        />
        <label htmlFor="week" className={`${css.radioButtonLabel}`}>
          <span className={`${css.radioButtonCustom}`}></span>
          Week
        </label>
      </div>
    </form>
  );
};
