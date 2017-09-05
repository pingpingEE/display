var config = {
  Maps: {},
  service: {
    url: '',
    WEBAPP_SERVICES: 'http://192.168.0.87:8812/',
    QX_SERVICES: 'http://192.168.0.226:7007/rest/',
    GEOSERVER_SERVICE: 'http://192.168.0.226:8089/geoserver/', // geoserver url
    ROADNET_SERVICES: 'http://192.168.0.87:8805/'
  },
  mapConfig: {
    view: {
      center: [108.50956531741136, 33.759930978544794],
      projection: 'EPSG:4326',
      zoom: 5, // resolution
    },
    baseLayers: [
      {
        layerName: 'GaoDe',
        isDefault: true,
        layerType: 'GaoDe',
        attribution: {
          url: 'https://aurorafe.github.io',
          title: '恒达时讯',
          messages: '版权所有'
        },
        layerUrl: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
      },
      {
        // 添加底图切换
        layerName: 'vector',
        isDefault: true,
        visible: false,
        layerType: 'TileWMS',
        attribution: {
          url: 'https://aurorafe.github.io',
          title: '恒达时讯',
          messages: '版权所有'
        },
        layerUrl: 'http://211.101.37.234:8079/hdmapserver/wms',
        layers: 'jxydsj',
        styles: '',
        projection: 'EPSG:4326',
        tiled: true,
        tiledsorrigin: '-180.01993355482,-90'
      }
    ]
  },
  roadNetworkConfig: {
    trafficWeather: {
      layerName: 'trafficWeather',
      layerType: 'TileWMS',
      layerUrl: 'http://192.168.0.226:8089/geoserver/lwjk/wms',
      layers: 'lwjk:trafficWeather',
      styles: '',
      projection: 'EPSG:4326',
      tiled: true,
      tiledsorrigin: '109.716316223145,39.0473251342773',
      create: true,
      addLayer: true
    },
    roadSituation: {
      layerName: 'roadSituation',
      layerType: 'TileWMS',
      layerUrl: 'http://192.168.0.226:8089/geoserver/lwjk/wms',
      layers: 'lwjk:roadSituation',
      styles: '',
      projection: 'EPSG:4326',
      tiled: true,
      tiledsorrigin: '109.716316223145,39.0473251342773',
      create: true,
      addLayer: true
    }
  }
}