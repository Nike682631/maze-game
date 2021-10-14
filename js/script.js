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