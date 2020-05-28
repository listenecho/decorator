/*
 * @Author: your name
 * @Date: 2020-05-28 15:22:42
 * @LastEditTime: 2020-05-28 16:14:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \decorator\test.js
 */ 
@transform
class IronMan {
  // ...
}

function transform(target) {
 console.log(target)
}

console.log(IronMan.weapon)

 
