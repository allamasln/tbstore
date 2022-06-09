/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react'

import * as React from 'react'
import styled from '@emotion/styled/macro'
import * as mq from 'styles/media-queries'
import {SearchBox, SectionHeader, Button, Pagination} from 'components/lib'
import {useTable} from 'utils/table'
import {useProducts} from 'utils/products'
import * as Table from 'components/table'

function CatalogScreen() {
  const [expanded, setExpanded] = React.useState({})
  const products = useProducts()
  const {
    data: filteredProducts,
    searching,
    sorting,
    paging,
    stats,
  } = useTable(products, {
    sortProperty: 'name',
    sortOrder: 'asc',
    queryProperties: ['name', 'vendor.name'],
    itemsPerPage: 10,
  })

  const handleExpand = product =>
    setExpanded(({product: oldProduct}) => {
      const {_id, name, address, city} = product.vendor

      const DetailsHeader = styled.strong({
        textTransform: 'uppercase',
        [mq.small]: {
          display: 'none',
        },
      })
      const DetailsBody = styled.ul({
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0',
        [mq.small]: {
          display: 'list-item',
        },
      })

      return oldProduct === product
        ? {}
        : {
            product,
            details: (
              <Table.Row role="complementary" key={_id}>
                <Table.DetailsCell data-label="Fabricante">
                  <DetailsHeader>Fabricante</DetailsHeader>
                  <DetailsBody>
                    <li>
                      <strong>Empresa:</strong> {name}
                    </li>
                    <li>
                      <strong>Dirección:</strong> {address}
                    </li>
                    <li>
                      <strong>Localidad:</strong> {city}
                    </li>
                  </DetailsBody>
                </Table.DetailsCell>
              </Table.Row>
            ),
          }
    })

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
          value={searching.query}
          onChange={e => searching.setQuery(e.target.value)}
          placeholder="Buscar por producto o fabricante"
        />
      </SectionHeader>

      <Table.Table>
        <Table.Head {...sorting}>
          <Table.Column id="name">Nombre</Table.Column>
          <Table.Column id="priceInfo.amount">Precio</Table.Column>
          <Table.Column id="rating">Rating</Table.Column>
        </Table.Head>
        <Table.Body>
          {filteredProducts.map(product => {
            const {_id, name, priceInfo, rating} = product
            const ProductRow = (
              <Table.Row onClick={() => handleExpand(product)} key={_id}>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{priceInfo.amount}</Table.Cell>
                <Table.Cell>{rating}</Table.Cell>
              </Table.Row>
            )

            return product === expanded.product
              ? [ProductRow, expanded.details]
              : ProductRow
          })}
        </Table.Body>
      </Table.Table>

      <Pagination>
        <Button onClick={paging.prevPage} disabled={paging.isFirstPage}>
          Anterior
        </Button>
        <span css={{padding: '0.8rem 1rem'}}>
          {`${stats.start}-${stats.end} de ${stats.itemsCount}`}
        </span>
        <Button onClick={paging.nextPage} disabled={paging.isLastPage}>
          Siguiente
        </Button>
      </Pagination>
    </>
  )
}

export {CatalogScreen}
