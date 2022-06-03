import styled from '@emotion/styled'
import * as colors from 'styles/colors'

const FlexContainer = styled.div(
  {
    display: 'flex',
  },
  ({alignSelf = 'start'}) => ({
    justifyContent: alignSelf,
  }),
)

const disabledButtonStyles = {
  true: {
    background: colors.gray10,
    color: colors.gray80,
  },
  false: {
    background: colors.blueDarken,
    color: colors.base,
    ':hover': {
      filter: 'brightness(120%)',
    },
  },
}

const Button = styled.button(
  {
    backgroundColor: colors.blueDarken,
    border: '0',
    borderRadius: '3px',
    lineHeight: '1',
    padding: '10px 15px',
    fontWeight: 'bold',
  },
  ({disabled = 'false'}) => disabledButtonStyles[disabled],
)

export {FlexContainer, Button}
