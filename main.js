window.addEventListener("resize", function(){
	addRequiredClasses();
	hamberger.textContent = '☰' ;
  });

  function addRequiredClasses()
  {
	let mobileNav = document.querySelector('.nav-list');
	if(window.innerWidth < 900)
	  {
		mobileNav.style.display = 'none';
		
	  }
	  else
	  {
		mobileNav.style.display = 'flex';
		
	  }
	}
	
	addRequiredClasses();
  
  let hamberger = document.querySelector('.hamberger');
  let mobileNav = document.querySelector('.nav-list');
  
  hamberger.textContent = '☰' ;
  hamberger.addEventListener('click', ()=>{

	mobileNav.style.display = mobileNav.style.display === 'none' ? 'block' : 'none';
	hamberger.textContent = hamberger.textContent === '☰' ? '✖' : '☰';
});