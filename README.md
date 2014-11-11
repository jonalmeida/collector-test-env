Collector Test Environment
==========================

Useful to test sending GET and POST events to a Snowplow collector

- Uses Express 4 to handle routes
- Posts timestamp of the event received. For POST, the timestamp of the first event in the `data` array.

## Setup
1. Clone this repo somewhere
2. `cd collector-test-env`
3. `npm install`
4. `npm start`

### Additional Setup
Works well with [ngrok](https://ngrok.com/) to inspect the messages sent to your node app while emulating a pseudo-production env.

1. Install ngrok from [the site](https://ngrok.com/).
2. `./ngrok 3000`
3. Send events to the randomly generated URI (or buy ngrok and use specific subdomains you want). An example of a generated URI: `727f64a9.ngrok.com`
4. Inspect the events sent to your local collector at: [http://localhost:4040](http://localhost:4040)

## Test Setup 
- Verify the app is working correctly by sending a POST of `sample_event.json` to the collector:
```bash
curl -X POST -d @sample_event.json [URL]/com.snowplowanalytics.snowplow/tp2 --header "Content-Type:application/json; charset=utf-8"
```
- Verify it with a GET as well:
```bash

curl -X GET -G \
'http://727f64a9.ngrok.com/i' \
-d e=pv \
-d url=www.example.com \
-d page=Example%20Page \
-d refr=www.referrer.com \
-d aid=appId \
-d tna=someNamespace \
-d tv=andr-0.1.1 \
-d dtm=1411096832646 \
-d co=%7B%22data%22%3A%5B%7B%22data%22%3A%7B%22bearing%22%3A0.0%2C%22longitude%22%3A-83.0438326%2C%22latitudeLongitudeAccuracy%22%3A27.622%2C%22latitude%22%3A42.3026455%2C%22speed%22%3A0.0%2C%22altitude%22%3A0.0%7D%2C%22schema%22%3A%22iglu%3Acom.snowplowanalytics.snowplow%2Fgeolocation_context%2Fjsonschema%2F1-0-0%22%7D%2C%7B%22data%22%3A%7B%22deviceModel%22%3A%22Nexus%205%22%2C%22carrier%22%3A%22TELUS%22%2C%22osVersion%22%3A%224.4.4%22%2C%22osType%22%3A%22android%22%2C%22deviceManufacturer%22%3A%22LGE%22%7D%2C%22schema%22%3A%22iglu%3Acom.snowplowanalytics.snowplow%2Fmobile_context%2Fjsonschema%2F1-0-0%22%7D%5D%2C%22schema%22%3A%22iglu%3Acom.snowplowanalytics.snowplow%2Fcontexts%2Fjsonschema%2F1-0-0%22%7D \
-d res=1080x1776 \
-d tz=America%2FToronto \
-d lang=English \
-d eid=fdf43ef7-97bc-4756-a305-9510387cde9e \
-d p=mob
```
