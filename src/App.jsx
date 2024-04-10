import './App.css'
import { CardBack } from './components/CardBack.jsx'
import { CardFront } from './components/CardFront.jsx'
import { Form } from './components/Form.jsx'
import { Complete } from './components/Complete.jsx'
import { Attribution } from './components/Attribution.jsx'
import { useForm } from './hooks/useForm.js'

export default function App () {
  const formProps = useForm()

  return (
    <>
      <div className='interactive-card-details'>
        <div className='interactive-card-details-top'>
          <div className='interactive-card-details-top-content'>
            <CardBack form={formProps.form} />
            <CardFront form={formProps.form} />
          </div>
        </div>
        <div className='interactive-card-details-bottom'>
          {
          formProps.isComplete
            ? <Complete reset={formProps.reset} />
            : <Form {...formProps} />
        }
        </div>
      </div>
      <Attribution />
    </>
  )
}
