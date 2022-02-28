import React from 'react'
import PropTypes from 'prop-types'

export default function HelloWorld(props) {
  const {
    greetee = 'World'
  } = props

  return (
    <div>Hello, {greetee}!</div>
  )
}

// See more about PropType validation here:
// https://reactjs.org/docs/typechecking-with-proptypes.html

HelloWorld.propTypes = {
  greetee: PropTypes.string
}