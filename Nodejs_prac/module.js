var fs = require('fs');
let p = require('path')
var sanitizeHtml = require('sanitize-html');

const html = {
    langs: function(path_data){
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
    },
    template: function(queryData, path, description){
        let html_languages = html.langs(path['data'])
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
                getId = sanitizeHtml(p.parse(getId).base);
                title = getId;
                desc = sanitizeHtml(fs.readFileSync(path['data'] + '/' +getId + '.html'))
                html_form = '';
                html_cud = `<a href="/create">create</a> <a href="/update?id=${getId}">update</a>
                            <form action="/delete" method="post">
                                <input type="hidden" name="id" value=${getId}>
                                <input type="submit" value="delete">
                            </form>`
            }

        } else if (path_name === '/create'){
            title = ''
            desc = '';
            html_form = fs.readFileSync(path['createForm']);
            html_cud = '';

        } else if (path_name === '/update'){
            title = '';
            desc = '';
            getId = sanitizeHtml(getId)
            let temp_title = "placeholder=" + getId;
            let temp_desc = "placeholder=" + sanitizeHtml(fs.readFileSync(path['data'] + '/' +getId + '.html'));
            html_form = sanitizeHtml(fs.readFileSync(path['updateForm']).toString('utf-8'));
            html_form = html_form.replace("hidden_id_is_in_here", getId);
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
}

module.exports = html.template;
