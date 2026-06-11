_skn_creative={
    "title": "Xandr_SkinHaloVideoAnimated_Demo_110626",
    "adPath": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/SkinHaloVideoAnimated",
    "uuid": "d5b7a902",
    "Type": "SkinHaloVideoAnimated",
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
                            "class": {
                                "1000": "wms-full-bg wms-1000",
                                "1200": "wms-full-bg wms-1200",
                                "__type__": "expression",
                                "expression": "[%/params/contentWidth%]"
                            }
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
                                        "condition": "1"
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
                                                            "skinbgimage": {
                                                                "tagName": "div",
                                                                "attrs": {
                                                                    "class": "wms-backgroundimage"
                                                                }
                                                            },
                                                            "skinanimation": {
                                                                "tagName": "div",
                                                                "b": {
                                                                    "1000": {
                                                                        "AdobeAnimation": {
                                                                            "id": "A9085FCE5E16284F86BA72A0BAAA114D",
                                                                            "animationClass": "desktop",
                                                                            "animationUrl": "1000.js"
                                                                        }
                                                                    },
                                                                    "1200": {
                                                                        "AdobeAnimation": {
                                                                            "id": "A9085FCE5E16284F86BA72A0BAAA114D",
                                                                            "animationClass": "desktop",
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
                                                "1000": "wms-cont-video -wms1000 -wms-custom",
                                                "1200": "wms-cont-video -wms1200 -wms-custom",
                                                "__type__": "expression",
                                                "expression": "[%/params/contentWidth%]"
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
                                                "src": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/SkinHaloVideoAnimated/Our%20Time.mp4",
                                                "class": "wms-video clickable"
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
                                        "1000": "wms-halo wms-1000",
                                        "1200": "wms-halo wms-1200",
                                        "__type__": "expression",
                                        "expression": "[%/params/contentWidth%]"
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
                                    "skinhaloanimation": {
                                        "tagName": "div",
                                        "b": {
                                            "1000": {
                                                "AdobeAnimation": {
                                                    "id": "F3D9AC4CB370C04997E5178A54010156",
                                                    "animationClass": "halo90x1000",
                                                    "animationUrl": "halo.js"
                                                }
                                            },
                                            "1200": {
                                                "AdobeAnimation": {
                                                    "id": "F3D9AC4CB370C04997E5178A54010156",
                                                    "animationClass": "halo90x1000",
                                                    "animationUrl": "halo.js"
                                                }
                                            },
                                            "__type__": "expression",
                                            "expression": "[%/params/contentWidth%]"
                                        },
                                        "attrs": {
                                            "class": "wms-skinAnimation"
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
                                                    "450": "https://cdn.jsdelivr.net/gh/Wemass-Maxx/CSTesting@main/Creatividades/SkinHaloVideoAnimated/1000.webp",
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
