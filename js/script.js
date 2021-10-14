let levels = [];

let levels = [];
levels[0] = {
  map:[
     [1,1,0,0,1],
     [1,0,0,0,0],
     [0,0,1,1,0],
     [0,0,0,1,0],
     [0,1,0,1,0]
  ],

  player:{
      x:0,
      y:4
  },
  goal:{
      x:4,
      y:1
  },
  theme:'default',
};
// second level
levels[1] = {
  map:[
     [1,0,1,1,1,1],
     [0,0,0,0,0,0],
     [0,1,1,1,0,0],
     [0,0,0,1,1,0],
     [0,1,0,1,0,0]
  ],
  theme:'grassland',
  player:{
      x:2,
      y:4
  },
  goal:{
      x:4,
      y:4
  }
 };
// third level
levels[2] = {
  map:[
     [1,0,1,0,0,1,0],
     [0,0,0,0,0,1,0],
     [1,0,1,1,0,0,0],
     [1,0,0,1,0,1,0],
     [1,1,0,0,1,0,0]
  ],
  theme:'dungeon',
  player:{
      x:2,
      y:4
  },
  goal:{
      x:6,
      y:4
  }
 };

 function Game(id,level) {
  
    this.el = document.getElementById(id);
    
    // level addition
    this.level_idx = 0;
    
    // establish the basic properties common to all this objects.
    this.tileTypes = ['floor','wall'];
    this.tileDim = 32;
    // inherit the level's properties: map, player start, goal start.
    this.map = level.map;
    
    // level switch
    this.theme = level.theme;
    
    // make a copy of the level's player.
    this.player = {...level.player};
    
    // create a property for the DOM element, to be set later.
    this.player.el = null;
    
    // make a copy of the goal.
    this.goal = {...level.goal};
  }