/* eslint-disable react/prop-types */
import '../styles/Complete.css'

export function Complete ({ reset }) {
  return (
    <div className='complete'>
      <header className='complete-hdr'>
        <img src='/images/icon-complete.svg' alt='Icon Complete' />
      </header>
      <div className='complete-body'>
        <h2 className='complete-title'>Thank you!</h2>
        <p className='complete-txt'>We've added your card details</p>
      </div>
      <footer className='complete-ftr'>
        <button
          className='complete-button button'
          onClick={reset}
        >
          Continue
        </button>
      </footer>
    </div>
  )
}
