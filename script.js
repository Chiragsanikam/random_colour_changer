function changeColour(){
    let values="0123456789ABCDEF"
    let cons= '#'
    for(let i=0; i<=6; i++){
      cons = cons +  values[Math.trunc(Math.random()*16)]
    }
    document.body.style.backgroundColor=cons;
  } 