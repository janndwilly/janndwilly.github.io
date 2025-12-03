$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    // createPlatform(200, 650, 200, 20, "yellow");
    // createPlatform(300, 550, 200, 20, "orange");
    // createPlatform(500, 425, 200, 20, "yellow");
    // createPlatform(500, 320, 150, 10, "orange");
    // createPlatform(250, 200, 100, 10, "red");
    // createPlatform(550, 150, 75, 10, "yellow");
    // createPlatform(890, 350, 75, 10, "orange");
    // createPlatform(750, 600, 350, 20, "red");
    // createPlatform(1000, 450, 300, 10, "green");
    // createPlatform(700, 180, 5, 300, "blue");
    // createPlatform(50, 500, 75, 10, "green");
    // createPlatform(125, 200, 5, 300, "blue");
    // createPlatform(705, 265, 75, 10, "yellow");
// 12/1/25 New Platformer
createPlatform(700, 340, 100, 10, "green");
createPlatform(600, 240, 100, 10, "green");
createPlatform(500, 140, 100, 10, "green");
createPlatform(400, 100, 100,10, "green");
createPlatform(300, 140, 100, 10, "green");
createPlatform(200, 240, 100, 10, "green");
createPlatform(100, 340, 100, 10, "green");
createPlatform(100, 400, 700, 10, "brown");
createPlatform(1200, 640, 100, 10, "green");
createPlatform(1100, 600, 100, 10, "red");
createPlatform(1000, 560, 100, 10, "green");
createPlatform(900, 520, 100, 10, "red");
createPlatform(800, 480, 100, 10, "green");
createPlatform(900, 360, 100, 10, "red");
createPlatform(400, 300, 100, 10, "brown");
createPlatform(500, 300, 10, 100, "brown")





    // TODO 3 - Create Collectables
    // createCollectable("max", 275, 160);
    // createCollectable("diamond", 1050, 410);
    // createCollectable("steve", 1140, 410);
    // createCollectable("kennedi", 1230, 410);
    // createCollectable("max", 125, 125);
    // 12/1/25 new platformer

    createCollectable("diamond", 130, 300)
    createCollectable("steve", 230, 200)
    createCollectable("max", 330, 100)
    createCollectable("kennedi", 430, 60)
    createCollectable("max", 530, 100)
    createCollectable("steve", 630, 200)
    createCollectable("diamond", 730, 300)
    createCollectable("steve", 430, 350)








    // TODO 4 - Create Cannons
    // createCannon("right", 630, 550)
    // createCannon("top", 870, 600)
    // createCannon("bottom", 950, 600)
// 12/1/25 New PLatformer

createCannon("right", 480, 1000)
createCannon("top", 1399, 1000)
createCannon("bottom", 600, 800)





    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
