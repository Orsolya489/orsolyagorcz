const http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
const ROOT=path.join(__dirname,'public');
const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.webm':'video/webm','.pdf':'application/pdf','.webp':'image/webp','.gif':'image/gif','.mp4':'video/mp4'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(url.parse(req.url).pathname);
  if(p.endsWith('/'))p+='index.html';
  const f=path.join(ROOT,p);
  if(!f.startsWith(ROOT)){res.writeHead(403);return res.end('no');}
  fs.readFile(f,(e,d)=>{
    if(e){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('404 '+p);}
    res.writeHead(200,{'Content-Type':T[path.extname(f).toLowerCase()]||'application/octet-stream','Cache-Control':'no-store, no-cache, must-revalidate','Pragma':'no-cache'});
    res.end(d);
  });
}).listen(4321,()=>console.log('serving public/ on 4321'));
