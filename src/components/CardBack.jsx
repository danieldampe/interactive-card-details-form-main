/* eslint-disable react/prop-types */
import '../styles/CardBack.css'

export function CardBack ({ form }) {
  return (
    <div className='card-back card'>
      <span className='card-back-cvc'>{form.cvc || '000'}</span>
    </div>
  )
}
