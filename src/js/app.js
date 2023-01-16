import { createApp } from "vue";
import example from "./components/example.vue";

createApp({
	data() {
		return {};
	},
	methods: {},
	components: {
		example,
	},
}).mount("#app");

window["FLS"] = false;

// Connecting the main style file
import "../scss/style.scss";

//===================== Functional =====================//
import * as flsFunctions from "./base/functions.js";

// flsFunctions.isWebp();
// flsFunctions.addTouchClass();
// flsFunctions.addLoadedClass();
// flsFunctions.menuInit();
// flsFunctions.setAnimateDelay(0.07);
// flsFunctions.fullVHfix();
// flsFunctions.spollers();
// flsFunctions.tabs();
// flsFunctions.showMore();

// import './libs/popup.js'
// import './libs/parallax-mouse.js'
// import './libs/fullpage.js'
// import './libs/parallax.js'

//===================== FORMS =====================//
import * as flsForms from "./base/forms/forms.js";

// flsForms.formFieldsInit({ viewPass: false });
// flsForms.formSubmit();
// flsForms.formQuantity();
// flsForms.formRating();

// import "./libs/select.js";
// import "./base/forms/datepicker.js";
// import "./base/forms/inputmask.js";
// import "./base/forms/range.js";
// import "./base/tippy.js";

//===================== SLIDERS  =====================//
import * as flsSliders from "./base/sliders.js";

// flsSliders.initSliders();

//===================== SCROLL =====================//
import * as flsScroll from "./base/scroll/scroll.js";

// flsScroll.pageNavigation();
// flsScroll.headerScroll();
// flsScroll.stickyBlock();
// flsScroll.digitsCounter();

// import './base/scroll/simplebar.js';

//===================== LAZY-LOAD =====================//
// import './base/scroll/lazyload.js';

//===================== WATCHER =====================//
// import './libs/watcher.js'

//===================== GALLERY =====================//
// import "./base/gallery.js";

//===================== OTHERS =====================//
import "./libs/dynamic_adapt.js";
// import './libs/wNumb.min.js';

//===================== MY-CODE =====================//
import "./base/script.js";
