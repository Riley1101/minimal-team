export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  fields: [

    {
      name: 'sections',
      type: 'array',
      title: 'Sections',
      of: [
        {
          type: 'home.hero',
          name: 'hero',
        },
        {
            type: 'home.company',
            name : 'company'
        }
      ],
    },
  ],
}
