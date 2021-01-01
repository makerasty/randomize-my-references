# randomize my references
[![](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Frmf.eljonek.art)](https://refs.eljonek.art) ![](https://img.shields.io/github/package-json/v/makerasty/randomize-my-references) ![](https://img.shields.io/github/license/makerasty/randomize-my-references)

Vue ([Nuxt.js](https://github.com/nuxt/nuxt.js "Nuxt.js")) powered website to generate selection of random reference images for artists. [Eljonek](https://eljonek.art) came up with the idea of this project therefore it is hosted on her domain. Images are pulled from Pixabay by free API.

[![](https://refs.eljonek.art/screenshot.png)](https://refs.eljonek.art/)


## Setup
Clone repository and run `npm install`.

After complete installation of dependencies create **.env** file in main directory with template provided in the next section. It is going to be used with API key from Pixabay which you can find [there](https://pixabay.com/api/docs/ "there") once you register account. Free access limits to 5000 requests per hour.

Finally, the whole project was build with SSG in mind so it is the best to go with `npm run generate` and deploy it on hosting, but if you wish to test it locally, type `npm run dev` and head into localhost:3000.

## .env template
```
PIXA_KEY=XXXXXX
```

## Rate limits
* 5 requests in single search
* 5000 requests per hour

## License
This project is licensed under the terms of the MIT license.
