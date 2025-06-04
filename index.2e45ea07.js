// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"aVgSH":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "81f1410e2e45ea07";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"1Jvr0":[function(require,module,exports,__globalThis) {
// window.submitted = false; // Declare a global variable to track form submission
// var quoteRecaptchaWidgetId;
// function onRecaptchaLoad() {
//     quoteRecaptchaWidgetId = grecaptcha.render('recaptcha-quote', {
//         'sitekey': '6LeKT1UrAAAAAETU7mbRso_5yC7hXnEdL324Omu5'  // <-- Put your actual reCAPTCHA site key here
//     });
// }
window.submitted = false;
function showThankYouMessage1() {
    document.getElementById('thankyou-message1').style.display = 'block';
    document.getElementById('subb1').style.display = 'none';
    document.getElementById('quoteForm').style.display = 'none';
    setTimeout(()=>{
        document.getElementById('popup-container1').style.display = 'none';
    }, 3000);
}
// Function to show thank-you message after submission
// function showThankYouMessage1() {
//     document.getElementById('thankyou-message1').style.display = 'block';
//     document.getElementById('subb1').style.display = 'none';
//     document.getElementById('quoteForm').style.display = 'none';
//     // Close popup after a delay (optional)
//     setTimeout(() => {
//         document.getElementById('popup-container1').style.display = 'none';
//     }, 3000);
// }
// Validate Name
function validateName1() {
    var name1 = document.getElementById('name1').value.trim();
    if (name1.length === 0) {
        alert("Name can't be blank");
        return false;
    }
    // Allow names with letters, spaces, hyphens, apostrophes (1 to 3 words)
    var nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}(?: [A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}){0,2}$/;
    if (!nameRegex.test(name1)) {
        alert('Please enter a valid name (letters only, up to 3 words)');
        return false;
    }
    return true;
}
function validatePhone1() {
    var phone1 = document.getElementById('phone1').value.trim();
    if (phone1.length === 0) return true; // Phone is optional
    // E.164 format: + followed by 6 to 15 digits (no spaces or other characters)
    var intlRegex = /^\+?[1-9]\d{5,14}$/;
    if (!intlRegex.test(phone1)) {
        alert('Please enter a valid international phone number in the format +123456789...');
        return false;
    }
    return true;
}
// Validate Email
function validateEmail1() {
    var email1 = document.getElementById('email1').value;
    if (email1.length === 0) {
        alert('Email can\'t be blank');
        return false;
    }
    if (!email1.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/)) {
        alert('Please enter a correct email address');
        return false;
    }
    return true;
}
function validateServiceSelection() {
    // Get visibility of each service section
    const installationVisible = document.getElementById('installation-details').style.display !== 'none';
    const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
    const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
    // Check if at least one is visible
    if (!installationVisible && !modernizationVisible && !maintenanceVisible) {
        alert('Please select at least one service (Installation, Modernization, or Maintenance).');
        return false;
    }
    // You can add further checks if required to validate the contents inside the shown section
    return true;
}
function validateServiceDetails() {
    let isAnyValid = false;
    // Validate Installation Section if visible
    const installationVisible = document.getElementById('installation-details').style.display !== 'none';
    if (installationVisible) {
        const budget1 = document.getElementById('budget1').value;
        const floors1 = document.getElementById('floor1').value.trim();
        if (budget1 !== '----' && floors1 !== '' && !isNaN(floors1) && parseInt(floors1) >= 1) isAnyValid = true;
    }
    // Validate Modernization Section if visible
    const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
    if (modernizationVisible) {
        const budget2 = document.getElementById('budget2').value;
        const floors2 = document.getElementById('floor2').value.trim();
        const scope = document.getElementById('modernization-scope').value.trim();
        if (budget2 !== '----' && floors2 !== '' && !isNaN(floors2) && parseInt(floors2) >= 1 && scope !== '') isAnyValid = true;
    }
    // Validate Maintenance Section if visible
    const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
    if (maintenanceVisible) {
        const frequency = document.getElementById('maintenance-frequency').value;
        const budget3 = document.getElementById('budget3').value;
        const floors3 = document.getElementById('floor3').value.trim();
        if (frequency !== '----' && budget3 !== '----' && floors3 !== '' && !isNaN(floors3) && parseInt(floors3) >= 1) isAnyValid = true;
    }
    // Final result
    if (!isAnyValid) {
        alert('Please fill in valid details for at least one visible service section.');
        return false;
    }
    return true;
}
// Validate Full Form
// window.validateForm1 = function () {
//     if (!validateName1() || !validatePhone1() || !validateEmail1() || !validateServiceSelection() || !validateServiceDetails()) {
//         alert('Form not submitted');
//         return false;
//     } else {
//         window.submitted = true;
//         setTimeout(showThankYouMessage1, 100); // Show the thank-you message after 1 second
//         return true;
//     }
// };
window.validateForm1 = function() {
    if (!validateName1() || !validatePhone1() || !validateEmail1() || !validateServiceSelection() || !validateServiceDetails()) {
        alert('Form not submitted');
        return false;
    }
    // Check if reCAPTCHA is loaded
    if (typeof grecaptcha === "undefined") {
        alert("reCAPTCHA is still loading. Please wait a moment and try again.");
        return false;
    }
    // Check if reCAPTCHA is completed
    var recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse || recaptchaResponse.length === 0) {
        alert("Please complete the reCAPTCHA challenge!");
        return false;
    }
    // If all validations pass and reCAPTCHA is complete
    window.submitted = true;
    setTimeout(showThankYouMessage1, 100); // Show the thank-you message after 1 second
    return true;
};
// Attach event listener on DOM ready
document.addEventListener('DOMContentLoaded', ()=>{
    const form = document.getElementById('quoteForm');
    form.addEventListener('submit', handleQuoteFormSubmit);
// Your existing popup logic (close button, show popup) here...
});
// Handle Popup Logic Quote
document.addEventListener("DOMContentLoaded", function() {
    var popupContainer1 = document.getElementById('popup-container1');
    var closeBtn1 = document.getElementById('close-btn1');
    var contactUsLinks1 = document.querySelectorAll('#quote-us-link-desktop, #quote-us-link-mobile');
    // Show popup after 5 seconds if not already shown
    // if (!sessionStorage.getItem('popupShown')) {
    //     setTimeout(function () {
    //         popupContainer1.style.display = 'block';
    //         popupContainer1.classList.add('show');
    //     }, 5000);
    // } else {
    //     popupContainer1.style.display = 'none';
    // }
    // Close popup event
    closeBtn1.addEventListener('click', function() {
        popupContainer1.classList.add('hide');
        setTimeout(function() {
            popupContainer1.style.display = 'none';
            popupContainer1.classList.remove('hide', 'show');
        }, 500);
        sessionStorage.setItem('popupShown', true);
    });
    // Show popup when clicking "Contact Us"
    contactUsLinks1.forEach((link)=>{
        link.addEventListener('click', function(event) {
            event.preventDefault();
            popupContainer1.style.display = 'block';
            popupContainer1.classList.add('show');
            sessionStorage.setItem('popupShown', true);
        });
    });
}); /////
 // window.submitted = false;
 // var quoteRecaptchaWidgetId;
 // function onRecaptchaLoad() {
 //   quoteRecaptchaWidgetId = grecaptcha.render('recaptcha-quote', {
 //     'sitekey': '6LeKT1UrAAAAAETU7mbRso_5yC7hXnEdL324Omu5'
 //   });
 // }
 // window.onload = function () {
 //   onRecaptchaLoad();
 // };
 // function showThankYouMessage1() {
 //   document.getElementById('thankyou-message1').style.display = 'block';
 //   document.getElementById('subb1').style.display = 'none';
 //   document.getElementById('quoteForm').style.display = 'none';
 //   setTimeout(() => {
 //     document.getElementById('popup-container1').style.display = 'none';
 //   }, 3000);
 // }
 // // Validation: Name
 // function validateName1() {
 //   var name1 = document.getElementById('name1').value.trim();
 //   if (name1.length === 0) {
 //     alert("Name can't be blank");
 //     return false;
 //   }
 //   var nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}(?: [A-Za-zÀ-ÖØ-öø-ÿ'-]{2,}){0,2}$/;
 //   if (!nameRegex.test(name1)) {
 //     alert('Please enter a valid name (letters only, up to 3 words)');
 //     return false;
 //   }
 //   return true;
 // }
 // // Validation: Phone (optional)
 // function validatePhone1() {
 //   var phone1 = document.getElementById('phone1').value.trim();
 //   if (phone1.length === 0) return true;
 //   var intlRegex = /^\+?[1-9]\d{5,14}$/;
 //   if (!intlRegex.test(phone1)) {
 //     alert('Please enter a valid international phone number in the format +123456789...');
 //     return false;
 //   }
 //   return true;
 // }
 // // Validation: Email
 // function validateEmail1() {
 //   var email1 = document.getElementById('email1').value.trim();
 //   if (email1 === '') {
 //     alert('Email can\'t be blank');
 //     return false;
 //   }
 //   if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email1)) {
 //     alert('Please enter a correct email address');
 //     return false;
 //   }
 //   return true;
 // }
 // // Validation: At least one service selected
 // function validateServiceSelection() {
 //   const installationVisible = document.getElementById('installation-details').style.display !== 'none';
 //   const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
 //   const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
 //   if (!installationVisible && !modernizationVisible && !maintenanceVisible) {
 //     alert('Please select at least one service (Installation, Modernization, or Maintenance).');
 //     return false;
 //   }
 //   return true;
 // }
 // // Validation: At least one service details filled correctly
 // function validateServiceDetails() {
 //   let isAnyValid = false;
 //   const installationVisible = document.getElementById('installation-details').style.display !== 'none';
 //   if (installationVisible) {
 //     const budget1 = document.getElementById('budget1').value;
 //     const floors1 = document.getElementById('floor1').value.trim();
 //     if (budget1 !== '----' && floors1 !== '' && !isNaN(floors1) && parseInt(floors1) >= 1) {
 //       isAnyValid = true;
 //     }
 //   }
 //   const modernizationVisible = document.getElementById('modernization-details').style.display !== 'none';
 //   if (modernizationVisible) {
 //     const budget2 = document.getElementById('budget2').value;
 //     const floors2 = document.getElementById('floor2').value.trim();
 //     const scope = document.getElementById('modernization-scope').value.trim();
 //     if (budget2 !== '----' && floors2 !== '' && !isNaN(floors2) && parseInt(floors2) >= 1 && scope !== '') {
 //       isAnyValid = true;
 //     }
 //   }
 //   const maintenanceVisible = document.getElementById('maintenance-details').style.display !== 'none';
 //   if (maintenanceVisible) {
 //     const frequency = document.getElementById('maintenance-frequency').value;
 //     const budget3 = document.getElementById('budget3').value;
 //     const floors3 = document.getElementById('floor3').value.trim();
 //     if (frequency !== '----' && budget3 !== '----' && floors3 !== '' && !isNaN(floors3) && parseInt(floors3) >= 1) {
 //       isAnyValid = true;
 //     }
 //   }
 //   if (!isAnyValid) {
 //     alert('Please fill in valid details for at least one visible service section.');
 //     return false;
 //   }
 //   return true;
 // }
 // // Validate the full form and reCAPTCHA
 // window.validateForm1 = function () {
 //   if (!validateName1() || !validatePhone1() || !validateEmail1() || !validateServiceSelection() || !validateServiceDetails()) {
 //     alert('Form not submitted');
 //     return false;
 //   }
 //   if (typeof grecaptcha === "undefined") {
 //     alert("reCAPTCHA is still loading. Please wait a moment and try again.");
 //     return false;
 //   }
 //   var recaptchaResponse = grecaptcha.getResponse();
 //   if (!recaptchaResponse || recaptchaResponse.length === 0) {
 //     alert("Please complete the reCAPTCHA challenge!");
 //     return false;
 //   }
 //   return true;
 // };
 // // Handle form submission
 // async function handleQuoteFormSubmit(event) {
 //   event.preventDefault();
 //   if (!validateForm1()) return;
 //   const submitBtn = document.getElementById('subb1');
 //   submitBtn.disabled = true;
 //   submitBtn.textContent = "Submitting...";
 //   const form = document.getElementById('quoteForm');
 //   const formData = new FormData(form);
 //   try {
 //     const response = await fetch('https://script.google.com/macros/s/AKfycbyp0VH-0wpYn6uip2eJq34iY_dy1iq74ESjjnCiB2NKAmzUkN7AYXjRRqLMwKU3-PYJWQ/exec', {
 //       method: 'POST',
 //       body: formData
 //     });
 //     if (response.ok) {
 //       showThankYouMessage1();
 //     } else {
 //       alert('Something went wrong. Please try again later.');
 //       submitBtn.disabled = false;
 //       submitBtn.textContent = "Submit";
 //     }
 //   } catch (error) {
 //     console.error('Submission error:', error);
 //     alert('Submission failed. Please check your network or try again.');
 //     submitBtn.disabled = false;
 //     submitBtn.textContent = "Submit";
 //   }
 // }
 // // Attach DOM ready logic
 // document.addEventListener('DOMContentLoaded', () => {
 //   const form = document.getElementById('quoteForm');
 //   form.addEventListener('submit', handleQuoteFormSubmit);
 // });
 // // Popup logic
 // document.addEventListener("DOMContentLoaded", function () {
 //   var popupContainer1 = document.getElementById('popup-container1');
 //   var closeBtn1 = document.getElementById('close-btn1');
 //   var contactUsLinks1 = document.querySelectorAll('#quote-us-link-desktop, #quote-us-link-mobile');
 //   closeBtn1.addEventListener('click', function () {
 //     popupContainer1.classList.add('hide');
 //     setTimeout(function () {
 //       popupContainer1.style.display = 'none';
 //       popupContainer1.classList.remove('hide', 'show');
 //     }, 500);
 //     sessionStorage.setItem('popupShown', true);
 //   });
 //   contactUsLinks1.forEach(link => {
 //     link.addEventListener('click', function (event) {
 //       event.preventDefault();
 //       popupContainer1.style.display = 'block';
 //       popupContainer1.classList.add('show');
 //       sessionStorage.setItem('popupShown', true);
 //     });
 //   });
 // });

},{}]},["aVgSH","1Jvr0"], "1Jvr0", "parcelRequire94c2")

//# sourceMappingURL=index.2e45ea07.js.map
