import bollywoodActorsJson = require('./bollywood-actors.json');

declare const bollywoodActors: {
	/**
	Bollywood actor names in alphabetical order.

	@example
	```
	import bollywoodActors = require('bollywood-actors-coding-discussion');

	superheroes.all;
	//=> ["Aamir Khan", "Aarun Nagar", …]
	```
	*/
	readonly all: Readonly<typeof bollywoodActorsJson>;

	/**
	Random bollywood actor name.

	@example
	```
	import bollywoodActors = require('bollywood-actors-coding-discussion');

  bollywoodActors.random();
  //=> 'Shah Rukh Khan'
	```
	*/
	random(): string;
}

export = bollywoodActors;
