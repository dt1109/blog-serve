use 'strict'
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
   
   this.ctx.body = 'api';
  }
  //文章列表
  async getArticleList(){
      let sql = 'SELECT article.id as id ,'  +
      'article.title as title ,' +
      'article.introduce_html as introduce_html ,' +
      "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime ," +
      'article.view_count as view_count ,' +
      'article.article_content as article_content ,' +
      'type.typeName as typeName ' +
      'FROM article LEFT JOIN type ON article.type_id = type.Id'
      const results = await this.app.mysql.query(sql)
      this.ctx.body = {data:results}
  }
  // 获取文章详细内容
   async getArticleById(){
      //  let id = this.ctx.params.id
      //  console.log(id)
      //  let sql = 'SELECT article.id as id ,'  +
      //  'article.title as title ,' +
      //  'article.introduce as introduce ,' +
      //  "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s') as addTime ," +
      //  'article.view_count as view_count ,' +
      //  'article.article_content as article_content ,' +
      //  'type.typeName as typeName ,' +
      //  'type.id as typeId ' +
      //  'FROM article LEFT JOIN type ON article.type_id = type.Id ,' +
      //  'WHERE article.id = ' + id
      //  const reslut = await this.app.mysql.query(sql)
      //  this.ctx.body = {data:reslut}
       //先配置路由的动态传值，然后再接收值
       let id = this.ctx.params.id

       let sql = 'SELECT article.id as id,'+
       'article.title as title,'+
       'article.introduce as introduce,'+
       'article.article_content as article_content,'+
       "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
       'article.view_count as view_count ,'+
       'type.typeName as typeName ,'+
       'type.id as typeId '+
       'FROM article LEFT JOIN type ON article.type_id = type.Id '+
       'WHERE article.id='+id



       const result = await this.app.mysql.query(sql)


       this.ctx.body={data:result}
   }
  // 得到类别名称和编号
   
  //得到类别名称和编号
  async getTypeInfo(){
    const result = await this.app.mysql.select('type')
    this.ctx.body = {data:result}

  }
}
//RESETfFULL

module.exports = HomeController;
