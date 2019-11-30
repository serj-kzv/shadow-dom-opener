# What is it?
It is a Firefox addon that modifies Internet pages' behaviour.

The Firefox addon opens "closed" Shadow DOM nodes (tags)
on Internet pages to do them available to JavaScript manipulating.
Otherwise it is impossible for user JavaScript (like Greasemonkey scripts)
and JavaScript plugins to modify inner of these "closed" Shadow DOM nodes.
Unlike usual "Custom Elements" "closed" Shadow DOM nodes are really impossible to modify without that.

# Installation
To install the addon go to [releases](https://github.com/serj-kzv/shadow-dom-opener/releases)
page, download `.xpi` file and drag and drop the file on Mozilla Firefox window.

# Installation of pure xpi manually
You may want to install a `.xpi` file of the addon as is. But it is impossible with usual Mozilla Firefox
cause Firefox checks signature of addons when you try to install them.
To install an addon the addon should be signed on Mozilla Addons web site.
I signed the addon and put it on github **release** page where you can download the addon.

**If you want to install the addon as is manually then read a text below.**

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
The result will be in `dist` folder. Pack files of dist folder (not a `dist` folder itself but files in the folder!)
as a `zip` archive.