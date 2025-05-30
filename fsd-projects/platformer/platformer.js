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
    // toggleGrid();


    // TODO 2 - Create Platforms
  createPlatform(560, 650, 300, 50, "hotpink");
  createPlatform(100, 550, 300, 50, "hotpink");
  createPlatform(560, 450, 300, 50, "hotpink");
  createPlatform(1000, 370, 300, 50, "hotpink");
  createPlatform(560, 250, 300, 50, "hotpink");

    // TODO 3 - Create Collectables
  createCollectable("unicornHorn", 700, 400);
  createCollectable("unicornHorn", 230, 500);
  createCollectable("sparkles", 700, 200);
  createCollectable("unicornHorn", 1130, 320);
  createCollectable("sparkles", 690, 600);
    
    // TODO 4 - Create Cannons
  createCannon("top", 530, 760);
  createCannon("top", 300, 760);
  createCannon("top", 1000, 760)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
