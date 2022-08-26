var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring')

function langs(path_data){
    let html_languages = `<ul>`;
    let oriVals = [];
    let oriKeys = [];
    let sortedKeys = [];

    let list_file = fs.readdirSync(path_data)
    let sorted_langsList = new Array(list_file.length);

    for(let i= 0; i<list_file.length; i++){
        let fileName = list_file[i].split('.')[0];
        let temp_filestats = fs.statSync(path_data + '/' + list_file[i]);
        oriVals.push(fileName);
        oriKeys.push(temp_filestats.mtime);
        sortedKeys.push(temp_filestats.mtime);
    }

    sortedKeys = sortedKeys.sort(function(a, b){
        return a-b;
    });

    for(let j= 0; j<oriKeys.length; j++){
        for(let k= 0; k<sortedKeys.length; k++){
            if(oriKeys[j] == sortedKeys[k]){

                sorted_langsList[k] = oriVals[j];
                break;
            }
        }
    }
    for(let q= 0; q<sorted_langsList.length; q++){
        let id = sorted_langsList[q]
        html_languages = html_languages + `<li><a href="/?id=${id}">${id}</a></li>`
    }

    html_languages = html_languages + `</ul>`
    return html_languages;
}

function html_template(queryData, path, description){
    let html_languages = langs(path['data'])
    let getId = queryData.searchParams.get('id');
    let path_name = queryData.pathname;
    let html_form;
    let html_cud;
    let desc;
    let title;

    if(path_name === '/'){
        if(getId === null){
            title = "Welcome"
            desc = "Hello, NodeJs."
            html_form = '';
            html_cud = `<a href="/create">create</a>`
        } else {
            title = getId;
            desc = fs.readFileSync(path['data'] + '/' +getId + '.html')
            html_form = '';
            html_cud = `<a href="/create">create</a> <a href="/update?id=${getId}">update</a>`
        }

    } else if (path_name === '/create'){
        title = ''
        desc = '';
        html_form = fs.readFileSync(path['createForm']);
        html_cud = '';

    } else if (path_name === '/update'){
        title = '';
        desc = '';
        let temp_title = "placeholder=" + getId;
        let temp_desc = "placeholder=" + fs.readFileSync(path['data'] + '/' +getId + '.html')
        html_form = fs.readFileSync(path['updateForm']).toString('utf-8')
        html_form = html_form.replace("hidden_id_is_in_here", getId)
        html_form = html_form.replace("placeholder=\"title\"", temp_title);
        html_form = html_form.replace("placeholder=\"description\"", temp_desc);
        html_cud = '';
    }

    return `
        <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            ${html_languages}
            ${html_cud}
            ${html_form}
            <h2>${title}</h2>
            <p>${desc}</p>
          </body>
          </html>
        `
}

var app = http.createServer(function(request,response){
    var queryData = new URL('http://localhost:3000' + request.url)
    let getId = queryData.searchParams.get('id')
    let file_name;

    let path_name = queryData.pathname;
    let path = {'data': './data',
        'createForm': './form_prac.html',
        'updateForm': './form_update.html'}

    if (getId === null) {
        file_name = 'data/';
    } else {
        file_name = 'data/' + getId + '.html';
    }

    if(path_name === '/'){
        fs.readFile(file_name, 'utf8', function(err, description){
            let template = html_template(queryData, path, description);
            response.writeHead(200);
            response.end(template);
    })

    } else if(path_name === '/create'){
        let template = html_template(queryData, path, '');
        response.writeHead(200);
        response.end(template);

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

            fs.writeFile(`./data/${post.title}`+'.html', post.desc, 'utf8', function(err){
                if(err){throw err};
                response.writeHead(302, {Location: encodeURI(`/?id=${post.title}`)});
                response.end();
            })
        });

    } else if(path_name === '/update'){
        let template = html_template(queryData, path, '');
        response.writeHead(200);
        response.end(template);

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
            fs.rename(`./data/${post.id}.html`, `./data/${post.title}.html`, function(err){
                fs.writeFile(`./data/${post.title}.html`, post.desc, 'utf8', function(err){
                    if(err){throw err};
                    response.writeHead(302, {Location: encodeURI(`/?id=${post.title}`)});
                    response.end();
                })
            })
        });
    } else {
        response.writeHead(404);
        response.end();
    }


});
app.listen(3000);