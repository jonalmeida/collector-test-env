Collector Test Environment
==========================

Useful to test sending GET and POST events to a Snowplow collector

## Setup
1. `git clone <repo> && cd <repo>`
2. `npm install`
3. `npm start`

### Additional Setup
Works well with [ngrok](https://ngrok.com/) to inspect the messages sent to your node app while emulating a pseudo-production env.

1. Install ngrok from [the site](https://ngrok.com/).
2. `./ngrok 3000`
3. Send events to the randomly generated URI (or buy ngrok and use specific subdomains you want). An example of a generated URI: `727f64a9.ngrok.com`
4. Inspect the events sent to your local collector at: [http://localhost:4040](http://localhost:4040)
