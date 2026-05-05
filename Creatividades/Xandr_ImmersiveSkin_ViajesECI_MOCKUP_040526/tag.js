_skn_creative={  "title":"Xandr_ImmersiveSkin_ViajesECI_MOCKUP_040526", 
  "adPath":"https://cs-assets.wemass.com/ad_creatives/2026-05/Xandr_ImmersiveSkin_ViajesECI_MOCKUP_040526", 
  "uuid":"c027840f", 

    "Type": "ImmersiveSkin",
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
                        "name": "wmsFullBgMain",
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
                                                                    "1000": "https://cs-assets.wemass.com/ad_creatives/2026-05/Xandr_ImmersiveSkin_ViajesECI_MOCKUP_040526/Skin desktop 1000px IMMERSIVE.jpg",
                                                                    "1200": "https://cs-assets.wemass.com/ad_creatives/2026-05/Xandr_ImmersiveSkin_ViajesECI_MOCKUP_040526/copi 1200.jpg"
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
                                    "bgHeaderBlock": {
                                        "tagName": "div",
                                        "attrs": {
                                            "class": "wms-header-block"
                                        },
                                        "b": {
                                            "Style": {
                                                "width": {
                                                    "__type__": "expression",
                                                    "expression": "concat([%/params/contentWidth%], 'px')"
                                                }
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
                                                        "path": "../bgHeaderBlock/b/TimeKeeper",
                                                        "message": "start"
                                                    }
                                                ],
                                                "onHidden": [
                                                    {
                                                        "path": "../bgHeaderBlock/b/TimeKeeper",
                                                        "message": "stop"
                                                    }
                                                ]
                                            }
                                        },
                                        "subNodes": {
                                            "counter": {
                                                "tagName": "div",
                                                "attrs": {
                                                    "class": "wms-cont-counter"
                                                },
                                                "b": {
                                                    "Style": {
                                                        "width": {
                                                            "__type__": "expression",
                                                            "expression": "concat([%/params/contentWidth%], 'px')"
                                                        }
                                                    }
                                                },
                                                "subNodes": {
                                                    "count-down": {
                                                        "__type__": "state",
                                                        "default": {
                                                            "tagName": "div",
                                                            "attrs": {
                                                                "id": "count-down",
                                                                "class": "wms-count-down -wms-fullexpand none"
                                                            }
                                                        },
                                                        "3s": {
                                                            "tagName": "div",
                                                            "attrs": {
                                                                "id": "count-down",
                                                                "class": "wms-count-down"
                                                            },
                                                            "b": {
                                                                "Timer": {
                                                                    "state": "2s",
                                                                    "timeout": 1000
                                                                }
                                                            }
                                                        },
                                                        "2s": {
                                                            "tagName": "div",
                                                            "attrs": {
                                                                "id": "count-down",
                                                                "class": "wms-count-down -wms-2s"
                                                            },
                                                            "b": {
                                                                "Timer": {
                                                                    "state": "1s",
                                                                    "timeout": 1000
                                                                }
                                                            }
                                                        },
                                                        "1s": {
                                                            "tagName": "div",
                                                            "attrs": {
                                                                "id": "count-down",
                                                                "class": "wms-count-down -wms-3s"
                                                            },
                                                            "b": {
                                                                "Timer": {
                                                                    "timeout": 1000,
                                                                    "events": [
                                                                        {
                                                                            "state": "default"
                                                                        },
                                                                        {
                                                                            "path": "[[wmsGeneralBtnExpand]]",
                                                                            "message": "toggleClass",
                                                                            "params": "-wms-nodisplay"
                                                                        },
                                                                        {
                                                                            "path": "[[wmsBtnClose]]",
                                                                            "message": "toggleClass",
                                                                            "params": "-wms-nodisplay"
                                                                        },
                                                                        {
                                                                            "path": "[[wmsFullFgMain]]",
                                                                            "message": "toggleClass",
                                                                            "params": "-wms-mid-event"
                                                                        },
                                                                        {
                                                                            "path": "[[wmsMidContainer]]",
                                                                            "message": "resetAndPlay"
                                                                        },
                                                                        {
                                                                            "path": "[[wmsFullBgMain]]",
                                                                            "message": "toggleClass",
                                                                            "params": "-wms-expanded"
                                                                        },
                                                                        {
                                                                            "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO%], 1, [%/creativeId%])"
                                                                        },
                                                                        {
                                                                            "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO_COUNT%], [%/creativeId%])"
                                                                        },
                                                                        {
                                                                            "expression": "[%/skin_producer%].logTime([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO%], [%/creativeId%])"
                                                                        }
                                                                    ]
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "mouseEventContainer": {
                                                        "tagName": "div",
                                                        "attrs": {
                                                            "class": "wms-mouseEventContainer none"
                                                        },
                                                        "b": {
                                                            "MouseEnterEvent": {
                                                                "path": "../count-down",
                                                                "state": "3s"
                                                            },
                                                            "MouseOutEvent": {
                                                                "path": "../count-down",
                                                                "state": "default"
                                                            },
                                                            "ClickEvent": {
                                                                "events": [
                                                                    {
                                                                        "path": "[[wmsGeneralBtnExpand]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnClose]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullFgMain]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-mid-event"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
                                                                        "message": "resetAndPlay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullBgMain]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-expanded"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
                                                                        "message": "unmute"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnSoundOn]]",
                                                                        "message": "addClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnSoundOff]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO%], 1, [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO_COUNT%], [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logTime([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO%], [%/creativeId%])"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    }
                                                }
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
                            }
                        }
                    },
                    "fullfg": {
                        "tagName": "div",
                        "size": {
                            "width": "100%"
                        },
                        "name": "wmsFullFgMain",
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
                                            "expandCloseContainer": {
                                                "tagName": "div",
                                                "name": "closeContainer",
                                                "attrs": {
                                                    "class": "wms-box-btns -wms-generalbtns"
                                                },
                                                "subNodes": {
                                                    "expandIcon": {
                                                        "tagName": "div",
                                                        "name": "wmsGeneralBtnExpand",
                                                        "attrs": {
                                                            "class": "wms-btn-expand"
                                                        },
                                                        "b": {
                                                            "ClickEvent": {
                                                                "events": [
                                                                    {
                                                                        "path": "[[wmsGeneralBtnExpand]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnClose]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullFgMain]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-mid-event"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
                                                                        "message": "resetAndPlay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
                                                                        "message": "unmute"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullBgMain]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-expanded"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnSoundOn]]",
                                                                        "message": "addClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnSoundOff]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO%], 1, [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO_COUNT%], [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logTime([%/skin_producer/names/HAS_EXPANDED_FULL_VIDEO%], [%/creativeId%])"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
                                                    "closeIcon": {
                                                        "tagName": "div",
                                                        "name": "wmsBtnClose",
                                                        "attrs": {
                                                            "class": "wms-btn-close -wms-nodisplay"
                                                        },
                                                        "b": {
                                                            "ClickEvent": {
                                                                "events": [
                                                                    {
                                                                        "path": "[[wmsGeneralBtnExpand]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnClose]]",
                                                                        "message": "toggleClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullFgMain]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-expanded"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullFgMain]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-mid-event"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsFullBgMain]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-expanded"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
                                                                        "message": "pause"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/HAS_CLOSED_FULL_VIDEO%], 1, [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].incMetric([%/skin_producer/names/HAS_CLOSED_FULL_VIDEO_COUNT%], [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logTime([%/skin_producer/names/HAS_CLOSED_FULL_VIDEO%], [%/creativeId%])"
                                                                    }
                                                                ]
                                                            }
                                                        }
                                                    },
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
                                                                        "path": "[[wmsBtnSoundOn]]",
                                                                        "message": "addClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnSoundOff]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
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
                                                                        "path": "[[wmsBtnSoundOn]]",
                                                                        "message": "removeClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsBtnSoundOff]]",
                                                                        "message": "addClass",
                                                                        "params": "-wms-nodisplay"
                                                                    },
                                                                    {
                                                                        "path": "[[wmsMidContainer]]",
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
                            },
                            "wmsMidContainer": {
                                "tagName": "div",
                                "name": "wmsMidContainer",
                                "attrs": {
                                    "class": "wms-mid-container"
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
                                "video": {
                                    "autoplay": false,
                                    "muted": true,
                                    "attrs": {
                                        "class": "wms-mid-video"
                                    },
                                    "subNodes": {
                                        "quicktime": {
                                            "tagName": "source",
                                            "attrs": {
                                                "src": "https://cs-assets.wemass.com/ad_creatives/2026-05/Xandr_ImmersiveSkin_ViajesECI_MOCKUP_040526/spot-macPlanet edit.mov",
                                                "type": "video/quicktime"
                                            }
                                        },
                                        "webm": {
                                            "tagName": "source",
                                            "attrs": {
                                                "src": "https://cs-assets.wemass.com/ad_creatives/2026-05/Xandr_ImmersiveSkin_ViajesECI_MOCKUP_040526/spot-genPlanet edit.webm",
                                                "type": "video/webm"
                                            }
                                        }
                                    },
                                    "events": {
                                        "started": {
                                            "events": [
                                                {
                                                    "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_STARTED%], 1, 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_STARTED_COUNT%], 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].logTime('wmsMidVideo' + '_' + [%/skin_producer/names/VIDEO_STARTED%], [%/creativeId%])"
                                                }
                                            ]
                                        },
                                        "firstQuartile": {
                                            "events": [
                                                {
                                                    "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_25_PERCENT%], 1, 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_25_PERCENT_COUNT%], 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].logTime('wmsMidVideo' + '_' + [%/skin_producer/names/VIDEO_25_PERCENT%], [%/creativeId%])"
                                                }
                                            ]
                                        },
                                        "secondQuartile": {
                                            "events": [
                                                {
                                                    "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_50_PERCENT%], 1, 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_50_PERCENT_COUNT%], 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].logTime('wmsMidVideo' + '_' + [%/skin_producer/names/VIDEO_50_PERCENT%], [%/creativeId%])"
                                                }
                                            ]
                                        },
                                        "thirdQuartile": {
                                            "events": [
                                                {
                                                    "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_75_PERCENT%], 1, 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_75_PERCENT_COUNT%], 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].logTime('wmsMidVideo' + '_' + [%/skin_producer/names/VIDEO_75_PERCENT%], [%/creativeId%])"
                                                }
                                            ]
                                        },
                                        "ended": {
                                            "events": [
                                                {
                                                    "path": "[[wmsFullFgMain]]",
                                                    "message": "removeClass",
                                                    "params": "-wms-mid-event"
                                                },
                                                {
                                                    "path": "[[wmsGeneralBtnExpand]]",
                                                    "message": "toggleClass",
                                                    "params": "-wms-nodisplay"
                                                },
                                                {
                                                    "path": "[[wmsBtnClose]]",
                                                    "message": "toggleClass",
                                                    "params": "-wms-nodisplay"
                                                },
                                                {
                                                    "path": "[[wmsFullFgMain]]",
                                                    "message": "removeClass",
                                                    "params": "-wms-expanded"
                                                },
                                                {
                                                    "path": "[[wmsFullBgMain]]",
                                                    "message": "removeClass",
                                                    "params": "-wms-expanded"
                                                },
                                                {
                                                    "path": "[[wmsMidContainer]]",
                                                    "message": "pause"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].logMetricVideo([%/skin_producer/names/VIDEO_ENDED%], 1, 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].incMetricVideo([%/skin_producer/names/VIDEO_ENDED_COUNT%], 'wmsMidVideo', [%/creativeId%])"
                                                },
                                                {
                                                    "expression": "[%/skin_producer%].logTime('wmsMidVideo' + '_' + [%/skin_producer/names/VIDEO_ENDED%], [%/creativeId%])"
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
                                "contentClass": ".wms-skinbg",
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
                                                        "id": "##animationId450##",
                                                        "animationClass": "##animationClass450##",
                                                        "animationUrl": "##zipFile450##"
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
