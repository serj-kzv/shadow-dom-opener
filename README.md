# Installation
To install the addon go to [releases](https://github.com/serj-kzv/shadow-dom-opener/releases)
page, download `.xpi` file and drag and drop the file on Mozilla Firefox window.

Usual Mozilla Firefox **blocks** installation of addons that was not downloaded from Mozilla addon page (signed addons).
**To install unsigned addons** to Mozilla Firefox
you can either use [Firefox Unbranded Build](https://wiki.mozilla.org/Add-ons/Extension_Signing#Unbranded_Builds)
that allows to install unsigned addons but don't have Firefox auto updating
or you can disable the addon signature checking by [the way](https://stackoverflow.com/a/42403531).
Or if you use Mozilla Firefox from **Ubuntu** operation system repository you can disable the addon signature checking
by setting `xpinstall.signatures.required` to `false` on `about:config` page
(to go to `about:config` type `about:config` in Firefox address bar and press Enter button).

# How to build
```
npm install
npm run prod
```