# 지도 Open API 정리

## 공공 데이터 포털
[사이트](https://www.data.go.kr/main.do)

## World 개발자센터
[사이트](http://dev.vworld.kr/dev/v4dv_geocoderguide2_s001.do)

## Naver 지도 Open API

## Daum 지도 Open API
- https 안됨 or header 미지정 오류

## SK Planet 지도 Open API
- https 안됨
- 위도, 경도 만 입력하면 미세먼지를 포함한 대기정보를 json 으로 받아올 수 있어서 편함

```js
// REST API 형식
https://apis.skplanetx.com/weather/airquality/current?version=1&lat=37.4038958&lon=127.1025766
```

```js
// json 예시
{
    "weather":{
        "airQuality":{
            "current":[
                {
                    "timeObservation":"2017-06-27 13:00:00",
                    "station":{
                        "latitude":"37.3905880000",
                        "longitude":"127.0778380000",
                        "network":"도시대기",
                        "name":"운중동",
                        "owner":"경기도보건환경연구원"
                    },
                    "so2":{
                        "grade":"좋음",
                        "value":"0.002"
                    },
                    "co":{
                        "grade":"좋음",
                        "value":"0.3"
                    },
                    "o3":{
                        "grade":"보통",
                        "value":"0.043"
                    },
                    "no2":{
                        "grade":"좋음",
                        "value":"0.013"
                    },
                    "pm10":{
                        "grade":"보통",
                        "value":"40"
                    },
                    "khai":{
                        "grade":"보통",
                        "value":"61"
                    },
                    "pm25":{
                        "grade":"보통",
                        "value":"19"
                    }
                }
            ]
        }
    },
    "common":{
        "alertYn":"Y",
        "stormYn":"N"
    },
    "result":{
        "code":9200,
        "requestUrl":"/weather/airquality/current?lon=127.1025766&lat=37.4038958&version=1",
        "message":"성공"
    }
}
```
