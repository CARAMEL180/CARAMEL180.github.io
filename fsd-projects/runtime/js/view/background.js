var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        var toto;
        var house;


      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundImage = new Image();
            backgroundImage.src = "img/roadtoOz.jpg";
            backgroundImage.onload = function() {
                var backgroundFill = new createjs.Bitmap(backgroundImage);               
                backgroundFill.scaleX = app.canvas.width / backgroundImage.width;
                backgroundFill.scaleY = groundY / backgroundImage.height;
                background.addChildAt(backgroundFill, 0); 
            };
            
            // TODO 2: - Add a moon and starfield
            /*
            for(var i = 0; i < 100; i++){
                var circle = draw.circle(3, "white", "LightGray", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }

            var moon = draw.bitmap("img/moon.png");
            moon.x = canvasWidth - 250;
            moon.y = groundY - 450;
            moon.scaleX = 0.5;
            moon.scaleY = 0.5;
            background.addChild(moon);
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++){
                var buildingColors = ["yellow", "green", "red", "purple", "pink"];
                var buildingHeight = 300 * Math.random();
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);
                building.x = 300 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            */
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 300;
            tree.y = groundY - 225;
            background.addChild(tree);

            // add toto
            toto = draw.bitmap("img/totoYES.png");
            toto.x = 200;
            toto.y = groundY - 57;
            toto.scaleX = 0.3;
            toto.scaleY = 0.3;
            background.addChild(toto);

            // add flying house
            house = draw.bitmap("img/flyinghouseYES.png");
            house.image.onload = function(){
                house.regX = house.image.width / 2;
                house.regY = house.image.height / 2;
                house.x = 1500 + house.regX;
                house.y = groundY - 470 + house.regY;
            }
            
            house.x = 500;
            house.y = groundY - 370;
            house.scaleX = 0.3;
            house.scaleY = 0.3;
            house.rotationalVelocity = 2;
            background.addChild(house);

            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x -= 3;

            if(tree.x < -250){
                tree.x = canvasWidth + 100;
            }
            
            toto.x = toto.x -= 3;

            if(toto.x < -250){
                toto.x = canvasWidth + 100;
            }

            house.x = house.x -= 1;

            if(house){
                house.rotation += 2;
            }
            
            // TODO 4: Part 2 - Parallax
            
            for (var i = 0; i < buildings.length; i++){
                var building = buildings[i];
                building.x -= 3;
                if (building.x < - 100){
                    building.x = canvasWidth + 100;
                }

            
            
            }


        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
