const http=require('http');

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
    console.log('here')
}).listen(8080,()=>{
    console.log('8080 포트에서 서버 대기 중입니다!');
});