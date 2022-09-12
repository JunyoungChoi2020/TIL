from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://Tarel:alswo7855@cluster0.gjrs0.mongodb.net/Cluster0?retryWrites=true&w=majority')
db = client.dbsparta


# 메인 홈페이지 시작=================================================================
@app.route('/')
def home():
    return render_template('homepage.html')
# 메인 홈페이지 종료=================================================================
# 로그인 페이지 시작=================================================================
@app.route('/login', methods=['GET'])
def login():
    return render_template('login.html')

@app.route('/login/try', methods=['POST'])
def logintry():
    identifier_receive = request.form["identifier_give"]#입력된 아이디를 app.py로 가져옴
    password_receive = request.form["password_give"]#입력된 비밀번호를 app.py로 가져옴

    target_id = db.user.find_one({'identifier': identifier_receive})#입력된 아이디로 서버를 뒤져서 해당 아이디의 정보 전체를 가져옴
    right_pw = target_id['password']#해당 아이디의 올바른 비밀번호는 타겟이 가져온 비밀번호다

    login = 0#로그인 성공여부를 묻는 변수로 0은 실패, 1은 성공

    if target_id is not None:#입력된 아이디가 존재한다면
        if (password_receive == right_pw):#입력된 비밀번호가 서버내 비밀번호와 같다면
            print('로그인성공')
            login = 1
        else:
            print('로그인실패')
            login = 0
        print(login)
    return jsonify({'loginresult': login})
# 로그인 페이지 종료=================================================================

# 회원가입 페이지 시작=================================================================
@app.route('/login/submit')
def submit():
    return render_template('signup.html')


@app.route('/login/submit/success', methods=["POST"])
def submit_success():

    identifier_receive = request.form["identifier_give"]
    password_receive = request.form["password_give"]
    nickname_receive = request.form["nickname_give"]
    question_receive = request.form["question_give"]
    answer_receive = request.form["answer_give"]
    doc = {
        'identifier': identifier_receive,
        'password': password_receive,
        'nickname': nickname_receive,
        'question': question_receive,
        'answer': answer_receive
    }
    db.user.insert_one(doc)
    return jsonify({'msg': '가입완료'})

#중복확인 기능
@app.route('/login/submit/overlap', methods=["POST"])
def overlap():
    identifier_receive = request.form["identifier_give"]#HTML에서 입력한 아이디를 가져옴
    print('HTML에서 받아온 값', identifier_receive)
    overlap = db.user.find_one({'identifier' :identifier_receive})
    print('오버랩 값', overlap)
    checkresult = 1
    if (overlap != None):
        checkresult = 0

    print('checkresult의 값이 0이면 사용가능! 1이면 중복됌!')
    print(checkresult)

    return jsonify({'result_give': checkresult })

# 회원가입 페이지 종료=================================================================



# 아이디/비밀번호 찾기 페이지 시작=================================================================
@app.route('/login/findaccount')
def findaccount():
    return render_template('findaccount.html')

#입력한 닉네임을 찾기
@app.route('/login/findaccount/nicksearch', methods=["POST"])
def nicksearch():
    nickname_receive = request.form["nickname_give"]
    target = db.user.find_one({'nickname': nickname_receive})
    get_question = target['question']

    return jsonify({'question_give': get_question})

#질문을 받아옴
@app.route('/login/findaccount/idpw', methods=["POST"])
def question_receive():
    answer_receive = request.form["answer_give"]#입력된 답변
    nickname_receive = request.form["nickname_give"]#입력된 닉네임
    target_info = db.user.find_one({'nickname': nickname_receive})#해당 닉네임의 정보를 가져옴
    answer_check = target_info['answer']#답변을 가져옴

    id = None
    pw = None
    if (answer_receive == answer_check):
        id = target_info['identifier']
        pw = target_info['password']

    return jsonify({'id_give': id, 'pw_give': pw})

# 아이디/비밀번호 찾기 페이지 종료=================================================================


#김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============
#김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============
#김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============김수완씨 작업물 시작라인============

@app.route("/movie", methods=["POST"])
def movie_post():
    url_receive = request.form['url_give']
    title_receive = request.form['title_give']
    thumbnail_receive = request.form['thumbnail_give']
    list_time_receive = request.form['list_time_give']
    category = request.form['category_give']

    doc = {
        'title':title_receive,
        'url':url_receive,
        'thumbnail':thumbnail_receive,
        'list_time':list_time_receive,
        'category' : category
    }
    db.register.insert_one(doc)
    return jsonify({'msg': '등록 완료'})


@app.route("/movie", methods=["GET"])
def movie_get():
    take_list = list(db.register.find({}, {'_id': False}))
    return jsonify({'register': take_list})









#김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============
#김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============
#김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============김수완씨 작업물 종료라인============

if __name__ == '__main__':
   app.run('0.0.0.0', port=5000, debug=True)