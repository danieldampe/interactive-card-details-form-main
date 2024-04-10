/* eslint-disable react/prop-types */
export function Attribution ({ bgColor = 'inherit' }) {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '8px',
        fontSize: '11px',
        textAlign: 'center',
        backgroundColor: bgColor
      }}
    >
      Challenge by <a style={{ color: 'hsl(228, 45%, 44%)' }} href='https://www.frontendmentor.io?ref=challenge' target='_blank'>Frontend Mentor</a>.
      Coded by <a style={{ color: 'hsl(228, 45%, 44%)' }} href='https://github.com/danieldampe' target='_blank'>danieldampe</a>.
    </footer>
  )
}
