# Bollywood Actors

> Get bollywood actor names

<img src="https://i.pinimg.com/originals/61/2f/da/612fdaf59ea3daa811b53682d43033a3.jpg" width="100" height="112" align="right">

The list is just [JSON file](bollywood-actors.json) and can be used anywhere.


## Install

```
$ npm install bollywood-actors-coding-discussion
```


## Usage

```js
const bollywoodActors = require('bollywood-actors-coding-discussion');

bollywoodActors.all;
//=> ["Aamir Khan", "Aarun Nagar", …]

bollywoodActors.random();
//=> 'Shah Rukh Khan'
```


## API

### .all

Type: `string[]`

bollywood actor names in alphabetical order.

### .random()

Type: `Function`

Random  actor name.

## License

MIT © [Avick Saha](https://sonicboomboom.github.io/personal-site/)
