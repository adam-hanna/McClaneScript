McClane = {};

McClane.directory = {
  //McClane psuedo code : javascript
  "Now I have a machine gun. Ho Ho Ho!": "var",
  "Yippee-ki-yay motherfucker!": "function",
  "Come to papa": "return",
  "What the fuck are you doing?!": "if",
  "Who's driving this car, Stevie Wonder?": "else",
  "Merry Christmas!": "TRUE",
  "Doesn't look like you're in charge of jack shit!": "FALSE",
  "I was pretty goddamn useless": "null",
  "Pretty fuckin unappreciated Al": "NAN",
  "Jesus, is the circus in town?": "for",
  "Why the fuck didnt you stop'em John?": "while",
  "Agent Johnson?": "switch",
  "I hate it when I'm right": "case",
  "Drop it dickhead!": "break",
  "Motherfuckin motherfucker": "default",
  "Need a hug?": "=",
  "Geronimo motherfucker!": "+",
  "Drop the gun!": "-",
  "Let's go kill some motherfuckers!": "*",
  "Take the twinkie out of your mouth": "/",
  "I was out of bullets": "%",
  "Welcome to the party, pal!": "console.log"
};

McClane.says = function(fileLocation) {
  //load file with jquery
  $.get(fileLocation, function(mcScript) {
    //replace the McClane psuedo code with javascript
    for (var prop in McClane.directory) {
      mcScript = replaceAll(prop, McClane.directory[prop], mcScript)
    };

    //run the converted file
    window["eval"].call(window, mcScript);
  });
};

//Thanks!
//http://stackoverflow.com/questions/1144783/replacing-all-occurrences-of-a-string-in-javascript
function replaceAll(find, replace, string) {
  return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}