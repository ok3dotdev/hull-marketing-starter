import React, { useState } from 'react'

import Card from "./card"
import BlockContent from '@components/block-content'

const CardList = ({ data }) => {
  const { items } = data



  return (
    <div className="card-group grid sm:grid-cols-3">
      {items.map((card, key) => {
          {console.log(card.content)}
        return (
          <Card
            key={key}
            id={card.id}
            title={card.title}
          >
            <BlockContent blocks={card.content} />
          </Card>
        )
      })}
    </div>
  )
}

export default CardList
