import React from 'react'
import { StyledButton } from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback}) {
  return (
    <div>
          {options.map(option => {
              return <StyledButton key={ option } name={option} onClick={onLeaveFeedback}>{option}</StyledButton>
          })}
    </div>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
