_skn_creative={  "title":"Xandr_SkinScrolling_Nombre_de_creatividad_291025", 
  "adPath":"https://creative-studio.wemass.com/ad_creatives/2025-10/Xandr_SkinScrolling_Nombre_de_creatividad_291025", 
  "uuid":"c7e9bc85", 

  "Type": "SkinClassic",
  "params": {
    "__type__": "role",
    "inner": {
      "stylesheet": "file:inner.css",
      "nodes": {
        "root": {
          "mode": "body",
          "attrs": {
            "class": "wms-bodyclass"
          },
          "size": {
            "width": {
              "__type__": "expression",
              "expression": "[%/params/contentWidth%]"
            }
          },
          "b": {
            "Style": {
              "background-color": "transparent"
            },
            "Click": {
              "url": {
                "__type__": "expression",
                "expression": "[%/params/click%]"
              },
              "hidePointer": true,
              "events": [
                {
                  "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/CLICK%], 1, [%/creativeId%])"
                },
                {
                  "expression": "[%/skin_producer%].logTime([%/skin_producer/names/CLICK%], [%/creativeId%])"
                },
                {
                  "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/CLICK_COUNT%], [%/creativeId%])"
                },
                {
                  "expression": "[%/skin_producer%].logClickDetail([%/event%], [%/creativeId%])"
                }
              ]
            }
          }
        }
      }
    },
    "outer": {
      "stylesheet": "file:outer.css",
      "pixels": {
        "img": {
          "__type__": "expression",
          "expression": "[%/params/imgPixels%]"
        },
        "script": {
          "__type__": "expression",
          "expression": "[%/params/jsPixels%]"
        },
        "html": {
          "__type__": "expression",
          "expression": "[%/params/htmlPixels%]"
        }
      },
      "nodes": {
        "fullbg": {
          "tagName": "div",
          "size": {
            "width": "100%"
          },
          "attrs": {
            "class": "wms-full-bg"
          },
          "b": {
            "CalculateHeight": {
              "path": "/params/skins/CalculateHeight"
            },
            "CssVariableDeclaration": {
              "path": "/params/skins/CssVariableDeclaration"
            },
            "Timer": {
              "timeout": 0,
              "events": [
                {
                  "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/IMPRESSION%], 1, [%/creativeId%])"
                },
                {
                  "expression": "[%/skin_producer%].logTime([%/skin_producer/names/IMPRESSION%], [%/creativeId%])"
                },
                {
                  "path": "[[wmsTopVideo]]",
                  "message": "play",
                  "condition": "1 == 1"
                }
              ]
            },
            "YScrollObserver": {
              "onEnter": {
                "events": [
                  {
                    "path": "~/fullbg",
                    "message": "removeClass",
                    "params": "-wms-scrolling"
                  }
                ]
              },
              "onLeave": {
                "events": [
                  {
                    "path": "~/fullbg",
                    "message": "addClass",
                    "params": "-wms-scrolling"
                  }
                ]
              }
            }
          },
          "subNodes": {
            "stickyWrapper": {
              "tagName": "div",
              "attrs": {
                "class": "wms-stickyWrapper"
              },
              "subNodes": {
                "sticky": {
                  "tagName": "div",
                  "attrs": {
                    "class": "wms-sticky"
                  },
                  "b": {
                    "VerticalOffset": {
                      "path": "/params/skins/VerticalOffset"
                    }
                  },
                  "subNodes": {
                    "centerContents": {
                      "tagName": "div",
                      "attrs": {
                        "class": "wms-centerContents"
                      },
                      "subNodes": {
                        "skinbg": {
                          "tagName": "div",
                          "attrs": {
                            "class": "wms-skinbg wms-centeredContent"
                          },
                          "b": {
                            "ViewportEvent": {
                              "threshold": 0.01,
                              "onEnter": [
                                {
                                  "path": "../skinbg/b/ViewAbilityCheck",
                                  "message": "start"
                                }
                              ],
                              "onExit": [
                                {
                                  "path": "../skinbg/b/ViewAbilityCheck",
                                  "message": "stop"
                                }
                              ]
                            },
                            "ViewAbilityCheck": {
                              "ratio": 0.33,
                              "elapsedTime": 1000,
                              "contentClass": ".wms-siteBgHelper",
                              "events": [
                                {
                                  "expression": "[%/skin_producer%].log([%/skin_producer/names/VIEW_ABILITY_EXTENDED%], 1, [%/creativeId%])"
                                },
                                {
                                  "expression": "[%/skin_producer%].logTime([%/skin_producer/names/VIEW_ABILITY_EXTENDED%], [%/creativeId%])"
                                }
                              ]
                            }
                          },
                          "subNodes": {
                            "skinimg": {
                              "tagName": "canvas",
                              "attrs": {
                                "class": "wms-skinimg",
                                "width": 1920,
                                "height": 1000,
                                "id": "canvas"
                              },
                              "canvasImage": {
                                "__type__": "expression",
                                "expression": "[%/params/contentWidth%]",
                                "1000": "https://creative-studio.wemass.com/ad_creatives/2025-10/Xandr_SkinScrolling_Nombre_de_creatividad_291025/DG70346_Y-UNIDAD EDITORIAL-Skin desktop 1000px.jpg",
                                "1200": "https://creative-studio.wemass.com/ad_creatives/2025-10/Xandr_SkinScrolling_Nombre_de_creatividad_291025/DG70346_Y-UNIDAD EDITORIAL-Skin desktop 1200px.jpg"
                              }
                            },
                            "skinsafezone": {
                              "tagName": "div",
                              "attrs": {
                                "class": "wms-safezone"
                              },
                              "b": {
                                "ViewportEvent": {
                                  "threshold": 0.01,
                                  "onEnter": [
                                    {
                                      "path": "../skinsafezone/b/ViewAbilityCheck",
                                      "message": "start"
                                    }
                                  ],
                                  "onExit": [
                                    {
                                      "path": "../skinsafezone/b/ViewAbilityCheck",
                                      "message": "stop"
                                    }
                                  ]
                                },
                                "ViewAbilityCheck": {
                                  "ratio": 0.33,
                                  "elapsedTime": 1000,
                                  "contentClass": ".wms-siteBgHelper",
                                  "events": [
                                    {
                                      "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/VIEW_ABILITY%], 1, [%/creativeId%])"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].logTime([%/skin_producer/names/VIEW_ABILITY%], [%/creativeId%])"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "wms-cc": {
                  "tagName": "div",
                  "attrs": {
                    "class": "wms-cc"
                  },
                  "b": {
                    "Click": {
                      "url": {
                        "__type__": "expression",
                        "expression": "[%/params/click%]"
                      },
                      "hidePointer": false,
                      "events": [
                        {
                          "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/CLICK%], 1, [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/CLICK_COUNT%], [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].logTime([%/skin_producer/names/CLICK%], [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].logClickDetail([%/event%], [%/creativeId%])"
                        }
                      ]
                    }
                  }
                },
                "wms-siteBgHelper": {
                  "tagName": "div",
                  "attrs": {
                    "class": {
                      "__type__": "expression",
                      "expression": "[%/params/contentWidth%]",
                      "1000": "wms-siteBgHelper -wms1000",
                      "1200": "wms-siteBgHelper -wms1200"
                    }
                  },
                  "b": {
                    "Click": {
                      "url": {
                        "__type__": "expression",
                        "expression": "[%/params/click%]"
                      },
                      "hidePointer": true,
                      "events": [
                        {
                          "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/CLICK%], 1, [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/CLICK_COUNT%], [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].logTime([%/skin_producer/names/CLICK%], [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].logClickDetail([%/event%], [%/creativeId%])"
                        }
                      ]
                    }
                  }
                }
              }
            },
            "fullBgHeaderBlock": {
              "tagName": "div",
              "attrs": {
                "class": "wms-header-block"
              },
              "b": {
                "Style": {
                  "width": "var(--wms-content-width)"
                },
                "TimeKeeper": {
                  "stopEvents": [
                    {
                      "expression": "[%/skin_producer%].incValue('megabanner_visible_time', [%/event/elapsedTime%], [%/creativeId%])"
                    }
                  ],
                  "onUnload": [
                    {
                      "expression": "[%/skin_producer%].incValue('megabanner_visible_time', [%/event/elapsedTime%], [%/creativeId%])"
                    }
                  ]
                },
                "EvalNodeViewAbility": {
                  "evalOnStart": "1",
                  "ratio": 0.5,
                  "steps": 10,
                  "onVisible": [
                    {
                      "path": "../fullBgHeaderBlock/b/TimeKeeper",
                      "message": "start"
                    }
                  ],
                  "onHidden": [
                    {
                      "path": "../fullBgHeaderBlock/b/TimeKeeper",
                      "message": "stop"
                    }
                  ]
                }
              },
              "subNodes": {
                "wmsTopVideo": {
                  "tagName": "div",
                  "attrs": {
                    "class": {
                      "__type__": "expression",
                      "expression": "[%/params/contentWidth%]",
                      "1200": "wms-cont-video -wms1200 -wms-right",
                      "1000": "wms-cont-video -wms1000 -wms-right"
                    }
                  },
                  "name": "wmsTopVideo",
                  "b": {
                    "Click": {
                      "url": {
                        "__type__": "expression",
                        "expression": "[%/params/click%]"
                      },
                      "hidePointer": false,
                      "events": [
                        {
                          "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/CLICK%], 1, [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].logTime([%/skin_producer/names/CLICK%], [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/CLICK_COUNT%], [%/creativeId%])"
                        },
                        {
                          "expression": "[%/skin_producer%].logClickDetail([%/event%], [%/creativeId%])"
                        }
                      ]
                    }
                  },
                  "video": {
                    "autoplay": false,
                    "muted": true,
                    "attrs": {
                      "src": "https://creative-studio.wemass.com/ad_creatives/2025-10/Xandr_SkinScrolling_Nombre_de_creatividad_291025/Y EDP SPAIN  1920x1080 20s_640-wm-optimizado.mp4",
                      "class": "wms-video clickable"
                    },
                    "events": {
                      "mute": {
                        "events": [
                          {
                            "path": "[[wmsBtnSoundOff]]",
                            "message": "addClass",
                            "params": "-wms-nodisplay"
                          },
                          {
                            "path": "[[wmsBtnSoundOn]]",
                            "message": "removeClass",
                            "params": "-wms-nodisplay"
                          }
                        ]
                      },
                      "unmute": {
                        "events": [
                          {
                            "path": "[[wmsBtnSoundOff]]",
                            "message": "removeClass",
                            "params": "-wms-nodisplay"
                          },
                          {
                            "path": "[[wmsBtnSoundOn]]",
                            "message": "addClass",
                            "params": "-wms-nodisplay"
                          }
                        ]
                      },
                      "started": {
                        "events": [
                          {
                            "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_STARTED%], 1, 'wmsTopVideo', [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].logTime('wmsTopVideo_' + [%/skin_producer/names/VIDEO_STARTED%], [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_STARTED_COUNT%], 'wmsTopVideo', [%/creativeId%])"
                          }
                        ]
                      },
                      "firstQuartile": {
                        "events": [
                          {
                            "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_25_PERCENT%], 1, 'wmsTopVideo', [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].logTime('wmsTopVideo_' + [%/skin_producer/names/VIDEO_25_PERCENT%], [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_25_PERCENT_COUNT%], 'wmsTopVideo', [%/creativeId%])"
                          }
                        ]
                      },
                      "secondQuartile": {
                        "events": [
                          {
                            "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_50_PERCENT%], 1, 'wmsTopVideo', [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].logTime('wmsTopVideo_' + [%/skin_producer/names/VIDEO_50_PERCENT%], [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_50_PERCENT_COUNT%], 'wmsTopVideo', [%/creativeId%])"
                          }
                        ]
                      },
                      "thirdQuartile": {
                        "events": [
                          {
                            "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_75_PERCENT%], 1, 'wmsTopVideo', [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].logTime('wmsTopVideo_' + [%/skin_producer/names/VIDEO_75_PERCENT%], [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_75_PERCENT_COUNT%], 'wmsTopVideo', [%/creativeId%])"
                          }
                        ]
                      },
                      "ended": {
                        "events": [
                          {
                            "path": "[[wmsTopVideo]]",
                            "message": "play"
                          },
                          {
                            "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_ENDED%], 1, 'wmsTopVideo', [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].logTime('wmsTopVideo_' + [%/skin_producer/names/VIDEO_ENDED%], [%/creativeId%])"
                          },
                          {
                            "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_ENDED_COUNT%], 'wmsTopVideo', [%/creativeId%])"
                          }
                        ]
                      }
                    }
                  },
                  "subNodes": {
                    "btnsOuterblock": {
                      "tagName": "div",
                      "attrs": {
                        "class": "wms-btns-canvas"
                      },
                      "subNodes": {
                        "btnContainer": {
                          "tagName": "div",
                          "attrs": {
                            "class": "wms-box-btns"
                          },
                          "subNodes": {
                            "soundIcon": {
                              "tagName": "div",
                              "name": "wmsBtnSoundOn",
                              "attrs": {
                                "class": "wms-btn-sound"
                              },
                              "b": {
                                "ClickEvent": {
                                  "events": [
                                    {
                                      "path": "[[wmsTopVideo]]",
                                      "message": "unmute"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/AUDIO_UNMUTE_CLICK%], 1, [%/creativeId%])"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].logTime([%/skin_producer/names/AUDIO_UNMUTE_CLICK%], [%/creativeId%])"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/AUDIO_UNMUTE_CLICK_COUNT%], [%/creativeId%])"
                                    }
                                  ]
                                }
                              }
                            },
                            "soundOffIcon": {
                              "tagName": "div",
                              "name": "wmsBtnSoundOff",
                              "attrs": {
                                "class": "wms-btn-sound -soundoff -wms-nodisplay"
                              },
                              "b": {
                                "ClickEvent": {
                                  "events": [
                                    {
                                      "path": "[[wmsTopVideo]]",
                                      "message": "mute"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/AUDIO_MUTE_CLICK%], 1, [%/creativeId%])"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].logTime([%/skin_producer/names/AUDIO_MUTE_CLICK%], [%/creativeId%])"
                                    },
                                    {
                                      "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/AUDIO_MUTE_CLICK_COUNT%], [%/creativeId%])"
                                    }
                                  ]
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
