var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6207548523566029,
          "pitch": 0.7287745992121852,
          "rotation": 0,
          "target": "1-kitchen-1"
        },
        {
          "yaw": -2.3939887794233634,
          "pitch": 0.5594682773006028,
          "rotation": 0,
          "target": "3-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kitchen-1",
      "name": "Kitchen 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9037058430150573,
          "pitch": 0.7502125027745841,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -0.14580763876968916,
          "pitch": 0.6350668305456342,
          "rotation": 0,
          "target": "2-kitchen-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-2",
      "name": "Kitchen 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.113582610782709,
          "pitch": 0.5843033190734861,
          "rotation": 0,
          "target": "1-kitchen-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4708688945499553,
          "pitch": 0.4552226360805527,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.0003194828321504,
          "pitch": 0.3238909675814359,
          "rotation": 0,
          "target": "4-small-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-small-corridor",
      "name": "Small corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48232220693797956,
          "pitch": 0.4407138996385509,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": 2.837669734668575,
          "pitch": 0.6828981753545893,
          "rotation": 0,
          "target": "5-bathroom"
        },
        {
          "yaw": -1.5531121674706423,
          "pitch": 0.7959185488255542,
          "rotation": 0,
          "target": "6-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2711824980247268,
          "pitch": 0.6108083245749789,
          "rotation": 0,
          "target": "4-small-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.09915674891802,
          "pitch": 0.8358926644251596,
          "rotation": 0,
          "target": "4-small-corridor"
        },
        {
          "yaw": 2.3923041940849394,
          "pitch": 0.3290590297191791,
          "rotation": 0,
          "target": "3-living-room"
        },
        {
          "yaw": -0.4884025958282532,
          "pitch": 0.5112122244816213,
          "rotation": 0,
          "target": "7-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.4403796915375597,
          "pitch": 0.404568119021949,
          "rotation": 0,
          "target": "6-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
