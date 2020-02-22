export const CLIENT_ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  ARTICLE: id => {
    if (id) {
      return `/article/${id}`;
    } else {
      return `/article/:id`;
    }
  },
  PROJECTS: '/projects'
};
