_skn_creative={  "title":"Xandr_SkinHalo_StickyPorAncho", 
  "adPath":"https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinHalo_StickyPorAncho", 
  "uuid":"b02342a7", 

  "Type": "SkinHalo",
  "params": {
    "__type__": "device",
    "desktop": {
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
              "CalculatePosition": {
                "path": "/params/skins/CalculatePosition"
              },
              "Timer": {
                "timeout": 0,
                "events": [
                  {
                    "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/IMPRESSION%], 1, [%/creativeId%])"
                  },
                  {
                    "expression": "[%/skin_producer%].logTime([%/skin_producer/names/IMPRESSION%], [%/creativeId%])"
                  }
                ]
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
                                  "1000": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinHalo_StickyPorAncho/1000.webp",
                                  "1200": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinHalo_StickyPorAncho/1200.webp"
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
                }
              }
            }
          },
          "fullfg": {
            "tagName": "div",
            "attrs": {
              "class": "wms-full-fg wms-expanded-halo"
            },
            "size": {
              "width": "100%"
            },
            "name": "wmsFullFgMain",
            "b": {
              "CssVariableObserver": {
                "path": "/params/skins/CssVariableObserver"
              },
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
            },
            "subNodes": {
              "halo": {
                "tagName": "div",
                "attrs": {
                  "class": {
                    "__type__": "expression",
                    "expression": "[%/params/contentWidth%]",
                    "1000": "wms-halo wms-1000",
                    "1200": "wms-halo wms-1200"
                  }
                },
                "subNodes": {
                  "haloButtonContainer": {
                    "tagName": "div",
                    "attrs": {
                      "class": "wms-halo-buttoncontainer"
                    },
                    "subNodes": {
                      "boxBtns": {
                        "tagName": "div",
                        "attrs": {
                          "class": "wms-box-btns -wms-generalbtns"
                        },
                        "subNodes": {
                          "btnClose": {
                            "tagName": "div",
                            "name": "wmsBtnClose",
                            "attrs": {
                              "class": "wms-btn-close"
                            },
                            "b": {
                              "ClickEvent": {
                                "events": [
                                  {
                                    "path": "[[wmsFullFgMain]]",
                                    "message": "addClass",
                                    "params": "-wms-nodisplay"
                                  }
                                ]
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "haloContent": {
                    "tagName": "div",
                    "attrs": {
                      "class": "wms-halo-content"
                    },
                    "subNodes": {
                      "img": {
                        "tagName": "canvas",
                        "attrs": {
                          "class": "wms-halo-banner",
                          "width": {
                            "1000": 1000,
                            "1200": 1200,
                            "__type__": "expression",
                            "expression": "[%/params/contentWidth%]"
                          },
                          "height": 90
                        },
                        "canvasImage": {
                          "__type__": "expression",
                          "expression": "[%/params/contentWidth%]",
                          "1000": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinHalo_StickyPorAncho/1000x90.webp",
                          "1200": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinHalo_StickyPorAncho/1200x90.webp"
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
    },
    "mobile": {
      "__type__": "role",
      "inner": {},
      "outer": {
        "stylesheet": "file:outer-mobile.css",
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
              "class": "wms-mob-full-bg"
            },
            "b": {
              "CalculateHeight": {
                "path": "/params/skins/CalculateHeight"
              },
              "CssVariableDeclaration": {
                "path": "/params/skins/CssVariableDeclaration"
              },
              "CalculatePosition": {
                "path": "/params/skins/CalculatePosition"
              },
              "Timer": {
                "timeout": 0,
                "events": [
                  {
                    "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/IMPRESSION%], 1, [%/creativeId%])"
                  },
                  {
                    "expression": "[%/skin_producer%].logTime([%/skin_producer/names/IMPRESSION%], [%/creativeId%])"
                  }
                ]
              },
              "ViewportEvent": {
                "threshold": 0.01,
                "onEnter": [
                  {
                    "path": "../fullbg/b/ViewAbilityCheck",
                    "message": "start"
                  }
                ],
                "onExit": [
                  {
                    "path": "../fullbg/b/ViewAbilityCheck",
                    "message": "stop"
                  }
                ]
              },
              "ViewAbilityCheck": {
                "ratio": 0.5,
                "elapsedTime": 1000,
                "contentClass": ".wms-skinimg",
                "events": [
                  {
                    "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/VIEW_ABILITY%], 1, [%/creativeId%])"
                  },
                  {
                    "expression": "[%/skin_producer%].logTime([%/skin_producer/names/VIEW_ABILITY%], [%/creativeId%])"
                  }
                ]
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
                    "subNodes": {
                      "skinimg": {
                        "tagName": "canvas",
                        "attrs": {
                          "class": "wms-skinimg",
                          "width": 430,
                          "height": 450,
                          "id": "canvas"
                        },
                        "canvasImage": {
                          "__type__": "expression",
                          "expression": "[%/params/contentWidth%]",
                          "450": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinHalo_StickyPorAncho/1000.webp"
                        }
                      }
                    }
                  }
                }
              },
              "wms-cc-mob": {
                "tagName": "div",
                "attrs": {
                  "class": "wms-cc-mob"
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
              }
            }
          }
        }
      }
    }
  }
}
