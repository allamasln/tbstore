/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import {SectionHeader} from 'components/lib'

function NotFoundScreen() {
  return (
    <SectionHeader>
      <h2>
        Oops! <strong>404</strong> Página no encontrada.
      </h2>
    </SectionHeader>
  )
}

export {NotFoundScreen}
