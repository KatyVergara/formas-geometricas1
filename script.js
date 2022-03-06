const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const degToGrad = (degrees)=>{
  return degrees / 180 * Math.PI;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#000000';
    context.fillRect(0, 0, width, height);
    let grd = context.createLinearGradient(90, 180, 0, 0);
    grd.addColorStop(0.9, "#FF3098");
    grd.addColorStop(0.9, "#FFAFD5"); 
    grd.addColorStop(0.1, "#8600FC");  
    
    context.fillStyle = (grd);
    // context.fillStyle = '#FF3098'
    const cx = width * 0.5;
    const cy = height * 0.5;

    const w = width * 0.001;//ancho de franja
    const h = height * 0.5;
    let x,y;

    const num = 300;
    const radius = width * 0.2;//jugar con esta linea ;)

    for (i = 0;i<num; i++){
      const slice = degToGrad(360/num);
      const angle = slice*i;
   
      x = cx + radius * Math.sin(angle);//seno//probar con tan 
      y= cy + radius* Math.cos(angle); //coseno//probar con tan

      context.save();
      context.translate(x, y);
      context.rotate(angle);  
      context.beginPath();
      context.rect(-w * 0.6, -h * 0.5, w, h);
      context.fill();
      context.restore();    
    }
  };
};
canvasSketch(sketch,settings);