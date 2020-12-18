(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ "./src/app/pages/page-one/page-one.component.ts");
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ "./src/app/pages/page-two/page-two.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'page-one', component: _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_4__["PageOneComponent"] },
    { path: 'page-two', component: _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__["PageTwoComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    onSameUrlNavigation: 'reload'
                })
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <section class=\"navbar-center\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"../assets/main-icon.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav center\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Product</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link login\">Login</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </section>\n  <section>\n    <div>\n      <div class=\"jumbotron\">\n        <div>\n          <h1 class=\"display-4 d-flex justify-content-center\">Build Your <span style=\"color:red\"> Community </span>\n          </h1>\n        </div>\n        <div>\n          <h1 class=\"display-4 d-flex justify-content-center\">powered by </h1>\n          <h1 class=\"display-4 d-flex justify-content-center\"><span style=\"color: blue;\">voice messages</span></h1>\n        </div>\n        <div class=\"center top-space\">\n          <p class=\"detail\">Make money from paid memberships, connect with your community and have members only\n            conversations.</p>\n          <a class=\"btn btn-danger btn-lg normal center\" href=\"#\" role=\"button\">Try For Free</a>\n          <p class=\"detail small\">*No Credit Cart Required</p>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div class=\"d-flex justify-content-center\">\n      <div class=\"marvel-device iphone-x\">\n        <div class=\"notch\">\n          <div class=\"camera\"></div>\n          <div class=\"speaker\"></div>\n        </div>\n        <div class=\"top-bar\"></div>\n        <div class=\"sleep\"></div>\n        <div class=\"bottom-bar\"></div>\n        <div class=\"volume\"></div>\n        <div class=\"overflow\">\n          <div class=\"shadow shadow--tr\"></div>\n          <div class=\"shadow shadow--tl\"></div>\n          <div class=\"shadow shadow--br\"></div>\n          <div class=\"shadow shadow--bl\"></div>\n        </div>\n        <div class=\"inner-shadow\"></div>\n        <div class=\"screen\">\n          <!-- Content goes here -->\n          <img src=\"../assets/resized-phone.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n    <div>\n      <div class=\"jumbotron\">\n        <h1 class=\"display-4 d-flex justify-content-center\" style=\"color:red;\">Launch. Grow. Engage.</h1>\n        <p class=\"lead d-flex justify-content-center top-space detail\">VoiceBlasts enables you to do all this using\n          voice messages while making money on the side.</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <H1 class=\"center bottom-space\">⚡ Your new superpowers!</H1>\n    <div class=\"row superpower-row\">\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-bolt\"></i>\n            <h5 class=\"card-title\">Quick and Easy</h5>\n            <p class=\"card-text\">One click to record and upload content</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-comment\"></i>\n            <h5 class=\"card-title\">Voice Replies</h5>\n            <p class=\"card-text\">Build an engaged community with loyal listeners.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-paper-plane\"></i>\n            <h5 class=\"card-title\">Email Notifications</h5>\n            <p class=\"card-text\">Beutiful emails sent to notify your listeners.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-volume-up\"></i>\n            <h5 class=\"card-title\">Email Subscribers</h5>\n            <p class=\"card-text\">Capture emails vis subscription.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row superpower-row\">\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-mouse-pointer\"></i>\n            <h5 class=\"card-title\">One Click Sharing</h5>\n            <p class=\"card-text\">Share to all major social networks with one click</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-check-square\"></i>\n            <h5 class=\"card-title\">Product Feedback</h5>\n            <p class=\"card-text\">Get voice feedback on your episode.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-link\"></i>\n            <h5 class=\"card-title\">Embed Friendly</h5>\n            <p class=\"card-text\">Add your voiceblasts to any website.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-play-circle\"></i>\n            <h5 class=\"card-title\">Autoplay</h5>\n            <p class=\"card-text\">Enjoy a playlist experience.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div class=\"section-break center\">\n      <div class=\"icon-heading\">\n        <i class=\"fa fa-cog\"></i>\n        <h1>Here's how it works</h1>\n      </div>\n    </div>\n    <div>\n      <div class=\"row works-row\">\n        <div class=\"col-sm-6 card-works container-fluid\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">1/3: Create your unique profile</h5>\n              <ul class=\"card-text\">\n                <li>Choose your username, avatar and bio</li>\n                <li>Submit your RSS Feed</li>\n                <li>Podcast episodes update automatially</li>\n              </ul>\n              <a href=\"#\" class=\"btn btn-primary\">Sign me up!</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <img src=\"../assets/Phone-demo-one.png\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row works-row\">\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <img src=\"../assets/Phone-demo-one.png\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6 card-works container-fluid\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">2/3: Invite Your Listeners</h5>\n              <ul class=\"card-text\">\n                <li>Share your unique link</li>\n                <li>Get email subscriptions</li>\n                <li>Build your community</li>\n              </ul>\n              <a href=\"#\" class=\"btn btn-primary\">Sign me up!</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row works-row\">\n        <div class=\"col-sm-6 card-works container-fluid\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">3/3: Engage your community</h5>\n              <ul class=\"card-text\">\n                <li>Create VoiceBlasts</li>\n                <li>Email notifications</li>\n                <li>Voice replies</li>\n              </ul>\n              <a href=\"#\" class=\"btn btn-primary\">Sign me up!</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <img src=\"../assets/Phone-demo-one.png\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div class=\"center section-break\">\n      <div class=\"icon-heading\">\n        <i class=\"fa fa-lightbulb\"></i>\n        <h1> Common Use Cases</h1>\n      </div>\n    </div>\n    <div class=\"row common-row\">\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-smile\"></i>\n            <h5 class=\"card-title\">Sneak Peeks/Previews</h5>\n            <p class=\"card-text\">Give your subscribers early access and sneak peaks to upcoming content</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-cloud-upload\"></i>\n            <h5 class=\"card-title\">Post Show Thoughts</h5>\n            <p class=\"card-text\">Continue the discussion using voice reples on show episodes</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-door-open\"></i>\n            <h5 class=\"card-title\">Host a discussion</h5>\n            <p class=\"card-text\">Host discussion around key topics that bring your users together</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-microphone-alt\"></i>\n            <h5 class=\"card-title\">Start an Audio Blog</h5>\n            <p class=\"card-text\">Blogging never gets old. Share the journet in this new easy to create format</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row common-row\">\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-headphones-alt\"></i>\n            <h5 class=\"card-title\">Episode Feedback</h5>\n            <p class=\"card-text\">Ask your listeners ot leave you thoughts, questions, and feedback on each episode you\n              publish</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-info-circle\"></i>\n            <h5 class=\"card-title\">Bonus Content</h5>\n            <p class=\"card-text\">We all have content that doesn't make it into the final cut. You can share those on\n              VoiceBlasts</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-grin-wink\"></i>\n            <h5 class=\"card-title\">Behind the Scenes</h5>\n            <p class=\"card-text\">Let your listeners into your creative process with some behind the scenes content.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-3\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <i class=\"fa fa-question-circle\"></i>\n            <h5 class=\"card-title\">Q & A's</h5>\n            <p class=\"card-text\">Host Q and A's around some of the hot topics that you and your listeners will enjoy to\n              discuss.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <Div class=\"center\">\n      <button class=\"btn btn-danger btn-lg start-now-btn\">Start Now</button>\n    </Div>\n  </section>\n  <section>\n    <div class=\"center section-break\">\n      <div class=\"icon-heading\">\n        <h2>🤘</h2>\n        <h2>&nbsp; We're Better</h2>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm\">\n            \n          </div>\n          <div class=\"col-sm\">\n            <h5>⌛ &nbsp; Time</h5>\n          </div>\n          <div class=\"col-sm\">\n            <h5>💰 &nbsp; Money</h5>\n          </div>\n          <div class=\"col-sm\">\n            <h5>😊 &nbsp; Ease of use</h5>\n          </div>\n          <div class=\"col-sm\">\n            <h5>😊 &nbsp; Engagement</h5>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm better-info-first\">\n            VoiceBlasts\n          </div>\n          <div class=\"col-sm better-info-first\">\n            <h5>60 seconds</h5>\n            <p>From record to publish</p>\n          </div>\n          <div class=\"col-sm better-info-first\">\n            <h5>Free!</h5>\n          </div>\n          <div class=\"col-sm better-info-first\">\n            <h5>High!</h5>\n            <p>Push one button and record</p>\n          </div>\n          <div class=\"col-sm better-info-first\">\n            <h5>High</h5>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm better-info\">\n            <p>📃</p>\n            <p>Written Newsletter</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Hours!</h5>\n            <p>Hours to research, write and publish</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            Up to $360 a year\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Low!</h5>\n            <p>Complex text editors and systems involved</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Low!</h5>\n            <p>Very low click-through rates</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm better-info\">\n            <p>💻</p>\n            <p>Social Networks</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Hours!</h5>\n            <p>Hours to create video and visual content</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            $$$ To run ads\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>N/A</h5>\n            <p>Allows only for sharing, not creating</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Low (technically)</h5>\n            <p>95% don't see your content</p>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm better-info\">\n            <p><svg width=\"25\" height=\"25\" viewBox=\"0 0 25 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n              <path d=\"M15 10.5181C14.17 10.5181 13.5 9.84807 13.5 9.01807V4.01807C13.5 3.18807 14.17 2.51807 15 2.51807C15.83 2.51807 16.5 3.18807 16.5 4.01807V9.01807C16.5 9.84807 15.83 10.5181 15 10.5181Z\" stroke=\"#53D770\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M21 10.5181H19.5V9.01807C19.5 8.18807 20.17 7.51807 21 7.51807C21.83 7.51807 22.5 8.18807 22.5 9.01807C22.5 9.84807 21.83 10.5181 21 10.5181Z\" stroke=\"#53D770\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M10 14.5181C10.83 14.5181 11.5 15.1881 11.5 16.0181V21.0181C11.5 21.8481 10.83 22.5181 10 22.5181C9.17 22.5181 8.5 21.8481 8.5 21.0181V16.0181C8.5 15.1881 9.17 14.5181 10 14.5181Z\" stroke=\"#FE4F44\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M4 14.5181H5.5V16.0181C5.5 16.8481 4.83 17.5181 4 17.5181C3.17 17.5181 2.5 16.8481 2.5 16.0181C2.5 15.1881 3.17 14.5181 4 14.5181Z\" stroke=\"#FE4F44\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M14.5 15.0181C14.5 14.1881 15.17 13.5181 16 13.5181H21C21.83 13.5181 22.5 14.1881 22.5 15.0181C22.5 15.8481 21.83 16.5181 21 16.5181H16C15.17 16.5181 14.5 15.8481 14.5 15.0181Z\" stroke=\"#FECA44\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M16 19.5181H14.5V21.0181C14.5 21.8481 15.17 22.5181 16 22.5181C16.83 22.5181 17.5 21.8481 17.5 21.0181C17.5 20.1881 16.83 19.5181 16 19.5181Z\" stroke=\"#FECA44\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M10.5 10.0181C10.5 9.18807 9.83 8.51807 9 8.51807H4C3.17 8.51807 2.5 9.18807 2.5 10.0181C2.5 10.8481 3.17 11.5181 4 11.5181H9C9.83 11.5181 10.5 10.8481 10.5 10.0181Z\" stroke=\"#44E8FE\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              <path d=\"M9 5.51807H10.5V4.01807C10.5 3.18807 9.83 2.51807 9 2.51807C8.17 2.51807 7.5 3.18807 7.5 4.01807C7.5 4.84807 8.17 5.51807 9 5.51807Z\" stroke=\"#44E8FE\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n              </svg>\n              </p>Slack\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Hours!</h5>\n            <p>Hours a week to keep group relevant</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            Free and paid\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Medium!</h5>\n            <p>Learning curve</p>\n          </div>\n          <div class=\"col-sm better-info\">\n            <h5>Low</h5>\n            <p>Message overload.  Most content missed</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div class=\"center section-break\">\n      <div class=\"icon-heading\">\n        <i class=\"fas fa-tag\"></i>\n        <h2>Pricing</h2>\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm pricing-left\">\n            <h2 class=\"pricing-heading\">Free</h2>\n            <h4 class=\"pricing-cost\">$ 0 P/M</h4>\n            <h5 class=\"pricing-text\">1000 free email subscriptions</h5>\n            <h5 class=\"pricing-text\">Voice Replies</h5>\n            <h5 class=\"pricing-text\">Once Click Sharing</h5>\n            <h5 class=\"pricing-text\">Unique Username</h5>\n            <h5 class=\"pricing-text\">3 VoiceBlasts a week</h5>\n            <h5 class=\"pricing-text\">Enabled VoiceBlasts</h5>\n            <div>\n              <button type=\"button\" class=\"btn btn-danger  pricing-button\">Read</button>\n            </div>\n          </div>\n          <div class=\"col-sm pricing-right\">\n            <h2 class=\"pricing-heading\">Creator Plus</h2>\n            <h4 class=\"pricing-cost\">$ 12.99 P/M</h4>\n            <h5 class=\"pricing-text\">Everything is free</h5>\n            <h5 class=\"pricing-text\">Increase Length to 5 minutes</h5>\n            <h5 class=\"pricing-text\">VideoBlasts</h5>\n            <h5 class=\"pricing-text\">Add Links to Blasts</h5>\n            <h5 class=\"pricing-text\">Download Emails</h5>\n            <h5 class=\"pricing-text\">Unlimited VoiceBlasts</h5>\n            <div>\n              <button type=\"button\" class=\"btn btn-danger  pricing-button\">Read</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div>\n      <h4 class=\"center section-break\">Our Mission</h4>\n    </div>\n    <div>\n      <div class=\"jumbotron\">\n        <h1 class=\"display-4 d-flex justify-content-center\" style=\"color:red;\">Help passionate<span\n            style=\"color:white;\">podcast</span>\n        </h1>\n        <h1 class=\"display-4 d-flex justify-content-center\" style=\"color:white;\">creators<span style=\"color:red;\"> build\n            engaged</span>\n        </h1>\n        <h1 class=\"display-4 d-flex justify-content-center\">communities</h1>\n        <p class=\"d-flex justify-content-center\" style=\"color:white;\">Read about our story</p>\n      </div>\n    </div>\n  </section>\n  <section>\n    <div>\n      <div class=\"center section-break passion\">\n        <h3>Word from the creators</h3>\n      </div>\n      <div class=\"center creators\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"user-image\">\n              <img src=\"../assets/avatar1.png\">\n            </div>\n            <div class=\"user-info\">\n              <h4 class=\"user-name\">Claire Bell</h4>\n              <h4 class=\"user-title\">DesignMornings, Podcaster</h4>\n            </div>\n            <div class=\"user-comment\">\n              <p>VoiceBlasts helps you build the best kind of an engaged audience. VoiceBlasts helps you build the best\n                kind of an engaged audience. VoiceBlasts helps you build the best kind of an engaged audience.\n                VoiceBlasts helps you build the best kind of an engaged audience.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"user-image\">\n              <img src=\"../assets/avatar1.png\">\n            </div>\n            <div class=\"user-info\">\n              <h4 class=\"user-name\">Fransisco Lane</h4>\n              <h4 class=\"user-title\">Sound Editor</h4>\n            </div>\n            <div class=\"user-comment\">\n              <p>VoiceBlasts helps you build the best kind of an engaged audience. VoiceBlasts helps you build the best\n                kind of an engaged audience. VoiceBlasts helps you build the best kind of an engaged audience.\n                VoiceBlasts helps you build the best kind of an engaged audience.</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <div class=\"user-image\">\n              <img src=\"../assets/avatar1.png\">\n            </div>\n            <div class=\"user-info\">\n              <h4 class=\"user-name\">Ralph Fisher</h4>\n              <h4 class=\"user-title\">Markets with Ralph, Podcaster</h4>\n            </div>\n            <div class=\"user-comment\">\n              <p>VoiceBlasts helps you build the best kind of an engaged audience. VoiceBlasts helps you build the best\n                kind of an engaged audience. VoiceBlasts helps you build the best kind of an engaged audience.\n                VoiceBlasts helps you build the best kind of an engaged audience.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"user-image\">\n              <img src=\"../assets/avatar1.png\">\n            </div>\n            <div class=\"user-info\">\n              <h4 class=\"user-name\">Jorge Murphy</h4>\n              <h4 class=\"user-title\">Designer, Podcast Host</h4>\n            </div>\n            <div class=\"user-comment\">\n              <p>VoiceBlasts helps you build the best kind of an engaged audience. VoiceBlasts helps you build the best\n                kind of an engaged audience. VoiceBlasts helps you build the best kind of an engaged audience.\n                VoiceBlasts helps you build the best kind of an engaged audience.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"section-break\">\n    <div class=\"center passion\">\n      <div class=\"passion-left\">\n        <div>\n          <h1>Share your Passion</h1>\n        </div>\n        <div>\n          <button class=\"btn btn-danger btn-lg d-flex\">Build your community</button>\n        </div>\n      </div>\n      <div>\n        <img src=\"../assets/phone-angled.png\">\n      </div>\n    </div>\n  </section>\n  <section>\n    <div class=\"center section-break\">\n      <h2>Blog</h2>\n      <p>Read the latest buzz from the podcast community- connected by creators and audiences both!</p>\n    </div>\n    <div id=\"carouselExampleControls\" class=\"carousel slide center\" data-ride=\"carousel\">\n      <div class=\"carousel-inner\">\n        <div class=\"carousel-item active\">\n          <img class=\"d-block w-100\" src=\"../assets/blog.png\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../assets/blog.png\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n          <img class=\"d-block w-100\" src=\"../assets/blog.png\" alt=\"Third slide\">\n        </div>\n      </div>\n      <a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div>\n  </section>\n  <section>\n    <div class=\"center section-break normal\">\n      <button class=\"btn btn-lg\" style=\"color: white; border: white; border-style: solid;\">See More</button>\n    </div>\n    <div class=\"social-media center\">\n      <div>\n        <a href=\"http://www.twitter.com\" class=\"fa fa-twitter\"></a>\n        <!-- <a href=\"http://www.twitter.com\"><img class=\"social-media-image\" src=\"../assets/Twitter_Logo_WhiteOnImage.png\"></a> -->\n      </div>\n      <div>\n        <!-- <a href=\"http://www.facebook.com\"><img class=\"social-media-image\" src=\"../assets/f_logo_RGB-Black_512.png\"></a> -->\n        <a href=\"http://www.facebook.com\" class=\"fa fa-facebook\"></a>\n      </div>\n      <div>\n        <!-- <a href=\"https://www.linkedin.com/\"><img class=\"social-media-image\" src=\"../assets/LI-In-Bug.png\"></a> -->\n        <a href=\"https://www.linkedin.com/\" class=\"fa fa-linkedin\"></a>\n      </div>\n    </div>\n  </section>\n  <section class=\"navbar-center\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n      <a class=\"navbar-brand\" href=\"#\"><img src=\"../assets/main-icon.png\"></a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav center\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Product</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">About</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/page-one/page-one.component */ "./src/app/pages/page-one/page-one.component.ts");
/* harmony import */ var _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-two/page-two.component */ "./src/app/pages/page-two/page-two.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_page_one_page_one_component__WEBPACK_IMPORTED_MODULE_4__["PageOneComponent"],
                _pages_page_two_page_two_component__WEBPACK_IMPORTED_MODULE_5__["PageTwoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/page-one/page-one.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/page-one/page-one.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utb25lL3BhZ2Utb25lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-one/page-one.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/page-one/page-one.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"../assets/phone1.png\" >\n</div>>\n"

/***/ }),

/***/ "./src/app/pages/page-one/page-one.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/page-one/page-one.component.ts ***!
  \******************************************************/
/*! exports provided: PageOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneComponent", function() { return PageOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageOneComponent = /** @class */ (function () {
    function PageOneComponent() {
    }
    PageOneComponent.prototype.ngOnInit = function () {
    };
    PageOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-one',
            template: __webpack_require__(/*! ./page-one.component.html */ "./src/app/pages/page-one/page-one.component.html"),
            styles: [__webpack_require__(/*! ./page-one.component.css */ "./src/app/pages/page-one/page-one.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageOneComponent);
    return PageOneComponent;
}());



/***/ }),

/***/ "./src/app/pages/page-two/page-two.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/page-two/page-two.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtdHdvL3BhZ2UtdHdvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/page-two/page-two.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/page-two/page-two.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-two works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/page-two/page-two.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/page-two/page-two.component.ts ***!
  \******************************************************/
/*! exports provided: PageTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageTwoComponent", function() { return PageTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageTwoComponent = /** @class */ (function () {
    function PageTwoComponent() {
    }
    PageTwoComponent.prototype.ngOnInit = function () {
    };
    PageTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-two',
            template: __webpack_require__(/*! ./page-two.component.html */ "./src/app/pages/page-two/page-two.component.html"),
            styles: [__webpack_require__(/*! ./page-two.component.css */ "./src/app/pages/page-two/page-two.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageTwoComponent);
    return PageTwoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tcowern/Desktop/voiceblasts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map