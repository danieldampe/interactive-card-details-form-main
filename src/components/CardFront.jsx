/* eslint-disable react/prop-types */
import '../styles/CardFront.css'

export function CardFront ({ form }) {
  return (
    <div className='card-front card'>
      <header className='card-front-hdr'>
        <img className='card-front-logo' src='/images/card-logo.svg' alt='Card Logo' />
      </header>
      <div className='card-front-body'>
        <div className='card-front-number'>
          {form.number || '0000 0000 0000 0000'}
        </div>
      </div>
      <footer className='card-front-ftr'>
        <div className='card-front-name'>
          {form.name || 'Jane Appleseed'}
        </div>
        <div className='card-front-exp-date'>
          {form.expDateMm || '00'}/{form.expDateYy || '00'}
        </div>
      </footer>
    </div>
  )
}
