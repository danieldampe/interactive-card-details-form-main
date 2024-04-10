import { useCallback, useState } from 'react'
import camelCase from 'lodash.camelcase'

const FORMATS = {
  number: str => {
    const groups = []
    for (let i = 0; i < str.length; i += 4) {
      groups.push(str.slice(i, i + 4))
    }
    return groups.join(' ')
  },
  'exp-date-mm': str => {
    return (
      ((str.length === 1 && str > 1) && ('0' + str)) ||
      ((str > 12) && (12)) ||
      str
    )
  }
}

const initialForm = {
  name: '',
  number: '',
  expDateMm: '',
  expDateYy: '',
  cvc: ''
}

const initialErrs = {
  name: null,
  number: null,
  expDateMm: null,
  expDateYy: null,
  cvc: null
}

export function useForm () {
  // *** *** *** Variables *** *** ***
  const [form, setForm] = useState(initialForm)
  const [errs, setErrs] = useState(initialErrs)
  const [isComplete, setIsComplete] = useState(false)

  // *** *** *** Functions *** *** ***
  const updateErrs = ({ key, value }) => {
    setErrs(prevState => ({
      ...prevState,
      [camelCase(key)]: value
    }))
  }

  const reset = () => {
    setForm(initialForm)
    setErrs(initialErrs)
    setIsComplete(false)
  }

  // *** *** Functions / Handlers *** ***
  const handlerSubmit = evt => {
    evt.preventDefault()
    Object.values(errs).some(value => value !== false)
      ? setIsComplete(false)
      : setIsComplete(true)
  }

  const handlerChange = useCallback(({ evt, type }) => {
    const regExp = type === 'text'
      ? /^[a-zA-Z ]*$/
      : type === 'number' && /^\d*$/
    const input = evt.target
    const { value, name: key } = input
    const valueWithoutSpaces = value.replaceAll(' ', '')
    // the value is not displayed if...
    if (!(
      !value.startsWith(' ') &&
      regExp.test(valueWithoutSpaces) &&
      (
        (key === 'name') ||
        (key === 'number' && value.length <= (4 * 4 + 3)) ||
        ((key === 'exp-date-mm' || key === 'exp-date-yy') && value.length <= 2) ||
        (key === 'cvc' && value.length <= 3)
      )
    )) return
    // displaying the new values
    const newValue = FORMATS[key] ? FORMATS[key](valueWithoutSpaces) : value
    setForm(prevForm => ({
      ...prevForm,
      [camelCase(key)]: newValue
    }))
    // error is displayed if...
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const century = currentYear.toString().slice(0, 2)
    const msgError = (
      (value === '' && "Can't be blank") ||
      ((key === 'number' && value.length < (4 * 4 + 3)) && 'The card must have 16 digits') ||
      ((key === 'cvc' && value.length < 3) && 'The CVC must be 3 digits') ||
      ((key === 'exp-date-yy' && parseInt(century + value) < currentYear) && 'Wrong Card Date')
    )
    // displaying error
    if (msgError) {
      input.classList.add('error')
      updateErrs({ key, value: msgError })
    } else {
      input.classList.remove('error')
      updateErrs({ key, value: false })
    }
  }, [])

  // *** *** *** Execution *** *** ***
  return { form, errs, isComplete, handlerSubmit, handlerChange, reset }
}
