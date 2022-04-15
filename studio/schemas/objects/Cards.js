import { CaretCircleDown } from 'phosphor-react'

export default {
  title: 'Card List',
  name: 'cards',
  type: 'object',
  icon: CaretCircleDown,
  fields: [
    {
      title: 'Cards',
      name: 'items',
      type: 'array',
      of: [{ type: 'card' }]
    }
  ],
  preview: {
    select: {
      items: 'items'
    },
    prepare({ items }) {
      return {
        title: 'Card List',
        subtitle: `${items.length} item(s)`
      }
    }
  }
}
