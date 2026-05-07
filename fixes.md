# Fixes

## Contexto

`skin-halo` fue generado con `\Prototipos\html-converter`, así que esta pieza no debe tratarse como una creatividad editada a mano. El flujo correcto es:

1. Ajustar el HTML/prototipo fuente.
2. Regenerar `tag.js` y `metadata.json` con el converter.
3. Revisar que el índice de `Creatividades` siga descubriendo la pieza.
4. Verificar preview en `iframe_preview`.

## Lo que ya se corrigio

- Se añadió a `Creatividades/skin-halo/metadata.json` la declaración mínima que el índice necesita para renderizar la tarjeta:
  - `img_1000`
  - `img_1200`
- Se corrigió `Creatividades/skin-halo/tag.js` para que el ancho `1200` apunte al arte real `1200.jpg` en vez de reutilizar `1000.jpg`.
- Se ajustó `Creatividades/index.html` para que:
  - no dependa solo de GitHub API para descubrir carpetas;
  - pueda incluir `skin-halo` como carpeta local declarada;
  - intente leer `metadata.json` local antes de caer al CDN.
- Se corrigió el converter en `Prototipos/html-converter/index.html` para que, al transformar `div.wms-skinimg` en `canvas`, preserve las clases semánticas del `<img>` original. En `skin-halo` eso era necesario para mantener `wms-halo-fg` y permitir que el CSS de la capa frontal se aplique.
- Se ajustó el converter para que `metadata.json` incluya automáticamente las claves `img_1000`, `img_1200`, `img_450` e `img_768` cuando existen en los `canvasImage` generados. El index de `Creatividades` usa esas claves para decidir si pinta la tarjeta.

## Cosas a tener en cuenta en la proxima sesion

- Si el converter vuelve a regenerar `skin-halo`, revisar que no sobrescriba manualmente las claves `img_1000` y `img_1200`.
- Revisar que cualquier clase útil en un `<img>` convertido a `canvas` siga viajando al `attrs.class` del nodo final.
- Confirmar que el `metadata.json` generado tenga al menos una clave `img_*`; si no, la pieza no se listará aunque `tag.js` exista.
- Confirmar que el `adPath` generado por el converter siga apuntando a la carpeta real publicada para jsDelivr.
- Revisar si el index debe seguir con esta excepcion local o si conviene generar un `manifest` comun para todas las creatividades.
- Mantener sincronizados los nombres de archivo del arte con lo que declara `metadata.json` y con lo que referencia `tag.js`.
- Si se añade soporte mobile o tablet, declarar tambien `img_450` / `img_768` y validar que el `index.html` las detecte.

## Riesgos recurrentes

- Una creatividad puede existir en disco y aun asi no aparecer en el index si no declara alguna clave de imagen valida.
- Si el `tag.js` usa un ancho que no existe en el JSON de assets, el renderer puede cargar un recurso equivocado o no cargar nada.
- El preview final depende de tres capas distintas:
  - `tag.js`
  - `metadata.json`
  - disponibilidad real de los assets en GitHub/jsDelivr

## Referencias utiles

- `Creatividades/index.html`
- `Creatividades/skin-halo/tag.js`
- `Creatividades/skin-halo/metadata.json`
- `Prototipos/html-converter/index.html`
