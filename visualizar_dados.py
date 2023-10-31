import requests
from PIL import Image
from io import BytesIO

client_id = '83524aa660a546dea85d67d72e71565f'
client_secret = '16e13023ae264740acf2019403b52ef8'
token_url = 'https://accounts.spotify.com/api/token'

data = {
    'grant_type': "client_credentials",
    'client_id': client_id,
    'client_secret': client_secret
}

headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

response = requests.post(token_url, data=data, headers=headers)

if response.status_code == 200:
    # Analisa a resposta JSON para obter o token de acesso
    response_data = response.json()
    access_token = response_data['access_token']
    token_type = response_data['token_type']
    expires_in = response_data['expires_in']

    print(f'Token de acesso: {access_token}')
    print(f'Tipo de token: {token_type}')
    print(f'Expira em {expires_in} segundos')
else:
    print('A solicitação falhou com o código de status:', response.status)

# import requests
#
# api_url = 'https://api.spotify.com/'
#
#
#
# def fetch_web_api(endpoint, method, body=None):
#     headers = {
#         'Authorization': f'Bearer {access_token}'
#     }
#     url = f'{api_url}{endpoint}'
#
#     if body:
#         headers['Content-Type'] = 'application/json'
#
#     response = requests.request(method, url, headers=headers, json=body)
#     if response.status_code == 200:
#         return response.json()
#     else:
#         print('A solicitação falhou com o código de status:', response.status_code)
#         return None


# # Exemplo de uso da função
# endpoint = "v1/search?q=vagabundo também ama&type=track&market=BR&limit=5"  # Substitua pelo endpoint desejado
# method = 'GET'  # Substitua pelo método HTTP desejado (GET, POST, etc.)
# response_data = fetch_web_api(endpoint, method)
#
# if response_data:
#     tracks = response_data['tracks']
#     if tracks:
#         items = tracks['items']
#         for item in items:
#             print(f"Música: {item['name']}")
#             artists = item['artists']
#             for artist in artists:
#                 print(f"Cantor: {artist['name']}")
#     else:
#         print('sem imagem')

