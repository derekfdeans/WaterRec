from flask import Flask, send_from_directory
from flask import jsonify
from utils import receive_data as rd
from utils import fao_penman as fp
from utils import threshold as th

app = Flask(__name__, static_url_path='', static_folder='static')
app.config['DEBUG'] = True

@app.route('/api/weather', methods=['GET'])
def get_weather():
    try:
        data = rd.receive_data()
        response = fp.fao_penman_debug(data)
        should_water = th.should_water(response)

        return jsonify(should_water)

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        # returns data from weather api
        data = rd.receive_data()
        data["fao_penman"] = fp.fao_penman_debug(data)
        return data

    except Exception as e:
        return jsonify({"error": str(e)}), 500



if __name__ == "__main__":
    app.run(debug=True, port=5050)
