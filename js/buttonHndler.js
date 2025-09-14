// console.log('button handler')


const  buttonHanler = (name)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${name}`)
    .then(res => res.json())
    .then(name => displayCategoryCard(name.data))
 console.log(name);
};