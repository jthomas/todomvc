# TodoMVC Dojo Architecture Example

## Introduction

An example making use of the [Dojo](http://dojotoolkit.org/) and [dojox/mvc](https://github.com/edchat/dojox_mvc).

## Running

Puting the contents under this folder to a web server and hit index.html in this folder will run the demo.

## Setup for development

Download Dojo source (SDK) from [Dojo download page](http://dojotoolkit.org/download/) and deploy it to a web server.
Put todomvc folder (the root folder of TodoMVC project) there.
For example:

```
htdocs
	dojo
		dojo
		dijit
		dojox
		todomvc
			architecture-examples
				dojo
					css
					js
					profiles
					index-dev.html
					index.html
		util
```

Running http://yourwebserver/dojo/todomvc/architecture-examples/dojo/index-dev.html will pick up JS code in Dojo/TodoMVC source.
(Instead of the built version located in todomvc/architecture-examples/dojo/js/lib/todo/dojo)

## Build

1. Copy todomvc/architecture-examples/dojo/profiles/todomvc.profile.js to util/buildscripts/profiles
2. Go to util/buildscripts
3. Run `./build.sh --profile todomvc --release` (Or use build.bat)
4. Go to todomvc-release/dojo folder and copy dojo.js there to todomvc/architecture-examples/dojo/js/lib/dojo

## Credits

Created by [James Thomas](http://jamesthom.as/) and [Ed Chatelain](https://github.com/edchat)
Dojo 1.8 version by [Akira Sudoh](https://github.com/asudoh)
