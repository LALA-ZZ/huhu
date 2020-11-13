import axios from 'axios'

// export function request(config,success,failure){//success,failure分别是一个函数
//   const instance1 = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//   instance1(config).then(res =>{
//     success(res)//函数将结果回调出去
//   }).catch(err =>{
//     failure(err)//函数将结果回调
//   })
// }

// export function request(config){//success,failure分别是一个函数
//   return new Promise((resolve, reject) =>{
//     const instance1 = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     instance1(config)
//       .then(res =>{
//         resolve(res)//函数将结果回调出去
//       })
//       .catch(err =>{
//         reject(err)//函数将结果回调
//       })
//   })
// }

export function request(config){//success,failure分别是一个函数
  //1.创建axios实例
    const instance1 = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
  //2.对axios请求进行拦截
  //2.1请求拦截
  instance1.interceptors.request.use(aaa =>{
    // console.log(aaa);
    //请求拦截的作用
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求（比如登录需要token），必须写到一些特定的信息。
    return aaa;//拦截后，做完一些处理之后，必须将请求返回出去。
  })
  //2.2 响应拦截
  instance1.interceptors.response.use(result =>{
    // console.log(result);
    return result.data; //将响应后结果中的data返回出去
  },err =>{
    console.log(err);
  })

  //3.发送真正的网络请求
    return instance1(config)//返回的是一个promise
}
