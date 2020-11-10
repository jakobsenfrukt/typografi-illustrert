export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5faa641bb5793289252455c1',
                  title: 'Sanity Studio',
                  name: 'typografi-illustrert-studio',
                  apiId: '2736a0a0-879d-4d6a-b7c9-88ef23f0a9d9'
                },
                {
                  buildHookId: '5faa641b938db78fc1733d25',
                  title: 'Blog Website',
                  name: 'typografi-illustrert',
                  apiId: 'c36adc75-2eca-4bbb-ae66-a00cf2d110c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elisejakob/typografi-illustrert',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://typografi-illustrert.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
