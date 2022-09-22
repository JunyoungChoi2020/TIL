from pymongo import MongoClient
import jwt
import datetime
import hashlib
from flask import Flask, render_template, jsonify, request, redirect, url_for
from werkzeug.utils import secure_filename
from datetime import datetime, timedelta

# client = MongoClient('mongodb+srv://test1:sparta@cluster0.5ju0bxd.mongodb.net/?retryWrites=true&w=majority')
# client = MongoClient('mongodb://43.200.175.131', 27017, username="test", password="test")
client = MongoClient('mongodb+srv://JYChoi:wnsdn123@cluster0.uzxmk.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

app = Flask(__name__)
app.config["TEMPLATES_AUTO_RELOAD"] = True
app.config['UPLOAD_FOLDER'] = "./static/profile_pics"

SECRET_KEY = 'SPARTA'

@app.route('/')
def home():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        user_info = db.users.find_one({"username": payload["id"]})
        return render_template('index.html', user_info=user_info)
    except jwt.ExpiredSignatureError:
        return redirect(url_for("login", msg="로그인 시간이 만료되었습니다."))
    except jwt.exceptions.DecodeError:
        return redirect(url_for("login", msg="로그인 정보가 존재하지 않습니다."))

@app.route('/index')
def detail():
    return render_template("index.html")
#
# @app.route('/detail')
# def detail():
#     return render_template("detail.html")

@app.route('/login')
def login():
    return render_template("login.html")


@app.route("/project01", methods=["POST"])
def comment_post():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        comment_receive = request.form['comment_give']

        doc = {
            'username': payload['id'],
            'comment': comment_receive
        }
        db.project01.insert_one(doc)

        return jsonify({"result": "success", 'msg': '후기 등록 완료!'})
    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))


@app.route("/project01", methods=["GET"])
def comment_get():
    comment_list = list(db.project01.find({}, {'_id': False}))
    return jsonify({'comment': comment_list})

if __name__ == '__main__':
   app.run('0.0.0.0',port=5500,debug=True)
