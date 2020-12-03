module.exports = (options, app) =>{
  return async function adminauth(ctx,next){
      console.log(ctx.session.openId)
      // console.log(ctx.session.opts)
      if(ctx.session.openId){
        debugger
          await next()
      }else{
        // await next()
          ctx.body={data:'没有登录'}                       
      }
  }
}