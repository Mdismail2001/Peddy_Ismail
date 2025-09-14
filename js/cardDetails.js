// console.log("card details js added")
const params = new URLSearchParams(window.location.search);

const carDetails = ()=>{
    const petId = params.get("petId");
    // console.log(petId);
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then(res => res.json())
    .then(data => renderPetDetail(data))
    .catch(error => console.log(error))
};

carDetails();

const renderPetDetail = (data) => {
    // console.log(data.petData);
    const petData = data.petData
    const petDetailsContainer = document.getElementById("petDetails");
    petDetailsDiv = document.createElement('div')
    petDetailsDiv.innerHTML = `
                            <img src="${petData?.image}" />
                            <p class="mt-5"> Name: ${petData?.pet_name? petData?.pet_name:"Not Fund"}</p>
                            <p class="mt-5"> Description: ${petData?.pet_details? petData?.pet_details:"Not Fund"}</p>
                            <p class="mt-5 mb-5"> Vaccin Status: ${petData?.vaccinated_status? petData?.vaccinated_status:"Not Fund"}</p>
                            <a href="/html/index.html"class="bg-gray-200 p-2 rounded ">Back</a>
                            `
    petDetailsContainer.append(petDetailsDiv)
}


