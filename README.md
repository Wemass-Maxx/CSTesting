# CSTesting

Repo de pruebas de skins para [Creative Studio](https://creative-studio.wemass.com).

Cada carpeta contiene un creativo de prueba (`tag.js` + assets). Los archivos se sirven
via `raw.githubusercontent.com` con CORS abierto, lo que permite cargarlos directamente
desde el renderer de producción.

## Uso

Ver instrucciones completas en el repo de creative-studio:
`creative-studio/localcreativetesting/README.md`

## URL del renderer

```
https://creative-studio.wemass.com/iframe_preview?custom_creative=https://raw.githubusercontent.com/Wemass-Maxx/CSTesting/main/{carpeta}/tag.js&width=1000&device=desktop
```
