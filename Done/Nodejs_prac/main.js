var http = require('http');
var fs = require('fs');
var qs = require('querystring')
let html = require('./module.js')
let p = require('path')
var sanitizeHtml = require('sanitize-html');

var app = http.createServer(function(request,response){
    var queryData = new URL('http://localhost:3000' + request.url)
    let path_name = queryData.pathname;
    let path = {'data': './data',
        'createForm': './form_prac.html',
        'updateForm': './form_update.html'}

    if(path_name === '/' || path_name === '/create' || path_name === '/update'){
        html(queryData, path, '').then(data =>{
            response.writeHead(200);
            response.end(data);
        });

    } else if(path_name === '/create_process'){
        let body = '';

        request.on('data', function(data){
            body = body + data;
            if(body.length > 1e6){
                request.connection.destroy();
            }
        });
        request.on('end', function(){
            let post = qs.parse(body);
            let fTitle = p.parse(post.title).base;
            fs.writeFile(`./data/${fTitle}`+'.html', post.desc, 'utf8', function(err){
                if(err){throw err};
                response.writeHead(302, {Location: encodeURI(`/?id=${fTitle}`)});
                response.end();
            })
        });
    } else if(path_name === '/update_process'){
        let body = '';

        request.on('data', function(data){
            body = body + data;
            if(body.length > 1e6){
                request.connection.destroy();
            }
        });
        request.on('end', function(){
            let post = qs.parse(body);
            let fId = p.parse(post.id).base;
            let fTitle = p.parse(post.title).base;
            fs.rename(`./data/${fId}.html`, `./data/${fTitle}.html`, function(err){
                fs.writeFile(`./data/${post.title}.html`, post.desc, 'utf8', function(err){
                    if(err){throw err};
                    response.writeHead(302, {Location: encodeURI(`/?id=${fTitle}`)});
                    response.end();
                })
            })
        });
    } else if(path_name === '/delete') {
        let body = '';
        request.on('data', function(data){
            body = body + data;
            if(body.length > 1e6){
                request.connection.destroy();
            }
        });
        request.on('end', function() {
            let post = qs.parse(body);
            let id = p.parse(post.id).base;
            fs.unlink(`data/${id}.html`, function(){
                response.writeHead(302, {Location: encodeURI(`/`)});
                response.end();
            })
        });
    } else {
        response.writeHead(404);
        response.end();
    }
});
app.listen(3000);