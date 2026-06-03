_skn_creative={  "title":"Xandr_SkinVerticalVideoCountdownAnimated_Demo", 
  "adPath":"https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinVerticalVideoCountdownAnimated_Demo", 
  "uuid":"svvca-demo", 

  "Type": "SkinVerticalVideoCountdownAnimated",
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
                  },
                  {
                    "path": "[[wmsTopVideo]]",
                    "message": "play",
                    "condition": "true == 1"
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
                          "class": {
                            "1000": "wms-centerContents -wms1000px",
                            "1200": "wms-centerContents -wms1200px",
                            "__type__": "expression",
                            "expression": "[%/params/contentWidth%]"
                          }
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
                              "skinanimation": {
                                "tagName": "div",
                                "b": {
                                  "1000": {
                                    "AdobeAnimation": {
                                      "id": "AED3D5A5E5588B419C9884B1D24E6A7C",
                                      "animationClass": "_1000",
                                      "animationUrl": "1000.js"
                                    }
                                  },
                                  "1200": {
                                    "AdobeAnimation": {
                                      "id": "AED3D5A5E5588B419C9884B1D24E6A7C",
                                      "animationClass": "_1200",
                                      "animationUrl": "1200.js"
                                    }
                                  },
                                  "__type__": "expression",
                                  "expression": "[%/params/contentWidth%]"
                                },
                                "attrs": {
                                  "class": "wms-skinAnimation"
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
                          },
                          "countdownContainer": {
                            "tagName": "div",
                            "attrs": {
                              "class": "wms-divisor-container -wms-header"
                            },
                            "subNodes": {
                              "lateralcounter": {
                                "tagName": "div",
                                "attrs": {
                                  "class": "wms-lateral"
                                },
                                "subNodes": {
                                  "counterBlock": {
                                    "tagName": "div",
                                    "attrs": {
                                      "class": "wms-counter-block -anim-vibrate"
                                    },
                                    "b": {
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
                                            "path": "../counterBlock/b/TimeKeeper",
                                            "message": "start"
                                          }
                                        ],
                                        "onHidden": [
                                          {
                                            "path": "../counterBlock/b/TimeKeeper",
                                            "message": "stop"
                                          }
                                        ]
                                      }
                                    },
                                    "subNodes": {
                                      "dayBox": {
                                        "tagName": "div",
                                        "attrs": {
                                          "class": "wms-day-box"
                                        },
                                        "subNodes": {
                                          "days": {
                                            "tagName": "div",
                                            "name": "day",
                                            "attrs": {
                                              "class": "wms-state-1"
                                            },
                                            "status": {
                                              "accumulatedTime": {
                                                "__type__": "expression",
                                                "expression": "(24*60*60*1000)-floor(module(Date.getTime('2026-07-13T00:00:00')-Date.now(''),(1000*60*60*24)))"
                                              },
                                              "currentUnit": 0,
                                              "increment": 1000,
                                              "previousUnit": 0,
                                              "substract": 0,
                                              "timeSpan": {
                                                "__type__": "expression",
                                                "expression": "floor((Date.getTime('2026-07-13T00:00:00')-Date.now(''))/(1000*60*60*24))"
                                              }
                                            },
                                            "b": {
                                              "Timer": {
                                                "timeout": 0,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  }
                                                ]
                                              },
                                              "Interval": {
                                                "interval": 1000,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/accumulatedTime",
                                                      "expression": "[%/node/status/accumulatedTime%] + [%/node/status/increment%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/currentUnit",
                                                      "expression": "[%/node/status/accumulatedTime%]/1000/60/60/24 - module([%/node/status/accumulatedTime%]/1000/60/60/24, 1)"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/substract",
                                                      "expression": "[%/node/status/currentUnit%] - [%/node/status/previousUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/timeSpan",
                                                      "expression": "[%/node/status/timeSpan%] - [%/node/status/substract%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/previousUnit",
                                                      "expression": "[%/node/status/currentUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "path": "[[day]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-1",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  },
                                                  {
                                                    "path": "[[day]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-2",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "hourBox": {
                                        "tagName": "div",
                                        "attrs": {
                                          "class": "wms-hour-box"
                                        },
                                        "subNodes": {
                                          "hours": {
                                            "tagName": "div",
                                            "name": "hour",
                                            "attrs": {
                                              "class": "wms-state-1"
                                            },
                                            "status": {
                                              "accumulatedTime": {
                                                "__type__": "expression",
                                                "expression": "(60*60*1000)-floor(module(Date.getTime('2026-07-13T00:00:00')-Date.now(''),(1000*60*60)))"
                                              },
                                              "currentUnit": 0,
                                              "increment": 1000,
                                              "previousUnit": 0,
                                              "substract": 0,
                                              "timeSpan": {
                                                "__type__": "expression",
                                                "expression": "floor(module(Date.getTime('2026-07-13T00:00:00')-Date.now(''),(1000*60*60*24))/(1000*60*60))"
                                              }
                                            },
                                            "b": {
                                              "Timer": {
                                                "timeout": 0,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  }
                                                ]
                                              },
                                              "Interval": {
                                                "interval": 1000,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/accumulatedTime",
                                                      "expression": "[%/node/status/accumulatedTime%] + [%/node/status/increment%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/currentUnit",
                                                      "expression": "[%/node/status/accumulatedTime%]/1000/60/60 - module([%/node/status/accumulatedTime%]/1000/60/60, 1)"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/substract",
                                                      "expression": "[%/node/status/currentUnit%] - [%/node/status/previousUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/timeSpan",
                                                      "expression": "(([%/node/status/timeSpan%] - [%/node/status/substract%]) < 0 ? ([%/node/status/timeSpan%] - [%/node/status/substract%] + 24) : ([%/node/status/timeSpan%] - [%/node/status/substract%]))"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/previousUnit",
                                                      "expression": "[%/node/status/currentUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "path": "[[hour]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-1",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  },
                                                  {
                                                    "path": "[[hour]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-2",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "minutesBox": {
                                        "tagName": "div",
                                        "attrs": {
                                          "class": "wms-minute-box"
                                        },
                                        "subNodes": {
                                          "minutes": {
                                            "tagName": "div",
                                            "name": "minute",
                                            "attrs": {
                                              "class": "wms-state-1"
                                            },
                                            "status": {
                                              "accumulatedTime": {
                                                "__type__": "expression",
                                                "expression": "(60*1000)-floor(module(Date.getTime('2026-07-13T00:00:00')-Date.now(''),(1000*60)))"
                                              },
                                              "currentUnit": 0,
                                              "increment": 1000,
                                              "previousUnit": 0,
                                              "substract": 0,
                                              "timeSpan": {
                                                "__type__": "expression",
                                                "expression": "floor(module(Date.getTime('2026-07-13T00:00:00')-Date.now(''),(1000*60*60))/(1000*60))"
                                              }
                                            },
                                            "b": {
                                              "Timer": {
                                                "timeout": 0,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  }
                                                ]
                                              },
                                              "Interval": {
                                                "interval": 1000,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/accumulatedTime",
                                                      "expression": "[%/node/status/accumulatedTime%] + [%/node/status/increment%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/currentUnit",
                                                      "expression": "[%/node/status/accumulatedTime%]/1000/60 - module([%/node/status/accumulatedTime%]/1000/60, 1)"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/substract",
                                                      "expression": "[%/node/status/currentUnit%] - [%/node/status/previousUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/timeSpan",
                                                      "expression": "(([%/node/status/timeSpan%] - [%/node/status/substract%]) < 0 ? ([%/node/status/timeSpan%] - [%/node/status/substract%] + 60) : ([%/node/status/timeSpan%] - [%/node/status/substract%]))"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/previousUnit",
                                                      "expression": "[%/node/status/currentUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "path": "[[minute]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-1",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  },
                                                  {
                                                    "path": "[[minute]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-2",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  }
                                                ]
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "secondsBox": {
                                        "tagName": "div",
                                        "attrs": {
                                          "class": "wms-second-box"
                                        },
                                        "subNodes": {
                                          "seconds": {
                                            "tagName": "div",
                                            "name": "second",
                                            "attrs": {
                                              "class": "wms-state-1"
                                            },
                                            "status": {
                                              "accumulatedTime": 0,
                                              "currentUnit": 0,
                                              "increment": 1000,
                                              "previousUnit": 0,
                                              "substract": 0,
                                              "timeSpan": {
                                                "__type__": "expression",
                                                "expression": "floor(module(Date.getTime('2026-07-13T00:00:00')-Date.now(''),(60*1000))/(1000))"
                                              }
                                            },
                                            "b": {
                                              "Timer": {
                                                "timeout": 0,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  }
                                                ]
                                              },
                                              "Interval": {
                                                "interval": 1000,
                                                "events": [
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/accumulatedTime",
                                                      "expression": "[%/node/status/accumulatedTime%] + [%/node/status/increment%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/currentUnit",
                                                      "expression": "[%/node/status/accumulatedTime%]/1000 - module([%/node/status/accumulatedTime%]/1000, 1)"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/substract",
                                                      "expression": "[%/node/status/currentUnit%] - [%/node/status/previousUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/timeSpan",
                                                      "expression": "(([%/node/status/timeSpan%] - [%/node/status/substract%]) < 0 ? ([%/node/status/timeSpan%] - [%/node/status/substract%] + 60) : ([%/node/status/timeSpan%] - [%/node/status/substract%]))"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/dom/innerHTML",
                                                      "expression": "[%/node/status/timeSpan%]"
                                                    }
                                                  },
                                                  {
                                                    "expression": {
                                                      "target": "/node/status/previousUnit",
                                                      "expression": "[%/node/status/currentUnit%]"
                                                    }
                                                  },
                                                  {
                                                    "path": "[[second]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-1",
                                                    "condition": "[%/node/status/substract%] != 0"
                                                  },
                                                  {
                                                    "path": "[[second]]",
                                                    "message": "toggleClass",
                                                    "params": "wms-state-2",
                                                    "condition": "[%/node/status/substract%] != 0"
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
                              "wmsSitespacer": {
                                "tagName": "div",
                                "attrs": {
                                  "class": "wms-sitespacer"
                                }
                              },
                              "wmsLateralSpacer": {
                                "tagName": "div",
                                "attrs": {
                                  "class": "wms-lateral"
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
            "size": {
              "width": "100%"
            },
            "name": "fullFgMain",
            "attrs": {
              "class": "wms-full-fg"
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
            },
            "subNodes": {
              "fullStickyWrapper": {
                "tagName": "div",
                "attrs": {
                  "class": "wms-stickyWrapper"
                },
                "subNodes": {
                  "fullSticky": {
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
                      "FullCenterContents": {
                        "tagName": "div",
                        "attrs": {
                          "class": "wms-centerContents"
                        },
                        "subNodes": {
                          "Fullskinfg": {
                            "tagName": "div",
                            "attrs": {
                              "class": {
                                "1000": "wms-skinfg -wms1000px",
                                "1200": "wms-skinfg -wms1200px",
                                "__type__": "expression",
                                "expression": "[%/params/contentWidth%]"
                              }
                            },
                            "subNodes": {
                              "fullfgHeaderblock": {
                                "tagName": "div",
                                "attrs": {
                                  "class": "wms-verticalvideo-container -wms-right"
                                },
                                "subNodes": {
                                  "wmsLateralVideo": {
                                    "tagName": "div",
                                    "attrs": {
                                      "class": "wms-lateral"
                                    },
                                    "subNodes": {
                                      "wmsTopVideo": {
                                        "tagName": "div",
                                        "attrs": {
                                          "class": "wms-cont-video"
                                        },
                                        "name": "wmsTopVideo",
                                        "video": {
                                          "autoplay": false,
                                          "muted": true,
                                          "attrs": {
                                            "src": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinVerticalVideoCountdownAnimated_Demo/opt_campers.webm",
                                            "class": "wms-video-vertical"
                                          },
                                          "b": {
                                            "EvalNodeViewAbility": {
                                              "evalOnStart": "!true",
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
                                                  "condition": "false == 1"
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
                                                  "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_STARTED%], 1, 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_STARTED_COUNT%], 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].logTime('wmsLateralVideo_' + [%/skin_producer/names/VIDEO_STARTED%], [%/creativeId%])"
                                                }
                                              ]
                                            },
                                            "firstQuartile": {
                                              "events": [
                                                {
                                                  "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_25_PERCENT%], 1, 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_25_PERCENT_COUNT%], 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].logTime('wmsLateralVideo_' + [%/skin_producer/names/VIDEO_25_PERCENT%], [%/creativeId%])"
                                                }
                                              ]
                                            },
                                            "secondQuartile": {
                                              "events": [
                                                {
                                                  "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_50_PERCENT%], 1, 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_50_PERCENT_COUNT%], 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].logTime('wmsLateralVideo_' + [%/skin_producer/names/VIDEO_50_PERCENT%], [%/creativeId%])"
                                                }
                                              ]
                                            },
                                            "thirdQuartile": {
                                              "events": [
                                                {
                                                  "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_75_PERCENT%], 1, 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_75_PERCENT_COUNT%], 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].logTime('wmsLateralVideo_' + [%/skin_producer/names/VIDEO_75_PERCENT%], [%/creativeId%])"
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
                                                  "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_ENDED%], 1, 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_ENDED_COUNT%], 'wmsLateralVideo', [%/creativeId%])"
                                                },
                                                {
                                                  "expression": "[%/skin_producer%].logTime('wmsLateralVideo_' + [%/skin_producer/names/VIDEO_ENDED%], [%/creativeId%])"
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
                                                            "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/AUDIO_UNMUTE_CLICK_COUNT%], [%/creativeId%])"
                                                          },
                                                          {
                                                            "expression": "[%/skin_producer%].logTime([%/skin_producer/names/AUDIO_UNMUTE_CLICK%], [%/creativeId%])"
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
                                                            "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/AUDIO_MUTE_CLICK_COUNT%], [%/creativeId%])"
                                                          },
                                                          {
                                                            "expression": "[%/skin_producer%].logTime([%/skin_producer/names/AUDIO_MUTE_CLICK%], [%/creativeId%])"
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
                                  },
                                  "wmsSitespacer": {
                                    "tagName": "div",
                                    "attrs": {
                                      "class": "wms-sitespacer"
                                    }
                                  },
                                  "wmsLateralSpacer": {
                                    "tagName": "div",
                                    "attrs": {
                                      "class": "wms-lateral"
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
                    "message": "play",
                    "condition": "true == 1"
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
                "contentClass": ".wms-skinAnimation",
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
                      "skinanimation": {
                        "tagName": "div",
                        "attrs": {
                          "class": "wms-skinAnimation"
                        },
                        "b": {
                          "AdobeAnimation": {
                            "id": "AED3D5A5E5588B419C9884B1D24E6A7C",
                            "animationClass": "_1000",
                            "animationUrl": "1000.js"
                          }
                        }
                      },
                      "wmsTopVideo": {
                        "tagName": "div",
                        "attrs": {
                          "class": "wms-cont-video -wms-center"
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
                          "autoplay": true,
                          "muted": true,
                          "attrs": {
                            "src": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/Xandr_SkinVerticalVideoCountdownAnimated_Demo/opt_campers.webm",
                            "class": "wms-video"
                          },
                          "b": {
                            "EvalNodeViewAbility": {
                              "evalOnStart": "!true",
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
                                  "condition": "false == 1"
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
