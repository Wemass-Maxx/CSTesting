_skn_creative={  "title":"Xandr_DualSkin_ALCAMPO_DiaMadre_MADRID_220426", 
  "adPath":"https://cs-assets.wemass.com/ad_creatives/2026-04/Xandr_DualSkin_ALCAMPO_DiaMadre_MADRID_220426", 
  "uuid":"0d6f93ef", 

    "Type": "DualSkin",
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
                                    "expression": "[%/window/__wms_click_url%]"
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
                                                                        "expression": "[%/skin_producer%].log([%/skin_producer/names/VIEW_ABILITY_EXTENDED%], 1, [%/creativeId%])"
                                                                    },
                                                                    {
                                                                        "expression": "[%/skin_producer%].logTime([%/skin_producer/names/VIEW_ABILITY_EXTENDED%], [%/creativeId%])"
                                                                    }
                                                                ]
                                                            }
                                                        },
                                                        "subNodes": {
                                                            "overlay1": {
                                                                "tagName": "canvas",
                                                                "attrs": {
                                                                    "class": "wms-skinimg -wms-dual",
                                                                    "width": 1920,
                                                                    "height": 1000,
                                                                    "id": "canvas"
                                                                },
                                                                "canvasImage": {
                                                                    "__type__": "expression",
                                                                    "expression": "[%/params/contentWidth%]",
                                                                    "1000": "https://cs-assets.wemass.com/ad_creatives/2026-04/Xandr_DualSkin_ALCAMPO_DiaMadre_MADRID_220426/Desktop cuerpo 1000 V1.jpg",
                                                                    "1200": "https://cs-assets.wemass.com/ad_creatives/2026-04/Xandr_DualSkin_ALCAMPO_DiaMadre_MADRID_220426/Desktop cuerpo 1200 V1.jpg"
                                                                }
                                                            },
                                                            "overlay2": {
                                                                "tagName": "div",
                                                                "name": "wms-targetOverlay",
                                                                "attrs": {
                                                                    "class": "wms-skinbg -wms-dual"
                                                                },
                                                                "b": {
                                                                    "DualEngagementMeasurement": {
                                                                        "threshold": "80",
                                                                        "events": [
                                                                            {
                                                                                "expression": "[%/skin_producer%].logMetric([%/skin_producer/names/DUAL_ENGAGEMENT%], 1, [%/creativeId%])"
                                                                            },
                                                                            {
                                                                                "expression": "[%/skin_producer%].logTime([%/skin_producer/names/DUAL_ENGAGEMENT%], [%/creativeId%])"
                                                                            }
                                                                        ]
                                                                    },
                                                                    "Style": {
                                                                        "1000": {
                                                                            "background-image": "url('https://cs-assets.wemass.com/ad_creatives/2026-04/Xandr_DualSkin_ALCAMPO_DiaMadre_MADRID_220426/Desktop cuerpo 1000 V2.jpg')"
                                                                        },
                                                                        "1200": {
                                                                            "background-image": "url('https://cs-assets.wemass.com/ad_creatives/2026-04/Xandr_DualSkin_ALCAMPO_DiaMadre_MADRID_220426/Desktop 1cuerpo 1200 V2.jpg')"
                                                                        },
                                                                        "__type__": "expression",
                                                                        "expression": "[%/params/contentWidth%]"
                                                                    }
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
                    "body": {
                        "b": {
                            "MouseMoveEvent": {
                                "expression": {
                                    "expression": "concat([%/event/pageX%] - (([%/window/innerWidth%] - 1920) / 2),'px')",
                                    "target": "/globalNodes/wms-targetOverlay/dom/style/width"
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
