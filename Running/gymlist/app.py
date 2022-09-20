from flask import Flask, render_template, request, jsonify, redirect, url_for
from pymongo import MongoClient
import requests


app = Flask(__name__)

client = MongoClient('mongodb+srv://JYChoi:wnsdn123@cluster0.uzxmk.mongodb.net/?retryWrites=true&w=majority')
db = client.gyms

#
# @app.route('/api/posts/comment/')
# def main():
#     return render_template("comment.html")

@app.route('/api/posts')
def save_gym():
    db.

@app.route('/api/posts/result')
def detail(keyword):
    return render_template("mypage.html")


@app.route('/api/save_word', methods=['POST'])
def save_word():
    # 단어 저장하기
    return jsonify({'result': 'success', 'msg': '단어 저장'})


@app.route('/api/delete_word', methods=['POST'])
def delete_word():
    # 단어 삭제하기
    return jsonify({'result': 'success', 'msg': '단어 삭제'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)