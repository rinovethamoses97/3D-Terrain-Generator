let size=20;
let rows;
let cols;
let z_values=[];
function setup(){
    createCanvas(500,500,WEBGL);
    rows=1000/size;
    cols=1000/size;
    let x_off=0;
    let y_off=0;
    for(let i=0;i<rows+1;i++){
        let row=[];
        y_off=0;
        for(let j=0;j<cols+1;j++){
            let z=map(noise(x_off,y_off),0,1,-100,100);
            row.push(z);
            y_off+=0.1;
        }
        z_values.push(row);
        x_off+=0.1;
    }
}
function draw(){
    background(0);
    angleMode(DEGREES);
    rotateX(50);
    translate(-width/2-200,-height/2-500);
    stroke(255);
    noFill();
    for(let i=0;i<rows;i++){
        beginShape(TRIANGLE_STRIP);
        for(let j=0;j<cols;j++){
            vertex(j*size,i*size,z_values[j][i]);
            vertex(j*size,(i+1)*size,z_values[j][i+1]);    
            vertex((j+1)*size,i*size,z_values[j+1][i]);
            vertex((j+1)*size,(i+1)*size,z_values[j+1][i+1]);
        }
        endShape();
    }
}