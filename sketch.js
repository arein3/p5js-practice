function setup() {
  createCanvas(1001, 1000);
  background(200);
  text('Start', 10, 10, 70, 80);
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
