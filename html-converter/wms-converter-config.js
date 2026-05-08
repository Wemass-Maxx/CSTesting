const WMS_CONVERTER_CONFIG = {

  // Dimensiones por defecto del canvas del skin.
  // Sobreescribibles con data-canvas-width / data-canvas-height en el HTML.
  canvasDefaults: {
    desktop: { width: 1920, height: 1000 },
    mobile:  { width: 430,  height: 450  },
  },

  // Fallback final para <img> sin atributos width/height y sin clase reconocida.
  imgFallback: { width: 300, height: 200 },

  // Dimensiones por clase CSS.
  // Usadas cuando un <img> standalone no tiene atributos width/height
  // y su tamaño real viene definido en la hoja de estilos.
  classDimensions: {
    'wms-halo-banner': { width: 1920, height: 150 },
  },

  // Breakpoint keys usados en las expressions de canvasImage.
  breakpoints: {
    desktop: ['1000', '1200'],
    mobile:  ['450'],
  },

  // Clases expresión del wms-siteBgHelper por breakpoint.
  siteBgHelperClasses: {
    '1000': 'wms-siteBgHelper -wms1000',
    '1200': 'wms-siteBgHelper -wms1200',
  },

  // Tipo por defecto del creative.
  creativeType: 'SkinClassic',
};
