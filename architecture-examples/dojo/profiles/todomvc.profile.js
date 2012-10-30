var profile = (function(){
	return {
		// relative to this file
		basePath:"../../..",

		// relative to base path
		releaseDir:"./todomvc-release",

		packages:[{
			name:"dojo",
			location:"./dojo"
		},{
			name:"dijit",
			location:"./dijit"
		},{
			name:"dojox",
			location:"./dojox"
		},{
			name:"doh",
			location:"./util/doh"
		},{
			name:"todo",
			location:"./todomvc/architecture-examples/dojo/js/todo"
		}],

		selectorEngine:"lite",

		localeList:[],

		defaultConfig:{
			hasCache:{
				// these are the values given above, not-built client code may test for these so they need to be available
				'dojo-built':1,
				'dojo-loader':1,
				'dom':1,
				'host-browser':1,

				// default
				"config-selectorEngine":"lite"
			},
			async:1
		},

		// these are all the has feature that affect the loader and/or the bootstrap
		// the settings below are optimized for the smallest AMD loader that is configurable
		// and include dom-ready support
		staticHasFeatures:{
			'config-dojo-loader-catches':0,
			'config-tlmSiblingOfDojo':0,
			'dojo-firebug':1,
			'config-deferredInstrumentation':1,
			'dojo-amd-factory-scan':0,
			'dojo-built':1,
			'dojo-combo-api':0,
			'dojo-config-addOnLoad':0,
			'dojo-config-api':1,
			'dojo-config-require':0,
			'dojo-debug-messages':0,
			'dojo-dom-ready-api':1,
			'dojo-fast-sync-require':0,
			'dojo-guarantee-console':1,
			'dojo-has-api':1,
			'dojo-inject-api':1,
			'dojo-loader':1,
			'dojo-log-api':0,
			'dojo-modulePaths':0,
			'dojo-moduleUrl':0,
			'dojo-publish-privates':0,
			'dojo-requirejs-api':0,
			'dojo-sniff':1,
			'dojo-sync-loader':0,
			'dojo-test-sniff':0,
			'dojo-timeout-api':1,
			'dojo-trace-api':0,
			'dojo-undef-api':0,
			'dojo-v1x-i18n-Api':0,
			'dojo-xhr-factory':0,
			dom:1,
			'extend-dojo':1,
			'host-browser':1,
			'host-node':0,
			'host-rhino':0
		},

		layers:{
			"dojo/dojo":{
				include:[
					"dojo/domReady",
					"dojo/parser",
					"todo/app"
				]
			}
		}
	};
})();
