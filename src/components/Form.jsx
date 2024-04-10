/* eslint-disable react/prop-types */
import { useId } from 'react'
import '../styles/Form.css'

export function Form ({ form, errs, handlerSubmit, handlerChange }) {
  // *** *** *** Variables *** *** ***
  const inputExpDateMmId = useId()
  const inputExpDateYyId = useId()

  // *** *** *** Execution *** *** ***
  return (
    <form className='form' onSubmit={handlerSubmit}>
      <label className='form-cardholder-name form-section'>
        <span className='form-section-txt'>Cardholder name</span>
        <input
          className='form-input'
          type='text'
          onChange={evt => handlerChange({ evt, type: 'text' })}
          name='name'
          placeholder='e.g. Jane Appleseed'
          value={form.name}
        />
        {errs.name && <span className='msg-error'>{errs.name}</span>}
      </label>
      <label className='form-card-number form-section'>
        <span className='form-section-txt'>Card number</span>
        <input
          className='form-input'
          type='text'
          onChange={evt => handlerChange({ evt, type: 'number' })}
          name='number'
          placeholder='e.g. 1234 5678 9123 0000'
          value={form.number}
        />
        {errs.number && <span className='msg-error'>{errs.number}</span>}
      </label>
      <div className='form-exp-date form-section'>
        <p className='form-section-txt'>
          Exp. date (
          <label htmlFor={inputExpDateMmId}>MM</label>
          /
          <label htmlFor={inputExpDateYyId}>YY</label>
          )
        </p>
        <input
          className='form-input form-input-exp-date-mm'
          type='text'
          onChange={evt => handlerChange({ evt, type: 'number' })}
          name='exp-date-mm'
          id={inputExpDateMmId}
          value={form.expDateMm}
          placeholder='MM'
        />
        <input
          className='form-input form-input-exp-date-yy'
          type='text'
          onChange={evt => handlerChange({ evt, type: 'number' })}
          name='exp-date-yy'
          id={inputExpDateYyId}
          value={form.expDateYy}
          placeholder='YY'
        />
        {(errs.expDateMm || errs.expDateYy) && <span className='msg-error'>{errs.expDateMm || errs.expDateYy}</span>}
      </div>
      <label className='form-cvc form-section'>
        <span className='form-section-txt'>Cvc</span>
        <input
          className='form-input'
          type='text'
          onChange={evt => handlerChange({ evt, type: 'number' })}
          name='cvc'
          value={form.cvc}
          placeholder='e.g. 123'
        />
        {errs.cvc && <span className='msg-error'>{errs.cvc}</span>}
      </label>
      <button className='form-button button' type='submit'>Confirm</button>
    </form>
  )
}
