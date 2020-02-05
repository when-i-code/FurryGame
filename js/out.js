/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(document).ready(function () {\n\n    function Furry() {\n        this.x = 0;\n        this.y = 0;\n        this.direction = 'right';\n    }\n\n    function Coin() {\n        this.x = Math.floor(Math.random() * 10);\n        this.y = Math.floor(Math.random() * 10);\n    }\n    function Game() {\n        this.board = document.querySelectorAll(\"#board div\");\n        this.furry = new Furry();\n        this.coin = new Coin();\n        this.score = 0;\n        document.querySelector('#score strong').innerHTML = 'SCORE: <br> ' + this.score;\n        this.scoreElement = $('#score').find('span');\n        this.scoreElement.text('' + this.score);\n\n        this.index = function (x, y) {\n            return x + y * 10;\n        };\n\n        this.showFurry = function () {\n            this.hideVisibleFurry();\n            this.board[this.index(this.furry.x, this.furry.y)].classList.add(\"furry\");\n        };\n\n        this.hideVisibleFurry = function () {\n            var oldFurry = document.querySelector(\".furry\");\n            if (oldFurry) {\n                oldFurry.classList.remove(\"furry\");\n            }\n            // $('#board').forEach(function (div) {\n            //     div.classList.remove('furry');\n            // });\n        };\n\n        this.showCoin = function () {\n            this.board[this.index(this.coin.x, this.coin.y)].classList.add(\"coin\");\n        };\n        this.gameOver = function () {\n            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {\n                var stopInterval = function stopInterval() {\n                    clearInterval(idSetInterval);\n                };\n\n                stopInterval();\n\n                $('#over').removeClass('invisible');\n                $('#score').addClass('invisible');\n                $('#board').addClass('invisible');\n            }\n            // this.hideVisibleFurry();\n        };\n        this.moveFurry = function () {\n            if (this.furry.direction === 'right') {\n                this.furry.x = this.furry.x + 1;\n            } else if (this.furry.direction === 'left') {\n                this.furry.x = this.furry.x - 1;\n            } else if (this.furry.direction === 'up') {\n                this.furry.y = this.furry.y - 1;\n            } else if (this.furry.direction === 'down') {\n                this.furry.y = this.furry.y + 1;\n            }\n            this.gameOver();\n            this.checkCoinCollision();\n            this.showCoin();\n            this.showFurry();\n        };\n\n        this.startGame = function () {\n            var self = this;\n            idSetInterval = setInterval(function () {\n                self.moveFurry();\n            }, 250);\n        };\n\n        this.turnFurry = function () {\n            switch (event.which) {\n                case 37:\n                    this.furry.direction = 'left';\n                    break;\n                case 39:\n                    this.furry.direction = 'right';\n                    break;\n                case 38:\n                    this.furry.direction = 'up';\n                    break;\n                case 40:\n                    this.furry.direction = 'down';\n                    break;\n            }\n        };\n\n        this.checkCoinCollision = function () {\n            if (this.furry.x == this.coin.x && this.furry.y == this.coin.y) {\n                var coinClass = document.querySelector('.coin');\n                coinClass.classList.remove('coin');\n                this.score++;\n                document.querySelector('#score strong').innerHTML = 'SCORE: <br> ' + this.score;\n                this.coin = new Coin();\n                this.showCoin();\n            }\n        };\n    }\n\n    var game = new Game();\n    document.addEventListener('keydown', function (event) {\n        game.turnFurry(event);\n    });\n\n    game.showFurry();\n    game.showCoin();\n    game.startGame();\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });