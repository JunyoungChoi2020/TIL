var http = require('http');
var fs = require('fs');
var url = require('url');

function langs(path_data){
    let html_languages = `<ul>`;

    let list_file = fs.readdirSync(path_data)

    for(let i= 0; i<list_file.length; i++){
        let fileName = list_file[i].split('.')[0];
        html_languages = html_languages + `<li><a href="/?id=${fileName}">${fileName}</a></li>`
    }
    html_languages = html_languages + `</ul>`
    return html_languages;

}

var app = http.createServer(function(request,response){
    var queryData = new URL('http://localhost:3000' + request.url)

    if(queryData.pathname === '/'){
        let getId = queryData.searchParams.get('id')

        let file_name;
        let title;
        let path_data = './data'
        let html_languages = langs(path_data);

        if(getId === null){
            file_name = 'data/';
            title = 'Welcome';
        } else {
            title = getId;
            file_name = 'data/' + title + '.html';
        }

        fs.readFile(file_name, 'utf8', function(err, description){
            let desc;
            if(description !== undefined){
                desc = description
            } else {
                desc = 'Hello, nodeJs.'
            }

            let template = `
            <!doctype html>
              <html>
              <head>
                <title>WEB1 - ${title}</title>
                <meta charset="utf-8">
              </head>
              <body>
                <h1><a href="/">WEB</a></h1>
                ${html_languages}
                <h2>${title}</h2>
                <p>${desc}</p>
              </body>
              </html>
            `
            response.writeHead(200);
            response.end(template);
    })
    } else {
        response.writeHead(404);
        response.end();
    }


});
app.listen(3000);