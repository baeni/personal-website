const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      // catch 404
      { path: ':catchAll(.*)*', component: () => import('pages/Error404Page.vue') }
    ]
  }
]

export default routes
