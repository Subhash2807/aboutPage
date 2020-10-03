const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexbtn= document.querySelector('.hexbtn');
const  bc=document.querySelector('body');
const write= document.querySelector('.hex');
      
      
hexbtn.addEventListener('click',getHex);

function getHex()
{
    let hexclr='#';
    for(let i=1; i<=6; i++)
    {
        var temp= Math.floor(Math.random()*hexNumbers.length)
        hexclr+=hexNumbers[temp];
    }
    bc.style.backgroundColor = hexclr;
    write.innerHTML= `<h1><i><b> ${hexclr} </h1>`;
}