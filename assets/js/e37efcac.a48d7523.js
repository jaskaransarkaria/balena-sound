"use strict";(self.webpackChunkbalena_labs_docs=self.webpackChunkbalena_labs_docs||[]).push([[527],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=o,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const r={},i="Usage",l={unversionedId:"usage",id:"usage",title:"Usage",description:"After your device finishes downloading the app, you should be ready to go!",source:"@site/docs/02-usage.md",sourceDirName:".",slug:"/usage",permalink:"/balena-sound/usage",draft:!1,editUrl:"https://github.com/jaskaransarkaria/balena-sound/edit/master/docs/02-usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/balena-sound/"},next:{title:"Customization",permalink:"/balena-sound/customization"}},u={},s=[{value:"Modes of operation",id:"modes-of-operation",level:2},{value:"Multi-room mode",id:"multi-room-mode",level:3},{value:"Multi-room client mode",id:"multi-room-client-mode",level:3},{value:"Standalone",id:"standalone",level:3},{value:"Plugin system",id:"plugin-system",level:2},{value:"Audio interfaces",id:"audio-interfaces",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usage"},"Usage"),(0,o.kt)("p",null,"After your device finishes downloading the app, you should be ready to go!"),(0,o.kt)("p",null,"Before starting, make sure to connect the audio output of your device to your Hi-Fi or speaker system. Remember that we support multiple ",(0,o.kt)("a",{parentName:"p",href:"audio-interfaces"},"audio interfaces"),". This is helpful if you're interested in improving the audio quality of your setup -- be sure to check it out!"),(0,o.kt)("p",null,"To connect to your balenaSound device:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If using Bluetooth: search for your device on your phone or laptop and pair."),(0,o.kt)("li",{parentName:"ul"},"If using Airplay: select the balenaSound device from your audio output options."),(0,o.kt)("li",{parentName:"ul"},"If using Spotify Connect: open Spotify and choose the balenaSound device as an alternate output."),(0,o.kt)("li",{parentName:"ul"},"If using UPnP: select the balenaSound device from your UPnP app like ",(0,o.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.bubblesoft.android.bubbleupnp"},"BubbleUPnP")," (Android) or ",(0,o.kt)("a",{parentName:"li",href:"https://apps.apple.com/app/jup-p-upnp-player-und-fernbedienung/id1069722311"},"JuP&P")," (IOS).")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"balenaSound <plugin> xxxx")," name is used by default, where ",(0,o.kt)("inlineCode",{parentName:"p"},"xxxx")," will be the first 4 characters of the device UUID in the balenaCloud dashboard."),(0,o.kt)("p",null,"Let the music play!"),(0,o.kt)("h2",{id:"modes-of-operation"},"Modes of operation"),(0,o.kt)("p",null,"balenaSound supports multiple modes of operation described below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Multi-room mode"),(0,o.kt)("li",{parentName:"ul"},"Multi-room client mode"),(0,o.kt)("li",{parentName:"ul"},"Standalone")),(0,o.kt)("p",null,"By default, most devices will start in multi-room mode. You can change that by setting an environment variable, check out the ",(0,o.kt)("a",{parentName:"p",href:"customization#general"},"customization")," section to learn how."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Multi-room mode is the default mode for most (but not all!) device types. You can read more about default modes ",(0,o.kt)("a",{parentName:"p",href:"device-support#recommended"},"here"),"."),(0,o.kt)("h3",{id:"multi-room-mode"},"Multi-room mode"),(0,o.kt)("p",null,'Multi-room mode allows you to play perfectly synchronized audio on multiple devices, it turns balenaSound into a "Sonos-like" multi-room solution. It doesn\'t matter whether you have 2 or 100 devices, you only need them to be part of the same local network.'),(0,o.kt)("p",null,"When in multi-room mode devices can take one of two roles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"master"),": the device acting as the audio source"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client"),": any number of devices playing back the audio being sent over by the ",(0,o.kt)("inlineCode",{parentName:"li"},"master"))),(0,o.kt)("p",null,"Designing a ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," device is easy and requires no configuration. Whenever you start streaming to any device in multi-room mode, it will auto-configure itself to be the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," device and will broadcast a message to all other devices within your local network to get them in sync. Note that it can take a few seconds for the system to auto-configure the first time you stream.\nYou can always change the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," by streaming to a different device."),(0,o.kt)("p",null,"It's a good idea to use the most powerful device on your fleet as the designated ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," as it does take up more resources. For example, if your setup consists of a Raspberry Pi 4 and a couple of Raspberry Pi 2, then using the Pi 4 as the ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," is the superior option."),(0,o.kt)("h3",{id:"multi-room-client-mode"},"Multi-room client mode"),(0,o.kt)("p",null,"When a device is in multi-room client mode it can only be used as a multi-room ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),". The only audio the device will play is audio coming from a ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," device, so you'll need at least another device in your fleet."),(0,o.kt)("p",null,"This mode is great for performance constrained devices as plugin services (Spotify, AirPlay2, etc) won't be running and consuming CPU cycles. It's also a great choice if you usually stream to the same ",(0,o.kt)("inlineCode",{parentName:"p"},"master")," device and don't want to have every device show up when pairing bluetooth for example."),(0,o.kt)("h3",{id:"standalone"},"Standalone"),(0,o.kt)("p",null,"Standalone is the original balenaSound mode (pre version 2.0). In this mode your device won't run any of the multi-room services, it will run independently and won't be aware of other devices in your network."),(0,o.kt)("p",null,"Use this mode when you have only one device in your fleet, or if you want to have multiple independent devices."),(0,o.kt)("h2",{id:"plugin-system"},"Plugin system"),(0,o.kt)("p",null,"balenaSound has been re-designed to easily allow integration with audio streaming sources. These are the sources we currently support and the projects that make it possible:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,o.kt)("th",{parentName:"tr",align:null},"Library/Project"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spotify"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/dtcooper/raspotify/"},"raspotify")," Spotify Connect only works with Spotify Premium accounts. Zeroconf authentication via your phone/device Spotify client is supported as well as providing user and password, see ",(0,o.kt)("a",{parentName:"td",href:"customization#plugins"},"customization")," section for details.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"AirPlay2"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/mikebrady/shairport-sync/"},"shairport-sync"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"UPnP"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/hzeller/gmrender-resurrect"},"gmrenderer-resurrect"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bluetooth"),(0,o.kt)("td",{parentName:"tr",align:null},"balena ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/balenablocks/bluetooth/"},"bluetooth")," and ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/balenablocks/audio"},"audio")," blocks")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Soundcard input"),(0,o.kt)("td",{parentName:"tr",align:null},"Experimental support through the balena ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/balenablocks/audio"},"audio")," block. Check the ",(0,o.kt)("a",{parentName:"td",href:"customization#plugins"},"customization")," section to learn how to enable it.")))),(0,o.kt)("p",null,"If your desired audio source is not supported feel free to ",(0,o.kt)("a",{parentName:"p",href:"support#contact-us"},"reach out")," and leave us a comment. We've also considerably simplified the process of adding new plugins, so ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/blob/master/CONTRIBUTING.md"},"PR's are welcome")," too (be be sure to check out our balenaSound ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/balena-labs-projects/balena-sound/blob/master/ARCHITECTURE.md"},"architecture")," guide)!"),(0,o.kt)("h2",{id:"audio-interfaces"},"Audio interfaces"),(0,o.kt)("p",null,"balenaSound supports all audio interfaces present on our ",(0,o.kt)("a",{parentName:"p",href:"device-support"},"supported devices")," be it 3.5mm audio jack, HDMI, I2C DAC's or USB soundcards. We rely on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/balenablocks/audio"},"balenaLabs' audio block")," to do the configuration required for this to work."),(0,o.kt)("p",null,"Some audio interfaces require special configuration, you can read more about this in the ",(0,o.kt)("a",{parentName:"p",href:"audio-interfaces"},"audio interfaces")," configuration section."))}d.isMDXComponent=!0}}]);