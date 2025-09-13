// console.log("category btn added")


// load categoris from database using API 
 const loadCategories =()=>{
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(res => res.json())
    .then(data => displayCategories(data.categories))
    

 };

 loadCategories()


// display category list with in a button of the index page 
const displayCategories = (categories)=>{
    // console.log(categories);

    // get button sectione where pass the create button
    const btnSection = document.getElementById("categoryBtncontainer")

    // loof for get category name and icon from server
    categories.forEach(item => {
        // console.log(item)
        const btnContainer = document.createElement('button');
        btnContainer.classList="w-40 bg-gray-200 p-4 rounded relative text-center"
        btnContainer.innerHTML = `
                                <img class="absolute w-8 h-8"  src="${item.category_icon}"/>
                                ${item.category}`
        btnSection.append(btnContainer)
    });

};
