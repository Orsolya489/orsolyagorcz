const http=require('http'),fs=require('fs'),path=require('path'),url=require('url');
const ROOT=path.join(__dirname,'public');
const T={'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.webm':'video/webm','.pdf':'application/pdf','.webp':'image/webp','.gif':'image/gif','.mp4':'video/mp4'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(url.parse(req.url).pathname);
  if(p.endsWith('/'))p+='index.html';
  // cleanUrls parity with Vercel: /case-study-01-tribe serves case-study-01-tribe.html
  if(!path.extname(p)&&!fs.existsSync(path.join(ROOT,p)))p+='.html';
  const f=path.join(ROOT,p);
  if(!f.startsWith(ROOT)){res.writeHead(403);return res.end('no');}
  const type=T[path.extname(f).toLowerCase()]||'application/octet-stream';
  const nocache={'Cache-Control':'no-store, no-cache, must-revalidate','Pragma':'no-cache'};
  fs.stat(f,(e,st)=>{
    if(e||!st.isFile()){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('404 '+p);}
    // Range requests, so video seeks here the way it does on the host. Without
    // them a browser reports the clip as unseekable and the scrub bar does
    // nothing - which hides seeking bugs locally until they are already live.
    const r=req.headers.range&&/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
    if(r){
      let s=r[1]===''?null:parseInt(r[1],10),e2=r[2]===''?null:parseInt(r[2],10);
      if(s===null){s=Math.max(0,st.size-(e2||0));e2=st.size-1;}   // bytes=-N, the tail
      if(e2===null||e2>st.size-1)e2=st.size-1;
      if(s>e2||s>=st.size){
        res.writeHead(416,{'Content-Range':'bytes */'+st.size});return res.end();
      }
      res.writeHead(206,Object.assign({'Content-Type':type,'Content-Length':e2-s+1,
        'Content-Range':'bytes '+s+'-'+e2+'/'+st.size,'Accept-Ranges':'bytes'},nocache));
      return fs.createReadStream(f,{start:s,end:e2}).pipe(res);
    }
    res.writeHead(200,Object.assign({'Content-Type':type,'Content-Length':st.size,
      'Accept-Ranges':'bytes'},nocache));
    fs.createReadStream(f).pipe(res);
  });
}).listen(4321,()=>console.log('serving public/ on 4321'));
