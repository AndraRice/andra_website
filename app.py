from flask import Flask
from flask_cors import CORS

from routes import routes_bp

def create_app():
    print("***** Running create_app from ANDRAS_WEBSITE *****")
    app = Flask(__name__)
    CORS(app)
    app.register_blueprint(routes_bp) 
    return app