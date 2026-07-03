const buttons=document.querySelectorAll('button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  
  button.addEventListener('click',function(e){
    
    
    if (e.target.className === 'Grey'){
      body.style.backgroundColor=e.target.className;
    }
    if (e.target.className === 'White'){
      body.style.backgroundColor=e.target.className;
    }
    if (e.target.className === 'Cyan'){
      body.style.backgroundColor=e.target.className;
    }
    if (e.target.className === 'Purple'){
      body.style.backgroundColor=e.target.className;
    }
    
  });
});
