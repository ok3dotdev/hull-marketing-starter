import { CaretCircleDown } from 'phosphor-react'

export default {
  title: 'Card',
  name: 'card',
  type: 'object',
  icon: CaretCircleDown,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'simplePortableText'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
