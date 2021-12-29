# Criptografía y seguridad en redes: Cifrado simétrico 

Se utiliza javascript para descifrar un mensaje cifrado con otro lenguaje. El objetivo de este trabajo es verificar la interoperabilidad de distintos lenguajes y de sus librerías criptográficas.

Según estadísticas recopiladas por el sitio Stack Overflow, los dos lenguajes que más proyecciones a futuro tienen son Python y Javascript, por lo que para la presente tarea se le solicita utilizar ambos lenguajes.

Por el lado del servidor, para la creación de sitios web, se crea un archivo html con Python, el cual contiene:

```
<p>Este sitio contiene un mensaje secreto</p>
<div class="algorithm" id="msg_cifrado"></div>
```

donde el contenido de id corresponde a un mensaje cifrado utilizando la librería de Python con el algoritmo de cifrado simetrico BlowFish. 

Desde el lado del cliente, a través de un plugin para Tampermonkey utilizando Javascript, se descifra el mensaje cifrado previamente, utilizando una configuración previamente acordada (parámetros como llave, semilla, rounds, etc. ) dependiendo los parámetros soportados por el algoritmo y por la implementación del algoritmo.

## Blowfish

Blowfish es un cifrado de bloque simétrico que se puede utilizar como reemplazo directo de DES o IDEA. Se necesita una clave de longitud variable, desde 32 bits hasta 448 bits (4 a 56 Bytes), lo que la hace ideal tanto para uso doméstico como exportable. Blowfish fue diseñado en 1993 por Bruce Schneier como una alternativa rápida y gratuita a los algoritmos de cifrado existentes. Desde entonces se ha analizado considerablemente y poco a poco está ganando aceptación como un algoritmo de cifrado sólido. Blowfish no está patentado y no tiene licencia, y está disponible gratis para todos los usos.

### Modos de operación de una unidad de cifrado por bloques

En este caso, se trabajará con el Modo PCBC (_Propagating cipher-block chaining_).

<p align="center">
<img src="https://www.researchgate.net/profile/Rhouma-Rhouma/publication/215783767/figure/fig3/AS:394138559238147@1470981363207/Propagating-cipher-block-chaining-PCBC-mode-encryption.png
" width="300" height="300" />
</p>


PCBC es usado por Kerberos y Waste. Además de en estos protocolos, su uso es bastante singular.

