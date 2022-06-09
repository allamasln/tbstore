/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import styled from '@emotion/styled/macro'
import {keyframes} from '@emotion/react/macro'
import {Link as LinkRouter} from 'react-router-dom'
import * as colors from 'styles/colors'
import * as mq from 'styles/media-queries'
import {FaSpinner, FaSearch, FaAngleUp} from 'react-icons/fa'

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

const Link = styled(LinkRouter)({color: colors.link})

const TableBase = styled.table({
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
  width: '100%',
})
const THead = styled.thead({
  position: 'sticky',
  top: '100px',
  zIndex: '1',

  [mq.small]: {
    position: 'fixed',
    bottom: '60px',
    right: '1rem',
    top: 'initial',
  },
})

const collapse = keyframes({
  from: {
    transform: 'scaleY(0)',
    lineHeight: 0,
  },
  '40%': {
    transform: 'scaleY(1)',
    lineHeight: 1,
  },
})

const zoomInOut = keyframes({
  '0%': {transform: 'scale(1)'},
  '30%': {transform: 'scale(0.98)'},
})

const TBody = styled.tbody({
  zIndex: '0',
  '>:nth-of-type(even)': {
    backgroundColor: colors.gray10,
  },
  '>:hover:not([role="complementary"])': {
    backgroundColor: colors.highlight,
    cursor: 'pointer',
  },
  '>:active': {
    animation: `${zoomInOut} ease .4s`,
  },
  [mq.small]: {
    '>tr': {
      border: `3px solid ${colors.gray}`,
    },
    '>:nth-of-type(even):hover': {
      animation: 'none',
      backgroundColor: colors.gray10,
    },
    '>:nth-of-type(odd):hover': {
      animation: 'none',
      backgroundColor: 'inherit',
    },
  },
})
const TR = styled.tr({
  '&[role="complementary"]': {
    padding: '0',
    pointerEvents: 'none',
    animation: `${collapse} 0.4s ease 1`,
    '&&': {
      backgroundColor: colors.yellowLighten10,
    },
  },
  [mq.small]: {
    display: 'block',
    marginBottom: '.625em',
    '& + [role="complementary"]': {
      marginTop: '-.625em',
      borderTop: '0',
    },
  },
})
const TH = styled.th({
  fontSize: '0.75rem',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  padding: '0.8rem 1rem',
  background: colors.gray80,
  color: colors.base,
  cursor: 'pointer',
  ':hover > * ': {
    visibility: 'visible',
  },
})

const TD = styled.td({
  padding: '0.9rem 1rem',
  color: colors.black,
  [mq.small]: {
    borderBottom: '1px solid #ddd',
    display: 'block',
    fontSize: '.8em',
    textAlign: 'right',
    ':before': {
      content: 'attr(data-label)',
      float: 'left',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    ':last-of-type': {
      borderBottom: 0,
    },
  },
})

const arrowDirection = {
  asc: {transform: 'rotate(0)'},
  desc: {transform: 'rotate(180deg)'},
  false: {
    color: colors.base,
    visibility: 'hidden',
  },
}

const SortIcon = styled(FaAngleUp)(
  {
    transition: 'transform 0.2s',
    color: colors.blueLighten10,
    marginLeft: '5px',
  },
  ({sortorder = 'false'}) => arrowDirection[sortorder],
)

const disabledButtonStyles = {
  true: {
    background: colors.gray10,
    color: colors.gray80,
  },
  false: {
    background: colors.blueDarken20,
    color: colors.base,
    ':hover': {
      filter: 'brightness(120%)',
    },
  },
}

const Button = styled.button(
  {
    backgroundColor: colors.blueDarken20,
    border: '0',
    borderRadius: '3px',
    lineHeight: '1',
    padding: '0.8rem 1rem',
    fontWeight: 'bold',
  },
  ({disabled = 'false'}) => disabledButtonStyles[disabled],
)

const Input = styled.input({
  border: `2px solid ${colors.gray10}`,
  borderRadius: '3px',
  background: colors.gray,
  padding: '0.8rem 1rem',
  width: '100%',
  ':hover,:focus': {
    filter: 'brightness(102%)',
  },
})

function SearchBox(props) {
  return (
    <form
      role="search"
      css={{
        display: 'grid',
        placeItems: 'center right',
        '> *': {
          gridArea: '1 / 1',
          zIndex: '0',
        },
      }}
      autoComplete="off"
    >
      <Input {...props} />
      <FaSearch css={{marginRight: '1rem'}} size="23" />
    </form>
  )
}

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

function FullPageErrorFallback({error}) {
  return (
    <div
      role="alert"
      css={{
        color: colors.danger,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Ops! Problema detectado:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export {
  FullPageErrorFallback,
  wrapperGutters,
  SectionHeader,
  Button,
  Input,
  SearchBox,
  TableBase,
  THead,
  TBody,
  TR,
  TH,
  TD,
  Spinner,
  Link,
  Pagination,
  collapse,
  SortIcon,
}
