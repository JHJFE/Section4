const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/api','/api2'], //proxy가 필요한 path prameter를 입력합니다.
    createProxyMiddleware({
      target: 'http://localhost:3080', //타겟이 되는 api url를 입력합니다.
      changeOrigin: true, //대상 서버 구성에 따라 호스트 헤더가 변경되도록 설정하는 부분입니다.
      router:{
        '/api2' : 'http://localhost:3070'
      }
    })
  )
};



// Uncaught (in promise) SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
// 라는 에러 발생 나중에 한번도 확인.. 아마 json 형식의 요청이 안가서 생긴 문제 이거나, 정확하지 않은 포트로 요청을 보내서 생긴 문제 같은데.. 찾지 못함

// fetch 관련한 함수 작성은 페어분이랑 할 듯