module.exports = app =>{
  const {router,controller} = app
  router.get('/default/index',controller.default.home.index)
  router.get('/default/getarticle',controller.default.home.getArticleList)
  router.get('/default/getarticleById/:id',controller.default.home.getArticleById)
  router.get('/default/getTypeInfo',controller.default.home.getTypeInfo)
}