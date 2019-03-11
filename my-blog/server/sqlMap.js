
var sqlMap = {
  single: {
    add: 'insert into blog_single(title,author,categroy,content,time) values (?,?,?,?,?)',
    delete: 'delete from reader where id = ?',
    search: 'select * from reader where id = ?' //查找读者信息
  }
}
module.exports = sqlMap;
