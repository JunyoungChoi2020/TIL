from flask import Flask, render_template, request, jsonify, redirect, url_for
from pymongo import MongoClient
import requests


app = Flask(__name__)

client = MongoClient('mongodb+srv://JYChoi:wnsdn123@cluster0.uzxmk.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta_plus_week2


@app.route('/')
def main():
    # DB에서 저장된 단어 찾아서 HTML에 나타내기
    words = list(db.words.find({}, {"_id":False}))
    msg = request.args.get("msg")
    return render_template("index.html", words=words, msg=msg)


@app.route('/detail/<keyword>')
def detail(keyword):
    # API에서 단어 뜻 찾아서 결과 보내기
    url = f"https://owlbot.info/api/v4/dictionary/{keyword}"
    r = requests.get(url, headers={"Authorization": "Token 45ec469fd54680d0fdee6620a3d5ea77865af4ac"})
    if r.status_code != 200:
        return redirect(url_for("main", msg="Word not found in dictionary; Try another word"))

    result = r.json()
    status_receive = request.args.get("status_give", "new")
    return render_template("detail.html", word=keyword, result=result, status=status_receive)


@app.route('/api/save_word', methods=['POST'])
def save_word():
    # 단어 저장하기
    word_receive = request.form['word_give']
    definition_receive = request.form['definition_give']

    doc = {
        "word" : word_receive,
        "definition": definition_receive
    }

    db.words.insert_one(doc)
    return jsonify({'result': 'success', 'msg': f'word "{word_receive}" is saved'})


@app.route('/api/delete_word', methods=['POST'])
def delete_word():
    # 단어 삭제하기
    word_receive = request.form['word_give']
    doc = {"word": word_receive}

    db.words.delete_one(doc)
    return jsonify({'result': 'success', 'msg': f'word "{word_receive}" is deleted'})


@app.route('/api/add_example', methods=['POST'])
def add_example():
    exam_receive = request.form['example']
    word_receive = request.form['word_give']

    if exam_receive.find(word_receive) == -1:
        return False

    doc = {
        "word_give": word_receive,
        "example_give": exam_receive
    }

    db.examples.insert_one(doc)

    exam_list = list(db.examples.find({}, {"_id": False}))
    return exam_list

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)