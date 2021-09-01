export default {
  widgets: [
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
                  buildHookId: '612ed29647dcd81dbcbd72ca',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-isvavtsr',
                  apiId: 'a175b448-9ef1-40fd-afa8-8a831be9a417'
                },
                {
                  buildHookId: '612ed297d6525122a4d95701',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-syqurzzi',
                  apiId: '466dbbc8-bb01-4b85-b440-ecd84dd6ad30'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/syphronix/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-syqurzzi.netlify.app', category: 'apps'}
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
