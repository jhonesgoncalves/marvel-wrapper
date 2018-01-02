# Marvel Wrapper

[![Build Status](https://travis-ci.org/jhonesgoncal/marvel-wrapper.svg?branch=master)](https://travis-ci.org/jhonesgoncal/marvel-wrapper)[![Coverage Status](https://coveralls.io/repos/github/jhonesgoncal/marvel-wrapper/badge.svg?branch=master)](https://coveralls.io/github/jhonesgoncal/marvel-wrapper?branch=master)

A wrapper to work with the [Marvel Web API](https://developer.marvel.com).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Marvel Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install marvel-wrapper --save
```

## How to use

### ES6

```js
// to import a specific method
import MarvelWrapper from 'marvel-wrapper';

const marvel = new MarvelWrapper({
  privateKey: 'YOUR_PRIVATEKEY_HERE',
  publicKey: 'YOUR_PUBLICKEY_HERE',
  limit: 'OPTIONAL_LIMIT'
});

// using  method
marvel.comic.getComics();
```

### CommonJS

```js
const MarvelWrapper = require('marvel-wrapper').default;

const marvel = new MarvelWrapper({
  privateKey: 'YOUR_PRIVATEKEY_HERE',
  publicKey: 'YOUR_PUBLICKEY_HERE',
  limit: 'OPTIONAL_LIMIT'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="marvel-wrapper.js"></script>

<!-- to import minified version -->
<script src="marvel-wrapper.min.js"></script>
```

After that the library will be available to the Global as `MarvelWrapper`. Follow an example:

```js

const marvel = new MarvelWrapper({
  privateKey: 'YOUR_PRIVATEKEY_HERE',
  publicKey: 'YOUR_PUBLICKEY_HERE',
  limit: 'OPTIONAL_LIMIT'
});

const comics = marvel.comic.getComics();
```

## Methods

> Follow the methods that the library provides.

> ## COMIC

### comic.getComics()

> Fetches lists of comics. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**No Arguments**
--

**Example**

```js
marvel.comic.getComics()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### comic.getComic(id)

> Fetch one comic by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getComic('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### comic.getCharacters(id)

> Fetched list characters by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getCharacters('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.getEvents(id)

> Fetched list events by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.getCreators(id)

> Fetched list creators by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getCreators('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### comic.getStories(id)

> Fetched list stories by id references comic. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.comic.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```


<<<<<<< HEAD
> ## CHARACTER

### character.getCharacters()

> Fetches lists of characters. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**No Arguments**
--

**Example**

```js
marvel.character.getCharacters()
  .then(reponse => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### character.getCharacter(id)

> Fetch one comic by id. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getCharacter('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item))
  })
```

### character.getComics(id)

> Fetched list comics by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getComics('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.getEvents(id)

> Fetched list events by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getEvents('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.getSeries(id)

> Fetched list creators by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getSeries('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```

### character.getStories(id)

> Fetched list stories by id references character. Test in [Marvel Web Console](https://developer.marvel.com/docs#!/public/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`      |*string* |  'Any search id'  |


**Example**

```js
marvel.character.getStories('37504')
  .then(response => {
    // do what you want with the response
    response => response.data.results.map(item => console.log(item.name))
  })
```
=======
>>>>>>> 874e0ad8b8a1ca0c79eb4f22279e3b04a606d58e

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Jhones Gonçalves](https://avatars2.githubusercontent.com/u/23177787?s=400&u=21bdafe4c1b9da7c42b78d7269df068771299f0b&v=4)|
|:---------------------:|
|  [Jhones Gonçalves](https://github.com/jhonesgoncal/)   |

See also the list of [contributors](https://github.com/jhonesgoncal/marvel-wrapper/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
