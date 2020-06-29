"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.

let messages = {
	"Help": {
		"Title": "",
		"Subtitle": "",
		"Message": "<iframe width='470' height='402' src='https://edpuzzle.com/embed/assignments/5ef9949d010c793f32f726d3/watch' frameborder='0' allowfullscreen></iframe>"
	},
	"Youtube": {
		"Title": "",	
		"Subtitle": "",
		"Message": '<iframe src="https://learningapps.org/watch?app=6786525" style="border:0px;width:100%;height:500px" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>'
	}
};

// Define the notifications used in the game
let notifications = {	
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
    "universe": {"particles":{"number":{"value":0,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}
}

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {
	"intro": "intro2.jpg",
	"milkyway": "milkyway.jpg",
	"solarsystem": "solarsystem.jpg",
};

// Define the Characters
const characters = {
	"p": {
		"Name": "{{player.name}}",
		"Color": "#ff3951"
	},
	"h": {
		"Name": "Sensei",
		"Color": "#5bcaff",
		"Images": {
			"Normal": "kakashi.png"
		}
	}
};

let script = {
	"English": {
	"Start": [
	
		/*
		"notify Welcome",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.Name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},
		*/
		"scene white with fadeIn",
		"centered Who am I?",
		"centered Where am I?",
		"scene milkyway with pulse",
		"wait 2000",
		"jump Universe"
		],
		"Universe": [
		"scene solarsystem with fadeIn",
		"wait 2000",
		"scene intro with fadeIn",
		"particles universe",
		"show h Normal left",
		"h Hi, {{player.name}}! Welcome to Ala-Too University!",

		{
			"Choice": {
				"Dialog": "h Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [

		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"display message Youtube",
		{
			"Choice": {
				"Dialog": "h In what year Ala-Too University was founded?",
				"2001": {
					"Text": "2001",
					"Do": ""
				},
				"1999": {
					"Text": "1999",
					"Do": ""
				},
				"1996": {
					"Text": "1996",
					"Do": ""
				},
				"1896": {
					"Text": "1896",
					"Do": ""
				}
			}
		},
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]
	},
	"Кыргызча": {
		"Start": [
			"particles universe",
			"notify Welcome",
			/*
			{
				"Input": {
					"Text": "What is your name?",
					"Validation": function (input) {
						return input.trim().length > 0;
					},
					"Save": function (input) {
						storage.player.Name = input;
						return true;
					},
					"Warning": "You must enter a name!"
				}
			},
			*/
			"scene intro with fadeIn",
			"particles universe",
			"show h Normal left",
			"h Ассалямуалейкум {{player.Name}} Дос! Welcome to Ala-Too University!",
	
			{
				"Choice": {
					"Dialog": "h Have you already read some documentation?",
					"Yes": {
						"Text": "Yes",
						"Do": "jump Yes"
					},
					"No": {
						"Text": "No",
						"Do": "jump No"
					}
				}
			}
		],
	
		"Yes": [
	
			"h That's awesome!",
			"h Then you are ready to go ahead and create an amazing Game!",
			"h I can't wait to see what story you'll tell!",
			"end"
		],
	
		"No": [
	
			"h You can do it now.",
	
			"display message Help",
	
			"h Go ahead and create an amazing Game!",
			"h I can't wait to see what story you'll tell!",
			"end"
		]
	},
	"Русский": {
		"Start": [
			"particles universe",
			"notify Welcome",
			/*
			{
				"Input": {
					"Text": "What is your name?",
					"Validation": function (input) {
						return input.trim().length > 0;
					},
					"Save": function (input) {
						storage.player.Name = input;
						return true;
					},
					"Warning": "You must enter a name!"
				}
			},
			*/
			"scene intro with fadeIn",
			"particles universe",
			"show h Normal left",
			"h Hola {{player.Name}} Amigo! Welcome to Ala-Too University!",
	
			{
				"Choice": {
					"Dialog": "h Have you already read some documentation?",
					"Yes": {
						"Text": "Yes",
						"Do": "jump Yes"
					},
					"No": {
						"Text": "No",
						"Do": "jump No"
					}
				}
			}
		],
	
		"Yes": [
	
			"h That's awesome!",
			"h Then you are ready to go ahead and create an amazing Game!",
			"h I can't wait to see what story you'll tell!",
			"end"
		],
	
		"No": [
	
			"h You can do it now.",
	
			"display message Help",
	
			"h Go ahead and create an amazing Game!",
			"h I can't wait to see what story you'll tell!",
			"end"
		]
		}	

};
