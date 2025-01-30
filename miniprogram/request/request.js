// const baseUrl = `http://39.105.227.198:3000`
const baseUrl = `http://127.0.0.1:3000`

export const request = async (path, method) => {
  console.log(`${baseUrl + path}`, method)
  return new Promise ((resolve, reject) => {
    wx.request({
      url: `${baseUrl + path}`,
      method: method,
      success (res) {
        resolve (res)
      }
    }) 
  })
}