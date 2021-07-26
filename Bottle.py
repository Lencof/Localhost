# __Author__ __Lencof__
# Bottle.py

from bottle import route, run
@route('/')
def home():
  return "Hello"
run(host='localhost', port=6666)
