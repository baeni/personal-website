const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: 'terms-of-service', component: () => import('pages/TermsOfServicePage.vue') },
      { path: 'privacy-policy', component: () => import('pages/PrivacyPolicyPage.vue') },
      { path: 'imprint', component: () => import('pages/TermsOfServicePage.vue') },

      // catch 404
      { path: ':catchAll(.*)*', component: () => import('pages/Error404Page.vue') }
    ]
  }
]

export default routes
