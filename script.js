window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;

    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', function (e) {
                console.log(e);
            });
        }
    }

    class Player {}

    class Backgroud {}

    class Enemy {}

    function handleEnemies() {}

    function displayStatusText() {}

    const input = new InputHandler();

    function animate() {}
});
