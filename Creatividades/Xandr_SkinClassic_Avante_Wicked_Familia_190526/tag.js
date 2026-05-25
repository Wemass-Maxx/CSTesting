_skn_creative={
  "title": "Xandr_SkinClassic_Avante_Wicked_Familia_190526",
  "adPath": ".",
  "uuid": "b16a114e",
  "Type": "SkinClassic",
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
                                    "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/VIEW_ABILITY_EXTENDED%], 1, [%/creativeId%])"
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
                                  "1000": "Skin av desktop 1000px v2.jpg",
                                  "1200": "Skin av desktop 1200px v2.jpg",
                                  "__type__": "expression",
                                  "expression": "[%/params/contentWidth%]"
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
                        "1000": "wms-siteBgHelper -wms1000",
                        "1200": "wms-siteBgHelper -wms1200",
                        "__type__": "expression",
                        "expression": "[%/params/contentWidth%]"
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
                          "450": "##img_450##",
                          "__type__": "expression",
                          "expression": "[%/params/contentWidth%]"
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
