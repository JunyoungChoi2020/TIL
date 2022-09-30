from flask import Flask, render_template, request, jsonify, redirect, url_for
from pymongo import MongoClient
import jwt
import datetime
import hashlib
import json
from datetime import datetime, timedelta
import hashlib
from werkzeug.utils import secure_filename
from bson import json_util

app = Flask(__name__)

client = MongoClient('mongodb+srv://JYChoi:wnsdn123@cluster0.uzxmk.mongodb.net/?retryWrites=true&w=majority')
db = client.gyms
posts = db.mypost
user = db.users
dajim = db.dajim
comment = db.comment
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

@app.route('/api/posts/upload', methods=["POST"])
def save_gym():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload["id"]
        gym_info = json.loads(request.form['doc'])
        doc = {
            "place_name": gym_info['place_name'],
            "address": gym_info['address'],
            "id": gym_info['id'],
            "phone": gym_info['phone'],
            "place_url": gym_info['place_url'],
            "road_address": gym_info['road_address'],
            "x": gym_info['x'],
            "y": gym_info['y'],
            "image_url": gym_info['image_url'],
            "user_id": username
        }
        posts.insert_one(doc)
        return jsonify({"result":"success", 'msg': "찜 리스트에 추가하였습니다."})
    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))


@app.route('/api/posts/delete', methods=["POST"])
def delete_gym():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload["id"]
        gym_info = json.loads(request.form['doc'])
        doc = {
            "place_name": gym_info['place_name'],
            "address": gym_info['address'],
            "id": gym_info['id'],
            "phone": gym_info['phone'],
            "place_url": gym_info['place_url'],
            "road_address": gym_info['road_address'],
            "x": gym_info['x'],
            "y": gym_info['y'],
            "image_url": gym_info['image_url'],
            "user_id": username
        }
        posts.delete_one(doc)
        return jsonify({"result": "success", 'msg': "성공적으로 삭제되었습니다."})
    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))
@app.route('/api/posts/search', methods=["GET"])
def search_gym():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload["id"]
        all_post = (posts.find({"user_id": username}, {"_id": False}))
        data = []
        for post in all_post:
            data += [post]

        return data
    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))
@app.route('/main', methods=["GET"])
def main():
    return render_template("index.html")


@app.route('/api/posts/post_exist_check', methods=["POST"])
def check_post_exist():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload['id']
        docs = json.loads(request.form['gymsInfoList'])
        all_post = posts.find({"user_id": username})
        check_list = [False] * len(docs)

        for post in all_post:
            counter = 0
            for doc in docs:
                if (doc["place_name"] == post["place_name"]) and (doc["address"] == post["address"]):
                    check_list[counter] = True
                    break

                counter += 1

        return jsonify({"result": "success", "checkList": check_list})
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))

@app.route('/user/<username>')
def user(username):
    # 각 사용자의 프로필과 글을 모아볼 수 있는 공간
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        status = (username == payload["id"])  # 내 프로필이면 True, 다른 사람 프로필 페이지면 False

        user_info = db.users.find_one({"username": username}, {"_id": False})
        return render_template('user.html', user_info=user_info, status=status)
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))
@app.route('/api/user/login', methods=['POST'])
def sign_in():
    # 로그인
    username_receive = request.form['username_give']
    password_receive = request.form['password_give']

    pw_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    result = db.users.find_one({'username': username_receive, 'password': pw_hash})

    if result is not None:
        payload = {
         'id': username_receive,
         'exp': datetime.utcnow() + timedelta(seconds=60 * 60 * 24)  # 로그인 24시간 유지
        }
        token = jwt.encode(payload, SECRET_KEY, algorithm='HS256').decode('utf-8')
        # token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')

        return jsonify({'result': 'success', 'token': token})
    # 찾지 못하면
    else:
        return jsonify({'result': 'fail', 'msg': '아이디/비밀번호가 일치하지 않습니다.'})

@app.route('/api/dajim/upload', methods=['POST'])
def save_dajim():
    content_receive = request.form['content_give']

    doc = {
        'content': content_receive
    }

    db.dajim.insert_one(doc)
    return jsonify({'result': 'success', 'msg': "오늘의 다짐이 등록되었습니다."})
@app.route('/api/dajim/show', methods=['GET'])
def show_dajim():
    query = {'$sample': {'size': 1}}
    cursor = list(db.dajim.aggregate([query]))[0]['content']
    return jsonify({'data': cursor})

@app.route('/api/user/signup', methods=['POST'])
def sign_up():
    username_receive = request.form['username_give']
    # nickname_receive = request.form['nickname_give']
    password_receive = request.form['password_give']
    password_hash = hashlib.sha256(password_receive.encode('utf-8')).hexdigest()
    doc = {
        "username": username_receive,                               # 아이디
        # "nickname": nickname_receive,                               # 닉네임
        "password": password_hash,                                  # 비밀번호
        "profile_name": username_receive,                           # 프로필 이름 기본값은 아이디
        "profile_pic": "",                                          # 프로필 사진 파일 이름
        "profile_pic_real": "profile_pics/profile_placeholder.png", # 프로필 사진 기본 이미지
        "profile_info": "",                                          # 프로필 한 마디
        "user_currunt_address": '구리시'
    }
    db.users.insert_one(doc)
    return jsonify({'result': 'success'})

@app.route('/api/user/location', methods=['POST'])
def enroll_loc():
    token_receive = request.cookies.get('mytoken')
    addr = request.form['myAddress']
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload['id']
        db.users.update_one({"username": username}, {"$set" : {"user_currunt_address": addr}})
        return jsonify({'result': 'success'})
    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))

@app.route('/api/user/location', methods=['GET'])
def return_loc():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload['id']
        user_info = db.users.find_one({"username": username}, {"_id": False})
        for_return_data = user_info['user_currunt_address']
        return jsonify({'address': for_return_data })
    except(jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))


@app.route('/api/user/signup/check_dup', methods=['POST'])
def check_dup():
    username_receive = request.form['username_give']
    # nickname_receive = request.form['nickname_give']
    exists = bool(db.users.find_one({"username": username_receive}))
    return jsonify({'result': 'success', 'exists': exists})

@app.route('/api/comment/upload', methods=['POST'])
def comment_upload():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload['id']
        doc = {
            'comment': request.form['comment_give'],
            'user_id': username,
            'place_name': request.form['place_name']
        }
        comment.insert_one(doc)
    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))
@app.route('/api/comment/show/', methods=['POST'])
def comment_show():
    token_receive = request.cookies.get('mytoken')
    try:
        payload = jwt.decode(token_receive, SECRET_KEY, algorithms=['HS256'])
        username = payload['id']
        user_comments = list(comment.find({'place_name': request.form['place_name']}))
        value = {}

        for user_comment in user_comments:
            value[user_comment['user_id']] = user_comment['comment']

        return jsonify({"result": "success", "value": value})

    except (jwt.ExpiredSignatureError, jwt.exceptions.DecodeError):
        return redirect(url_for("home"))

@app.route('/login')
def login():
    msg = request.args.get("msg")
    return render_template('login.html', msg=msg)

@app.route('/mypage', methods=["GET"])
def mypage():
    return render_template('mypage.html', )

# @app.route('/detail_go')
# def detail_go():
#     name= request.args.get('place_name')
#     address = request.args.get('address')
#     phone = request.args.get('phone')
#     image_url = request.args.get('image_url')
#     return render_template('detail.html', place_name=name, address=address, phone=phone, image_url=image_url)

@app.route('/detail', methods=["POST"])
def detail():

    gym_info = json.loads(request.form['doc'])
    print(gym_info)
    doc = {
        "place_name": gym_info['place_name'],
        "address": gym_info['address'],
        "phone": gym_info['phone'],
        "image_url": gym_info['image_url']
    }

    return render_template('detail.html', place_name=doc['place_name'], address=doc['address'], phone=doc['phone'], image_url=doc['image_url'])

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)