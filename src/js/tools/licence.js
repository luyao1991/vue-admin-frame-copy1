var CryptoJS = require('crypto-js')
var key = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdq/2GqScIFZalW2g1uSFeYmAD3rcP6jTYS6N/rEsFRS7I01KX26RqI0WpBrmsdX1Mh9y/ms0iRi2vxfFGB7Vg92QqyF5yIocYy4fKgw8SqmSQyF7d0MeuJvtYHSgNc8QOSmyJpc+jm7FMnOAqPoB5axyN6D3u0glMjIOamWM/AQIDAQAB'
let publicKey = '-----BEGIN PUBLIC KEY-----' + key + '-----END PUBLIC KEY-----' // 从后台获取公钥，这里省略，直接赋值
export default() => {
  let a = CryptoJS.AES.encrypt('2010-12-26|2018-12-26|192.168.12.12|00gWGn12TY1vEiI5', publicKey).toString()
  var originalText = a.toString(CryptoJS.enc.Utf8)
  console.log(publicKey)
  let b = CryptoJS.AES.decrypt(originalText, publicKey)
  console.log(b.toString(CryptoJS.enc.Utf8))
  var licence = true
  if (licence) {
    var node = document.createElement('div')
    node.style = 'background-color:red; position: fixed; bottom: 0;  z-index: 999;  width: 100vw; height:100vh;  text-align: center;  color: #fff; height:50px; line-height:50px; font-size:20px'
    var textnode = document.createTextNode('软件已到期，请联系开发者授权')
    node.appendChild(textnode)
    // document.body.appendChild(node)
  }
}
