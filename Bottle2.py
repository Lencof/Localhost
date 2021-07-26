# __Author__ __Lencof__
# Bottle2.py

from bottle import route, run, static_file
@route('/')
def main():
    return static_file('index.html', root='.')
run(host='localhost', port=8888)
