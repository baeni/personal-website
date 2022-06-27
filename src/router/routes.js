const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: 'imprint', component: () => import('pages/ImprintPage.vue') },
      { path: 'privacy-policy', component: () => import('pages/ImprintPage.vue') },

      // catch 404
      { path: ':catchAll(.*)*', component: () => import('pages/Error404Page.vue') }
    ]
  }
]

export default routes
