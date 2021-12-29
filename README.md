# Criptografía y seguridad en redes: Cifrado simétrico 

Se utiliza javascript para descifrar un mensaje cifrado con otro lenguaje. El objetivo de este trabajo es verificar la interoperabilidad de distintos lenguajes y de sus librerías criptográficas.

Según estadísticas recopiladas por el sitio Stack Overflow, los dos lenguajes que más proyecciones a futuro tienen son Python y Javascript, por lo que para la presente tarea se le solicita utilizar ambos lenguajes.



Por el lado del servidor, para la creación de sitios web, se crea un archivo html con Python, el cual contiene:

```
<p>Este sitio contiene un mensaje secreto</p>
<div class="algorithm" id="msg_cifrado"></div>
```

, donde el contenido de id corresponde a un mensaje cifrado utilizando la librería de Python con el algoritmo de cifrado simetrico BlowFish. 

Desde el lado del cliente, a través de un plugin para Tampermonkey permitea través de javascript, descifrar el mensaje cifrado previamente, utilizando una configuración previamente acordada (parámetros como llave, semilla, rounds, etc.) dependiendo los parámetros soportados por el algoritmo y por la implementación del algoritmo elegido en js.
