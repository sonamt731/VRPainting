var world;
var currClicked = 0
boxes = []
function setup() {
	// no canvas needed
	noCanvas();

	world = new World('VRScene');
	//little cursor 
	//world.showCursor()

	//code for the ground
	var g = new Plane({
					x:0, y:0, z:0,
					width:100, height:100,
					asset: 'snow',
					repeatX: 100,
					repeatY: 100,
					rotationX:-90, metalness:0.25
				   });
	world.add(g)

	//to add an object
	tree1 = new OBJ({
		asset: 'tree_obj',
		mtl: 'tree_mtl',
		x: -6,
		y: 5,
		z: -2,
		rotationX:0,
		rotationY:180,
		scaleX:3,
		scaleY:3,
		scaleZ:3,
	});
	world.add(tree1);

	tree2 = new OBJ({
		asset: 'tree_obj',
		mtl: 'tree_mtl',
		x: 6,
		y: 5,
		z: -2,
		rotationX:0,
		rotationY:180,
		scaleX:3,
		scaleY:3,
		scaleZ:3,
	});
	world.add(tree2);

	//five cubes for the colors
	box1 = new Box({x:-2, y:0, z:-3, width: 1, depth: 1.5, height: 1.2, red:255, green:0, blue:0,
		clickFunction: function(b){
			//if(currClicked == 0){
				b.setScaleY(.8);
				currClicked = 1
			//}
		}

	});
	world.add(box1);
	box2 = new Box({x:-1, y:0, z:-3, width: 1, depth: 1.5, height: 1.2, red:0, green:255, blue:0,
	clickFunction: function(b){
			b.setScaleY(.8);
			//if(currClicked == 0){
				b.setScaleY(.8);
				currClicked = 2
			//}
		}
	});
	world.add(box2);
	box3 = new Box({x:0, y:0, z:-3, width: 1, depth: 1.5, height: 1.2, red:0, green:0, blue:255,
	clickFunction: function(b){
			b.setScaleY(.8);
			//if(currClicked == 0){
				b.setScaleY(.8);
				currClicked = 3
			//}
		}
	});
	world.add(box3);
	box4 = new Box({x:1, y:0, z:-3, width: 1, depth: 1.5, height: 1.2, red:255, green:255, blue:255,
		clickFunction: function(b){
			//if(currClicked == 0){
				b.setScaleY(.8);
				currClicked = 4
			//}
		}
	});
	world.add(box4);
	box5 = new Box({x:2, y:0, z:-3, width: 1, depth: 1.5, height: 1.2, red:0, green:255, blue:0,
	clickFunction: function(b){
		//if(currClicked == 0){
				b.setScaleY(.8);
				currClicked = 5
				b.setColor(random(255), random(255), random(255));
		//	}
		}
	});
	world.add(box5);

	boxes.push(box1);
	boxes.push(box2);
	boxes.push(box3);
	boxes.push(box4);
	boxes.push(box5);


	screen = new Screen();

}

function draw() {
	// if(mouseIsPressed){
	// 	world.moveUserForward(.05);
	// }

	tree1.spinY(.1);
	tree2.spinY(.1);


	// for (box of boxes){
		//return to original state
	if (currClicked == "1"){
		box2.setScaleY(1)
		box3.setScaleY(1)
		box4.setScaleY(1)
		box5.setScaleY(1)

	}
	if (currClicked == "2"){
		box1.setScaleY(1)
		box3.setScaleY(1)
		box4.setScaleY(1)
		box5.setScaleY(1)

	}
	if (currClicked == "3"){
		box1.setScaleY(1)
		box2.setScaleY(1)
		box4.setScaleY(1)
		box5.setScaleY(1)

	}
	if (currClicked == "4"){
		box2.setScaleY(1)
		box3.setScaleY(1)
		box1.setScaleY(1)
		box5.setScaleY(1)

	}
	if (currClicked == "5"){
		box1.setScaleY(1)
		box2.setScaleY(1)
		box4.setScaleY(1)
		box3.setScaleY(1)

	}
	// }

}
class Screen{
	constructor(){
		this.container = new Container3D({x:-4, y:0, z: -5});
		for (let i = 0; i<9; i++){
			for(let j = 0; j < 9; j++){
				var b1 = new Box({x:j,y:i ,z:0, red:255, green:255, blue:255,
					enterFunction: function(me){
						me.setScaleZ(1.5);
					},
					leaveFunction:function(me){
						me.setScaleZ(1);
					},
					clickFunction: function(me){
						if(currClicked == 1){
							me.setColor(255,0,0)
						}
						else if(currClicked == 2){
							me.setColor(0,255,0);
						}
						else if(currClicked == 3){
							me.setColor(0,0,255);
						}
						else if(currClicked == 4){
							me.setColor(255);
						}
						//random color 
						else if(currClicked == 5){
							me.setColor(random(255), random(255), random(255));
						}
					}
				});
				this.container.addChild(b1)
			}
		}
		world.add(this.container);
	}
}






