_skn_creative={
  "title": "Xandr_SkinVideo_FORD_Formula1_MOCKUP_200526",
  "adPath": "https://PLACEHOLDER/PLACEHOLDER",
  "uuid": "2c2a58eb",
  "Type": "SkinVideo",
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
                  },
                  {
                    "path": "[[wmsTopVideo]]",
                    "message": "play"
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
                                  "1000": "https://PLACEHOLDER/PLACEHOLDER/Skin%20av%20desktop%201000px.jpg",
                                  "1200": "https://PLACEHOLDER/PLACEHOLDER/Skin%20toggle%20desktop%201200px.jpg",
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
                  },
                  "TimeKeeper": {
                    "stopEvents": [
                      {
                        "expression": "[%/skin_producer%].incValue('megabanner_visible_time', [%/event/elapsedTime%], [%/creativeId%])"
                      }
                    ]
                  }
                },
                "subNodes": {
                  "headerVideo": {
                    "tagName": "div",
                    "name": "wmsTopVideo",
                    "attrs": {
                      "class": "wms-video-frame -wms-center"
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
                      },
                      "EvalNodeViewAbility": {
                        "evalOnStart": "1",
                        "ratio": 0.5,
                        "steps": 10,
                        "onVisible": [
                          {
                            "path": "[[wmsTopVideo]]",
                            "message": "play"
                          }
                        ],
                        "onHidden": [
                          {
                            "path": "[[wmsTopVideo]]",
                            "message": "pause",
                            "condition": "0"
                          }
                        ]
                      }
                    },
                    "video": {
                      "autoplay": false,
                      "muted": true,
                      "loop": true,
                      "attrs": {
                        "src": "https://PLACEHOLDER/PLACEHOLDER/Our%20Time.mp4",
                        "class": "wms-video clickable",
                        "playsinline": true
                      },
                      "b": {
                        "EvalNodeViewAbility": {
                          "evalOnStart": "1",
                          "ratio": 0.5,
                          "steps": 10,
                          "onVisible": [
                            {
                              "path": "[[wmsTopVideo]]",
                              "message": "play"
                            }
                          ],
                          "onHidden": [
                            {
                              "path": "[[wmsTopVideo]]",
                              "message": "pause",
                              "condition": "0"
                            }
                          ]
                        }
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
                            }
                          ]
                        }
                      }
                    },
                    "subNodes": {
                      "videoUi": {
                        "tagName": "div",
                        "attrs": {
                          "class": "wms-video-ui"
                        },
                        "subNodes": {
                          "controls": {
                            "tagName": "div",
                            "attrs": {
                              "class": "wms-video-controls"
                            },
                            "subNodes": {
                              "soundOn": {
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
                                      }
                                    ]
                                  }
                                }
                              },
                              "soundOff": {
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
                  },
                  {
                    "path": "[[wmsTopVideo]]",
                    "message": "play"
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
                      "headerVideo": {
                        "tagName": "div",
                        "name": "wmsTopVideo",
                        "attrs": {
                          "class": "wms-video-frame -wms-center"
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
                          },
                          "EvalNodeViewAbility": {
                            "evalOnStart": "1",
                            "ratio": 0.5,
                            "steps": 10,
                            "onVisible": [
                              {
                                "path": "[[wmsTopVideo]]",
                                "message": "play"
                              }
                            ],
                            "onHidden": [
                              {
                                "path": "[[wmsTopVideo]]",
                                "message": "pause",
                                "condition": "0"
                              }
                            ]
                          }
                        },
                        "video": {
                          "autoplay": false,
                          "muted": true,
                          "loop": true,
                          "attrs": {
                            "src": "https://PLACEHOLDER/PLACEHOLDER/Our%20Time.mp4",
                            "class": "wms-video clickable",
                            "playsinline": true
                          },
                          "b": {
                            "EvalNodeViewAbility": {
                              "evalOnStart": "1",
                              "ratio": 0.5,
                              "steps": 10,
                              "onVisible": [
                                {
                                  "path": "[[wmsTopVideo]]",
                                  "message": "play"
                                }
                              ],
                              "onHidden": [
                                {
                                  "path": "[[wmsTopVideo]]",
                                  "message": "pause",
                                  "condition": "0"
                                }
                              ]
                            }
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
                                }
                              ]
                            }
                          }
                        },
                        "subNodes": {
                          "videoUi": {
                            "tagName": "div",
                            "attrs": {
                              "class": "wms-video-ui"
                            },
                            "subNodes": {
                              "controls": {
                                "tagName": "div",
                                "attrs": {
                                  "class": "wms-video-controls"
                                },
                                "subNodes": {
                                  "soundOn": {
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
                                          }
                                        ]
                                      }
                                    }
                                  },
                                  "soundOff": {
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
