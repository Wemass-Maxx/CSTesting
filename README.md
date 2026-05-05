# CSTesting

Repositorio de pruebas de skins para Creative Studio.

Este repo permite probar creatividades exportadas (`tag.js` + assets) en el renderer real de produccion:

```text
https://creative-studio.wemass.com/iframe_preview
```

La pieza se sirve desde GitHub/jsDelivr y un userscript de Tampermonkey intercepta el renderer para que cargue esa pieza en vez de una creatividad subida a Creative Studio.

## Referencias

Estas referencias son sumamanete importantes ya que el proyecto se construye para integrarse sobre estos elementos.

El codigo del administrador de plantillas esta en: C:\xampp\htdocs\creative-studio\templates

Las plantillas finales estan en: C:\xampp\htdocs\creative-studio\templates

Las creatividades que han sido creadas usando las plantillas finales estan en: C:\xampp\htdocs\creative-studio\ad_creatives

El renderizador está en: C:\xampp\htdocs\skins

## Etapas de las plantillas y Creatividades

La forma final de cada plantilla es la presente en C:\xampp\htdocs\creative-studio\templates donde estan parametrizadas y listas para ser leida por el formulario de creative studio le llamaremos ´Plantillas parametrizadas´

Las creatividades que han sido creadas usando las plantillas finales estan en: C:\xampp\htdocs\creative-studio\ad_creatives a estas las llamamos ´creatividades´

Durante el desarrollo, se hacen versiones html de las plantillas que despues de ser validadas y testeadas, se trasladan a plantillas parametrizadas a estas versiones les llamamos ´prototipos´


## Estructura

Cada carpeta representa una creatividad de prueba:

```text
test-scrolling/
  tag.js
  tag.html
  metadata.json
  outer.css
  inner.css
  images/
  *.jpg
  *.mp4
```

El archivo principal siempre es:

```text
{carpeta}/tag.js
```

## Userscript

Instala en Tampermonkey el contenido completo de:

```text
wms-local-preview.user.js
```

El script se ejecuta en:

```text
https://creative-studio.wemass.com/iframe_preview*
```

y lee el parametro:

```text
custom_creative
```

## URL de prueba

Formato general:

```text
https://creative-studio.wemass.com/iframe_preview?date=2026-05&campaign=NOMBRE_DE_PRUEBA&custom_creative=https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/{carpeta}/tag.js&width=1000&device=desktop
```

Ejemplo validado:

```text
https://creative-studio.wemass.com/iframe_preview?date=2026-05&campaign=Xandr_SkinClassic_MOCKUP_Mahou_Futbol_040526&custom_creative=https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/test-scrolling/tag.js&width=1000&device=desktop
```

Para probar ancho 1200, cambia:

```text
width=1200
```

## Preview mobile

Las creatividades con soporte mobile tienen un rol `"mobile"` en su `tag.js` con
stylesheet propio (`outer-mobile.css`) e imagenes especificas. Para previsualizarlas
usar `device=mobile` y el `width` del canvas mobile de esa pieza (habitualmente `450`).

| Dispositivo | `device`  | `width` tipico |
|-------------|-----------|----------------|
| Desktop     | `desktop` | `1000` o `1200` |
| Mobile      | `mobile`  | `450`           |
| Tablet      | `tablet`  | `768`           |

Ejemplo mobile validado:

```text
https://creative-studio.wemass.com/iframe_preview?date=2025-12&campaign=Xandr_SkinClassic_Test_classic_mobile_031225&custom_creative=https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/test-classic-mobile/tag.js&width=450&device=mobile
```

Misma pieza en desktop:

```text
https://creative-studio.wemass.com/iframe_preview?date=2025-12&campaign=Xandr_SkinClassic_Test_classic_mobile_031225&custom_creative=https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/test-classic-mobile/tag.js&width=1000&device=desktop
```

> El parametro `width` es critico para mobile: el `tag.js` resuelve la imagen usando
> `[%/params/contentWidth%]` como clave. Si pasas `width=1000` con `device=mobile` el
> renderer usara el rol mobile pero no encontrara imagen para ese ancho.

## Piezas disponibles

| Carpeta               | Tipo          | Dispositivos          | `width` validos |
|-----------------------|---------------|-----------------------|-----------------|
| `test-scrolling`      | SkinScrolling | Desktop               | 1000, 1200      |
| `test-classic-mobile` | SkinClassic   | Desktop + Mobile      | 1000, 1200, 450 |

## Como funciona

1. `iframe_preview` carga el renderer real de Creative Studio.
2. La URL incluye `custom_creative` apuntando al `tag.js` publicado en jsDelivr.
3. Tampermonkey se ejecuta en `document-start`.
4. El userscript fuerza `window.creativeURL` y `window.__creativeUrl` para que el renderer use la creatividad remota.
5. Cuando `tag.js` define `window._skn_creative`, el userscript intercepta esa asignacion.
6. El userscript cambia `adPath` para que `file:outer.css`, `file:inner.css` y assets relativos salgan de la misma carpeta de jsDelivr.
7. Tambien reescribe URLs absolutas internas del `tag.js` que aun apuntan a `creative-studio.wemass.com/ad_creatives/...`.
8. El renderer carga CSS/assets y crea los nodos del skin normalmente.

## Parche importante

El renderer actual tiene una funcion `skinsBaseUrl()` que solo trata como absolutas algunas URLs de Wemass. Si recibe una URL de jsDelivr, puede convertirla incorrectamente en:

```text
https://cs-assets.wemass.com/https://cdn.jsdelivr.net/...
```

Eso rompe recursos como `outer.css`. Cuando falla `outer.css`, el renderer no llega a crear nodos.

El userscript corrige ese caso interceptando recursos con este prefijo roto:

```text
https://cs-assets.wemass.com/https://
```

y los devuelve a:

```text
https://cdn.jsdelivr.net/...
```

## Logs esperados

Al cargar una preview correcta deberias ver en consola:

```text
[WMS] custom_creative: ...
[WMS] creativeForRenderer: ...
[WMS] baseUrl: ...
[WMS] previewWidth: 1000
[WMS] _skn_creative set, adPath before: ...
[WMS] _skn_creative set, adPath after: ...
```

Si el renderer genera una URL rota, tambien deberias ver:

```text
[WMS] patched creative asset url: https://cdn.jsdelivr.net/...
```

## Diagnostico

Si no aparecen nodos, revisa primero si falla `outer.css`.

Error tipico:

```text
[WMS] Resource load error:
url: https://cs-assets.wemass.com/https://cdn.jsdelivr.net/...
```

Con el userscript actualizado, esa URL deberia reescribirse automaticamente.

Si aparecen nodos pero no imagen, revisa:

```text
canvas.wms-skinimg
```

y comprueba que la imagen configurada para `width=1000` o `width=1200` cargue con `200`.

## Flujo para anadir una pieza

1. Crea una carpeta nueva en el repo.
2. Copia dentro `tag.js`, `tag.html`, `metadata.json`, CSS y assets.
3. Sube los cambios a GitHub.
4. Abre la URL de preview cambiando `{carpeta}` por el nombre de la carpeta.
5. Si jsDelivr sirve cache antiguo, cambia temporalmente la referencia o espera a que refresque.

## Notas

- Esto prueba contra el renderer real de produccion.
- La pieza no se sirve desde local directamente; se sirve desde GitHub/jsDelivr.
- El override local lo hace Tampermonkey.
- El parametro `width` es importante porque algunas piezas resuelven imagenes y clases CSS usando `params.contentWidth`.
