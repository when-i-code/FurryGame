$(document).ready(function () {

    function Furry() {
        this.x = 0;
        this.y = 0;
        this.direction = 'right';
    }

    function Coin() {
        this.x = Math.floor(Math.random() * 10);
        this.y = Math.floor(Math.random() * 10);
    }
    function Game() {
        this.board = document.querySelectorAll("#board div");
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        document.querySelector('#score strong').innerHTML = `SCORE: <br> ${this.score}`;
        this.scoreElement = $('#score').find('span');
        this.scoreElement.text(`${this.score}`);


        this.index = function (x, y) {
            return x + (y * 10);
        };

        this.showFurry = function () {
            this.hideVisibleFurry();
            this.board[this.index(this.furry.x, this.furry.y)].classList.add("furry");
        };

        this.hideVisibleFurry = function () {
            var oldFurry = document.querySelector(".furry");
            if (oldFurry) {
                oldFurry.classList.remove("furry");
            }
            // $('#board').forEach(function (div) {
            //     div.classList.remove('furry');
            // });
        };

        this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add("coin");
        };
        this.gameOver = function () {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {

                function stopInterval() {
                    clearInterval(idSetInterval);
                }

                stopInterval();

                $('#over').removeClass('invisible');
                $('#score').addClass('invisible');
                $('#board').addClass('invisible');
            }
            // this.hideVisibleFurry();
        }
        this.moveFurry = function () {
            if (this.furry.direction === 'right') {
                this.furry.x = this.furry.x + 1;
            } else if (this.furry.direction === 'left') {
                this.furry.x = this.furry.x - 1;
            } else if (this.furry.direction === 'up') {
                this.furry.y = this.furry.y - 1;
            } else if (this.furry.direction === 'down') {
                this.furry.y = this.furry.y + 1;
            }
            this.gameOver();
            this.checkCoinCollision();
            this.showCoin();
            this.showFurry();
        };

        this.startGame = function () {
            let self = this;
            idSetInterval = setInterval(function () {
                self.moveFurry();
            }, 250);
        }

        this.turnFurry = function () {
            switch (event.which) {
                case 37:
                    this.furry.direction = 'left';
                    break;
                case 39:
                    this.furry.direction = 'right';
                    break;
                case 38:
                    this.furry.direction = 'up';
                    break;
                case 40:
                    this.furry.direction = 'down';
                    break;
            }

        };

        this.checkCoinCollision = function () {
            if(this.furry.x == this.coin.x && this.furry.y == this.coin.y){
                var coinClass = document.querySelector('.coin')
                coinClass.classList.remove('coin');
                this.score ++
                document.querySelector('#score strong').innerHTML = `SCORE: <br> ${this.score}`;
                this.coin = new Coin();
                this.showCoin();
            }
        }
    }

    let game = new Game();
    document.addEventListener('keydown', function (event) {
        game.turnFurry(event);
    });


    game.showFurry();
    game.showCoin();
    game.startGame();
















});

