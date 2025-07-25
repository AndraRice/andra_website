from flask import Blueprint, jsonify

routes_bp = Blueprint('main', __name__)

@routes_bp.route('/api/hello')
def hello():
    return jsonify({'message': 'Hello from Flask!'})

@routes_bp.route('/api/about')
def about():
    return jsonify({'about': 'This site is built with Flask and React!'})

@routes_bp.route('/')
def root():
    return 'Root works!'
