from flask import Flask
from flask_cors import CORS
from app.views import *
from app.database import *

app = Flask(__name__)

app.route('/appointments/', methods=['GET'])(get_appointments)
app.route('/appointments/<int:id>/', methods=['GET'])(get_appointment)
app.route('/appointments/create/', methods=['POST'])(create_appointment)
create_table()

init_app(app)
CORS(app)

if __name__ == '__main__':
    app.run(debug=True)