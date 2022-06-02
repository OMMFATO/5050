var colors = "f7d1cd-e8c2ca-d1b3c4-b392ac-735d78".split("-").map(a=>"#"+a)

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	blendMode(SCREEN)
	fill(colors[frameCount%colors.length])
	ellipse(mouseX, mouseY, 20, 20);
	ellipse(random(0,width),random(0,height),random(20,100));
}