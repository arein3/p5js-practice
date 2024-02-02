function setup() {
  createCanvas(1000, 1500);
  background(300);
  text('Start', 750, 500, 200, 200);
}

//copied this from 'click here to save button'
/*
function mousePressed() {
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    const writer = createWriter('squares.txt');
    for (let i = 0; i < 10; i++) {
      writer.print(i * i);
    }
    writer.close();
    writer.clear();
  }
}
*/
