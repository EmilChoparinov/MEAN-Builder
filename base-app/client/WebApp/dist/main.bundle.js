webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// COMPONENTS
var log_reg_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: log_reg_component_1.LogRegComponent,
    },
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: dashboard_component_1.DashboardComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
// COMPONENTS
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/login/login.component.ts");
var registration_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/registration/registration.component.ts");
var log_reg_component_1 = __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                registration_component_1.RegistrationComponent,
                log_reg_component_1.LogRegComponent,
                dashboard_component_1.DashboardComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * base user class that implements base IUser
 */
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-danger\" (click)='logout()'>Logout</button>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// PROVIDERS
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.ensureUserIsLoggedIn(function (res) {
            if (!res.success) {
                _this._router.navigateByUrl('/');
            }
        });
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        // this will attempt to navigate to login reg regardless
        // of response. Login reg component can handle this
        this._userService.logoutUser(function (response) {
            _this._router.navigate(['']);
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <app-registration></app-registration>\n    <app-login></app-login>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/log-reg.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LogRegComponent = /** @class */ (function () {
    function LogRegComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    LogRegComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.ensureUserIsLoggedIn(function (res) {
            // if the user is currently logged in the user should be sent
            // to the main app
            if (res.success) {
                _this._router.navigate(['dashboard']);
            }
        });
    };
    LogRegComponent = __decorate([
        core_1.Component({
            selector: 'app-log-reg',
            template: __webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/log-reg.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], LogRegComponent);
    return LogRegComponent;
}());
exports.LogRegComponent = LogRegComponent;


/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col\">\n  <h1 class=\"display-3\">Login</h1>\n  <form class=\"form-group mt-2\">\n    <label for=\"email\">Email</label>\n    <input type=\"text\" name=\"email\" class=\"form-control\" required [(ngModel)]='user.email' #email='ngModel'>\n    <div class=\"text-danger\" *ngIf='email.errors && email.touched && email.dirty'>\n      *\n      <span *ngIf='email.errors.required'>Email is required</span>\n    </div>\n    <label for=\"password\">Password</label>\n    <input type=\"text\" name=\"password\" class=\"form-control\" required [(ngModel)]='user.password' #password='ngModel'>\n    <div class=\"text-danger\" *ngIf='password.errors && password.touched && password.dirty'>\n      *\n      <span *ngIf='password.errors.required'>Email is required</span>\n    </div>\n    <div class=\"text-danger\">\n      <span *ngIf='serverMessage != \"\"'>*{{serverMessage}}</span>\n    </div>\n  </form>\n  <button class=\"btn btn-success float-right\" (click)='login()' *ngIf='!(email.errors || password.errors)'>Login</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
// JSON CLASSES & INTERFACES
var user_1 = __webpack_require__("../../../../../src/app/classes/user.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.user = new user_1.User();
        this.serverMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.loginUser(this.user, function (res) {
            // if the login was successful continue to the dashboard
            // else display the response the backend gave
            if (res.success) {
                _this._router.navigate(['dashboard']);
            }
            else {
                _this.serverMessage = res.output.message;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/log-reg/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/components/log-reg/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fixed{\r\n    width: 363px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/log-reg/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col fixed\">\n    <h1 class=\"display-3\">Register</h1>\n    <form class=\"form-group ml-2 mt-2\">\n        <label for=\"firstName\">First Name</label>\n        <input \n          class=\"form-control\"\n          type=\"text\" \n          name=\"firstName\" \n          required\n          minlength=\"3\"\n          maxlength=\"255\"\n          [(ngModel)]='user.firstName'\n          #firstName='ngModel'>\n        <div \n          class=\"text-danger\" \n          *ngIf='firstName.errors && firstName.touched && firstName.dirty'>\n            *\n            <span *ngIf='firstName.errors.required'>First name is required</span>\n            <span *ngIf='firstName.errors.minlength'>First name must be longer than 3 characters</span>\n        </div>\n        <label for=\"lastName\">Last Name</label>\n        <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"lastName\" \n        required\n        minlength=\"3\"\n        maxlength=\"255\"\n        [(ngModel)]='user.lastName'\n        #lastName='ngModel'>\n        <div \n        class=\"text-danger\" \n        *ngIf='lastName.errors && lastName.touched && lastName.dirty'>\n        *\n        <span *ngIf='lastName.errors.required'>Last name is required</span>\n        <span *ngIf='lastName.errors.minlength'>Last name must be longer than 3 characters</span>\n      </div>\n      <label for=\"email\">Email</label>\n      <input \n          class=\"form-control\"\n          type=\"text\" \n          name=\"email\" \n          required\n          pattern=\"[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z]+$\"\n          maxlength=\"255\"\n          [(ngModel)]='user.email'\n          #email='ngModel'>\n        <div \n        class=\"text-danger\" \n          *ngIf='email.errors && email.touched && email.dirty'>\n            *\n            <span *ngIf='email.errors.required'>Email is required</span>\n            <span *ngIf='email.errors.pattern'>Email entered is invalid</span>\n        </div>\n        <div class=\"text-danger\">\n          <span *ngIf='serverMessage != \"\"'>*{{serverMessage}}</span>\n        </div>\n        <label for=\"password\">Password</label>\n        <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"password\" \n        required\n        pattern=\"^[A-Za-z\\d$@$!%*?&]{4,}$\"\n        maxlength=\"255\"\n        [(ngModel)]='user.password'\n        #password='ngModel'>\n        <div \n          class=\"text-danger\" \n          *ngIf='password.errors && password.touched && password.dirty'>\n            *\n            <span *ngIf='password.errors.required'>Password is required</span>\n            <span *ngIf='password.errors.pattern'>Password entered is invalid</span>\n        </div>\n        <label for=\"confirmPassword\">Confirm Password</label>\n        <input \n        class=\"form-control\"\n        type=\"text\" \n        name=\"confirmPassword\"\n        required \n        pattern=\"{{user.password}}\"\n        [(ngModel)]='user.confirmPassword'\n        #confirmPassword='ngModel'>\n        <div \n          class=\"text-danger\" \n          *ngIf='confirmPassword.errors && confirmPassword.touched && confirmPassword.dirty'>\n            *\n            <span *ngIf='confirmPassword.errors.pattern'>Passwords do not match</span>\n        </div>\n      </form>\n      \n      <button \n        (click)='registerUser()' \n        class=\"btn btn-success float-right\"\n        *ngIf='!(firstName.errors || lastName.errors || email.errors || password.errors || confirmPassword.errors)'>Register</button>\n</div>\n<!-- {{user | json}} -->"

/***/ }),

/***/ "../../../../../src/app/components/log-reg/registration/registration.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// DEPENDENCIES
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/classes/user.ts");
// PROVIDERS
var user_service_1 = __webpack_require__("../../../../../src/app/services/user/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.user = new user_1.User();
        this.serverMessage = '';
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.registerUser = function () {
        var _this = this;
        this._userService.registerUser(this.user, function (res) {
            // if registration went successfully continue to dashboard
            // else display the message the server gave
            if (res.success) {
                _this._router.navigateByUrl('/dashboard');
            }
            else if (res.output.message) {
                _this.serverMessage = res.output.message;
            }
        });
    };
    RegistrationComponent = __decorate([
        core_1.Component({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/components/log-reg/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/log-reg/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], RegistrationComponent);
    return RegistrationComponent;
}());
exports.RegistrationComponent = RegistrationComponent;


/***/ }),

/***/ "../../../../../src/app/services/user/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// INJECTIONS
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
// SERVICE DEPENDENCIES
var uriBuilder = __webpack_require__("../../../../build-url/dist/build-url.js");
/**
 * User Service class is used to do api classes to the backend
 * Contains User data and other information
 */
var UserService = /** @class */ (function () {
    /**
     * base constructor
     * @param _http injectable
     */
    function UserService(_http) {
        this._http = _http;
    }
    /**
     * build a uri based on the current classes requests
     * @param query uri query location on local hostname
     * @returns {string} uri location
     */
    UserService.prototype._localAPIBuild = function (query) {
        return uriBuilder('', {
            path: "api/" + query
        });
    };
    /**
     * queries the backend if the user is currently logged in or not
     * @param {callback: (res: IServerMessage)} callback callback to run after backend response
     */
    UserService.prototype.ensureUserIsLoggedIn = function (callback) {
        var uri = this._localAPIBuild('is-logged');
        this._http.get(uri).subscribe(function (response) { return callback(response); });
    };
    /**
     * register a user to the database
     * @param {IUser} user user data to attempt to add to the database
     */
    UserService.prototype.registerUser = function (user, callback) {
        var uri = this._localAPIBuild('register');
        this._http.post(uri, user).subscribe(function (response) { return callback(response); });
    };
    /**
     * login a user to the database
     * @param user user data to attempt login
     * @param callback processing to be done after backend response
     */
    UserService.prototype.loginUser = function (user, callback) {
        var uri = this._localAPIBuild('login');
        this._http.post(uri, user).subscribe(function (response) { return callback(response); });
    };
    UserService.prototype.logoutUser = function (callback) {
        var uri = this._localAPIBuild('logout');
        this._http.get(uri).subscribe(function (response) { return callback(response); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map