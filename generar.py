import blowfish
import base64
import time
from base64 import b64encode
from base64 import b64decode
from os import urandom

cipher = blowfish.Cipher(b"9kPz9O_H`4nYRx/1")

my_str = "holacómoestás?"
my_str_as_bytes = str.encode(my_str)

#print(type(my_str_as_bytes))# ensure it is byte representation

iv = urandom(8) # initialization vector

data_encrypted = b"".join(cipher.encrypt_pcbc(my_str_as_bytes, iv))

print(type(iv))

print("dataencrypted (array bytes): ",data_encrypted)

token_iv = b64encode(iv).decode('utf-8')
token_dataencrypted = b64encode(data_encrypted).decode('utf-8')

print("dataencrypted (b64): ",token_dataencrypted)


html_str = """
<p> Este sitio contiene un mensaje secreto </p>
<div class="iv" id='iv_bytes'></div>
<div class="Blowfish" id='msge_encriptado'></div>
"""

html = html_str.replace("iv_bytes", token_iv)
time.sleep(1)
html1 = html.replace("msge_encriptado", token_dataencrypted)
Html_file= open("Blowfish-PCBC.html","w")
Html_file.write(html1)
Html_file.close()


