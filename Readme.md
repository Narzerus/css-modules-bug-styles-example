Package with styles for css-modules-repro repo

# Error 1
When doing

```
composes: importedClass from './toimport.scss';
```

I get:

```
=> Errors prevented startup:                  

   While processing files with nathantreid:css-modules (for target web.browser):

   /Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/input.js:61:22:
   /Users/rafaelvidaurre/Code/pathable/css-modules-repro/packages/css-modules-repro-styles/imports/test.scss:1:1:
   Unknown word
   at Input.error
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/input.js:61:22)
   at Parser.unknownWord
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/parser.js:457:26)
   at Parser.word
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/parser.js:174:14)
   at Parser.loop
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/parser.js:60:26)
   at parse
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/parse.js:26:12)
   at new LazyResult
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/lazy-result.js:61:24)
   at Processor.process
   (/Users/rafaelvidaurre/.meteor/packages/nathantreid_css-modules/.2.1.0.1alj0r2++os+web.browser+web.cordova/plugin.mss.os/npm/node_modules/meteor/mss/node_modules/postcss/lib/processor.js:34:16)
   at CssModulesProcessor.load (packages/mss/css-modules-processor.js:74:5)
   at packages/mss/css-modules-processor.js:33:10
   at tryCallTwo
   (/Users/rafaelvidaurre/.meteor/packages/meteor-tool/.1.3.4_4.l6g6oj++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/promise/lib/core.js:45:5)
   at doResolve
   (/Users/rafaelvidaurre/.meteor/packages/meteor-tool/.1.3.4_4.l6g6oj++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/promise/lib/core.js:200:13)
   at new Promise
   (/Users/rafaelvidaurre/.meteor/packages/meteor-tool/.1.3.4_4.l6g6oj++os.osx.x86_64+web.browser+web.cordova/mt-os.osx.x86_64/dev_bundle/lib/node_modules/promise/lib/core.js:66:3)
   at CssModulesProcessor.processInternal (packages/mss/css-modules-processor.js:28:11)
   at CssModulesProcessor.process (packages/mss/css-modules-processor.js:18:26)
   at CssModulesBuildPlugin.processFile (packages/mss/css-modules-build-plugin.js:247:22)
   at Array.forEach (native)
   at CssModulesBuildPlugin.compileCssModules (packages/mss/css-modules-build-plugin.js:239:34)
   at CssModulesBuildPlugin.processFilesForTarget (packages/mss/css-modules-build-plugin.js:62:21)


=> Your application has errors. Waiting for file change.
```

When
