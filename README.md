McClaneScript
=============

McClane Script is a new syntax for javascript. Now, right all of your code with quotes from John McClane in Die Hard!

## Syntax
Many of the links are **NSFW** bc language!

| McClane Script        | Javascript           |
| :-------------------: | :-------------------:|
| [Now I have a machine gun. Ho Ho Ho!](https://www.youtube.com/watch?v=0si6wsZWn6g) | var |
| [Yippee-ki-yay motherfucker!](https://www.youtube.com/watch?v=V0s_wZgxA7s) | function |
| Come to papa | return |
| What the fuck are you doing?! | if |
| [Who's driving this car, Stevie Wonder?](https://www.youtube.com/watch?v=U_oXrGF7zyY#t=1m07s) | else |
| Merry Christmas! | TRUE |
| Doesn't look like you're in charge of jack shit! | FALSE |
| I was pretty goddamn useless | null |
| Pretty fuckin unappreciated Al | NAN |
| Jesus, is the circus in town? | for |
| Why the fuck didnt you stop'em John? | while |
| Agent Johnson? | switch |
| I hate it when I'm right | case |
| Drop it dickhead! | break |
| Motherfuckin motherfucker | default |
| Need a hug? | = |
| Geronimo motherfucker! | + |
| Drop the gun! | - |
| Let's go kill some motherfuckers! | * |
| Take the twinkie out of your mouth | / |
| [I was out of bullets](https://www.youtube.com/watch?v=8YXi9JAgdf0#t=0m37s) | % |
| [Welcome to the party, pal!](https://www.youtube.com/watch?v=9OpIbiFmY60) | console.log |

## Usage
Simply write your code and save it to any file that you can access on your server. The file extension doesn't matter, but might I suggest ".mc" for McClane?

Then call the McClane script using:
```javascript
McClane.says('String Location of Your McClane Script File');
```

## Example
```
//public/myMCScript.mc
Welcome to the party, pal!("hi!");

Now I have a machine gun. Ho Ho Ho! i Need a hug? 0;

fAddStuff()

Welcome to the party, pal!(i);

Yippee-ki-yay motherfucker! fAddStuff() {
	i Geronimo motherfucker!Need a hug? 5
};
```
```javascript
//app.js
McClane.says("/myMCScript.mc");
```
```
//in the browser's console
=> hi!
=> 5
```