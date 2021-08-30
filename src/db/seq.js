/*
 * @Author: your name
 * @Date: 2021-08-18 10:14:31
 * @LastEditTime: 2021-08-20 17:50:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \sequelize-test\src\seq.js
 */
const  Sequelize  = require('sequelize');

const conf = {
    host: 'localhost',
    dialect: 'mysql',
}
conf.pool = {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000 // 如果一个连接池10s没有被使用则释放
}
const seq = new Sequelize('koa2_weibo_db','root','123456',conf)

// seq.authenticate().then(() => {
//     console.log('ok')
// }).catch(err => {
//     console.error(err)
// })

module.exports = seq;

