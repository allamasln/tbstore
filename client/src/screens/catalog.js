/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import * as React from 'react'
import * as mq from 'styles/media-queries'
import * as colors from 'styles/colors'
import {
  SearchBox,
  SectionHeader,
  Button,
  Pagination,
  collapse,
} from 'components/lib'
import {useTable} from 'utils/table'
import {useProducts} from 'utils/products'
import * as Table from 'components/table'

function CatalogScreen() {
  const [expandedProduct, setExpandedProduct] = React.useState({})

  const posts = useProducts()
  const {data: products, paging, stats} = useTable(posts, {itemsPerPage: 10})

  const handleSearchQuery = query => setSearchQuery(query)

  const expandProduct = product =>
    setExpandedProduct(oldExpandedProduct =>
      oldExpandedProduct === product ? null : product,
    )

  return (
    <>
      <SectionHeader
        css={{
          position: 'sticky',
          top: '0',
          display: 'grid',
          gridTemplateAreas: "'title search'",
          gridGap: '1rem',
          '>[role="search"]': {
            gridArea: 'search',
          },
          [mq.small]: {
            gridTemplateAreas: "'search' 'title'",
          },
        }}
      >
        <h2>Catálogo de productos</h2>
        <SearchBox
          type="search"
          name="query"
          onChange={handleSearchQuery}
          placeholder="Buscar por producto o fabricante"
        />
      </SectionHeader>

      <Table.Table>
        <Table.Head>
          <Table.Row>
            <Table.Column>IDUsuario</Table.Column>
            <Table.Column>ID</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Body</Table.Column>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {products.map(product => {
            let productRows = [
              <Table.Row
                onClick={() => expandProduct(product)}
                key={product.id}
              >
                <Table.Cell>{product.userId}</Table.Cell>
                <Table.Cell>{product.id}</Table.Cell>
                <Table.Cell>{product.title}</Table.Cell>
                <Table.Cell>{product.body}</Table.Cell>
              </Table.Row>,
            ]

            if (product === expandedProduct) {
              productRows = [
                ...productRows,
                <Table.Row
                  role="complementary"
                  key={product.id + 'df'}
                  css={{
                    pointerEvents: 'none',
                    animation: `${collapse} 0.4s ease 1`,
                    '&&': {
                      backgroundColor: colors.yellowLighten10,
                    },
                  }}
                >
                  <Table.DetailsCell colSpan="4" data-label="Fabricante">
                    asdfsa
                  </Table.DetailsCell>
                </Table.Row>,
              ]
            }

            return productRows
          })}
        </Table.Body>
      </Table.Table>
      <Pagination>
        <Button onClick={paging.prevPage} disabled={paging.isFirstPage}>
          Anterior
        </Button>
        <span
          css={{
            pointerEvents: 'none',
            background: 'none',
            color: colors.text,
            fontWeight: 'normal',
            lineHeight: '1',
            padding: '0.8rem 1rem',
          }}
        >{`${stats.start}-${stats.end} de ${stats.itemsCount}`}</span>
        <Button onClick={paging.nextPage} disabled={paging.isLastPage}>
          Siguiente
        </Button>
      </Pagination>
    </>
  )
}

export {CatalogScreen}
