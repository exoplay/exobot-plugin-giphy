# exobot-plugin-giphy

Gifs in chat served by Giphy.

## Usage

`exobot gif me bananas`

## Installation

* `npm install --save @exoplay/exobot/exobot-plugin-giphy`

## A Setup Example

```javascript
import Exobot from '@exoplay/exobot';
import Giphy from '@exoplay/exobot-plugin-giphy';

const Bot = new Exobot(BOT_NAME, {
  // ...
  plugins: [
    new Giphy({ apiKey: process.env.GIPHY_API_KEY });
  ],
});
```

## Setup Notes

Go create a Giphy API Key at http://api.giphy.com/submit.

## License

LGPL licensed. Copyright 2016 Exoplay, LLC. See LICENSE file for more details.
