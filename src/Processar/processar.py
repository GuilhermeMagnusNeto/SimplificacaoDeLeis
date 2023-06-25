# -*- coding: utf-8 -*-
from flask import Flask, request
from flask_restful import Api, Resource
from flask_cors import CORS
from html import unescape
import openai
import codecs

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['JSON_AS_ASCII'] = False

openai.api_key = 'YOUR_API_KEY_HERE'

def obter_resposta(pergunta):
    resposta = openai.Completion.create(
        engine='text-davinci-003',
        prompt=pergunta,
        max_tokens=300,
        temperature=0.5,
        n=1,
        stop=None
    )

    return resposta.choices[0].text.strip()

class Processar(Resource):
    def post(self):
        data = request.get_json()
        texto = data.get("texto", "")

        pergunta = "Resumir de maneira simples e objetiva a seguinte lei: " + texto

        resposta = obter_resposta(pergunta)
        return resposta

api.add_resource(Processar, '/processar')

if __name__ == '__main__':
    app.run(debug=True)
