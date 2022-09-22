from flask import Flask, render_template, request, jsonify, make_response
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://JYChoi:wnsdn123@cluster0.uzxmk.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta
user = db.user
movie = db.movie

@app.route('/')
def home():
   return render_template('index.html')

@app.route("/userinfo", methods=["GET"])
def homework_get():
    order_list = list(user.find())
    return jsonify(order_list)

@app.route("/signUpProcess", methods=["POST"])
def sign_in_process():
    users = list(user.find())
    request_email = request.form['email']
    duplicated = False

    for data in users:
        if data['email'] == request_email:
            duplicated = True
            break

    if duplicated is not True:
        doc = {
            'email': request.form['email'],
            'password': request.form['password'],
            'nickname': request.form['nickname'],
            'token': False,
        }

        user_db = user.insert_one(doc)
        return jsonify({'userId': user_db.inserted_id})
    else:
        return ''

@app.route("/signUpProcess/movieDbProcess", methods=["POST"])
def movie_user_link():
    doc = {
        'userId': request.form['userId'],
        'movie': {
            'movieId': '',
            'name': [],
            'uploadTime': [],
            'link': [],
            'thumbnailImage': [],
            'category': []
        }
    }

@app.route('/loginProcess', methods=["POST"])
def login():
    doc = {
        'no_email': True,
        'wrong_password': False,
        'userId': ''
    }

    requested_email = request.form['email']
    requested_password = request.form['password']

    users = list(user.find())
    for data in users:
        if data['email'] == requested_email:
            doc['no_email'] = False;

            if data['password'] == requested_password:
                user.update_one({"email": data['email']}, {"$set": {"token": True}})

                resp = make_response(render_template("index.html"));
                resp.set_cookie('token', True)

                print('login success')
                break
            else:
                doc['wrong_password'] = True
                break

    return jsonify(doc)

@app.route('/cookie_data')
def result():
    return request.cookies.get('token')
#
# @app.route('/logout', methods=["POST"])
# def logout():


if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)