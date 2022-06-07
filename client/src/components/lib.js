/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/react/macro'
import {Link as LinkRouter} from 'react-router-dom'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'
import {FaSpinner, FaSearch} from 'react-icons/fa'
const wrapperGutters = {
  padding: '0px 15%',
  [mq.small]: {
    padding: '0px 1rem',
  },
}

const SectionHeader = styled.div({
  zIndex: '1',
  color: colors.black,
  backgroundColor: colors.base,
  height: '100px',
  padding: '20px 0px',
  width: '100%',
  [mq.small]: {
    height: 'auto',
  },
})
const Pagination = styled.div({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colors.base,
  margin: '1.5rem 0',
  [mq.small]: {
    position: 'sticky',
    marginTop: '3.5rem',
    bottom: '1.5rem',
    justifyContent: 'end',
  },
})
const FlexContainer = styled.div(
  {
    display: 'flex',
  },
  ({alignSelf = 'start'}) => ({
    justifyContent: alignSelf,
  }),
)

const Link = styled(LinkRouter)({color: colors.link})

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


const spin = keyframes({
  '0%': {transform: 'rotate(0deg)'},
  '100%': {transform: 'rotate(360deg)'},
})

const Spinner = styled(FaSpinner)({
  animation: `${spin} 1s linear infinite`,
})
Spinner.defaultProps = {
  'aria-label': 'Cargando...',
}

export {
  wrapperGutters,
  SectionHeader,
  FlexContainer,
  Button,
  Spinner,
  Link,
  Pagination,
}
