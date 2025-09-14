const blockCard =(btn)=>{
    const card = btn.closest('.card-div'); //get  the parent class name 
        card.classList.add('opacity-50', 'pointer-events-none');
  
    // console.log(btn)
};
