var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescInput = document.getElementById("productDesc");
var myBtn = document.getElementById("myBtn");
var alertName = document.getElementById("alertName");
var alertPrice  = document.getElementById("alertPrice");
var alertCategory  = document.getElementById("alertCategory");
var alertdesc  = document.getElementById("alertdesc");
var currentIndex = 0;

var productContainer;
if (localStorage.getItem("productList") == null) {
  productContainer = [];
} else {
  productContainer = JSON.parse(localStorage.getItem("productList"));
  disblayProduct();
}

function add(){
  
  if(myBtn.innerHTML == "Add Product")
  {
    addProduct()
  }
  else
  {
    addUpdate()
  }
}


function addProduct() {
 
  if ( validtionName()&&validtionPrice() &&validtionCategory()&& validtiondesc()) {
    var product = {
      name: productNameInput.value,
      price: productPriceInput.value,
      category: productCategoryInput.value,
      descrabtion: productDescInput.value,
    };

    productContainer.push(product);
    localStorage.setItem("productList", JSON.stringify(productContainer));
    disblayProduct();
     clearForm();
    
  } 
}

function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescInput.value = "";
}

function disblayProduct() {
  cortoona = "";
  for (i = 0; i < productContainer.length; i++) {
    cortoona += `    <tr>
        <td>${i}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category} </td>
        <td>${productContainer[i].descrabtion} </td>

        <td><i class="far fa-edit ms-2" onclick="updateProduct(${i})"></i></td>
        
        <td><i class="far fa-trash-alt font-weight-bolder ms-2 " onclick="deletProduct(${i})"></i></td>
    
    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cortoona;
} 

function deletProduct(index) {
  productContainer.splice(index, 1);
  disblayProduct();
  localStorage.setItem("productList", JSON.stringify(productContainer));
}

function search(trem) {
  var cortona = "";
  for (i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(trem.toLowerCase()) ||
      productContainer[i].category.toLowerCase().includes(trem.toLowerCase())
    ) {
      cortona += `     <tr>
      <td>${i}</td>
      <td>${productContainer[i].name}</td>
      <td>${productContainer[i].price}</td>
      <td>${productContainer[i].category} </td>
      <td>${productContainer[i].descrabtion} </td>

      <td><i class="far fa-edit" onclick="updateProduct(${i})"></i></td>
      
      <td><i class="far fa-trash-alt font-weight-bolder " onclick="deletProduct(${i})"></i></td>
  
  </tr>`;
    }
  }
  document.getElementById("tableBody").innerHTML = cortona;
}


function updateProduct(index)
{
  currentIndex =index
  productNameInput.value =productContainer[index].name
  productPriceInput.value =productContainer[index].price
  productCategoryInput.value =productContainer[index].category
  productDescInput.value =productContainer[index].descrabtion
  myBtn.innerHTML ="updateProdect"

  
}


function addUpdate()
{
  productContainer[currentIndex].name =productNameInput.value
  productContainer[currentIndex].price =productPriceInput.value
  productContainer[currentIndex].category =productCategoryInput.value
  productContainer[currentIndex].descrabtion =productDescInput.value

  disblayProduct();
  localStorage.setItem("productList", JSON.stringify(productContainer));
  myBtn.innerHTML="Add prodect"
  clearForm()
}


function validtionName()
{
  var ragex = /^[A-Za-z0-9]{1,20}$/
  if(ragex.test(productNameInput.value)){

    
    alertName.style.display ="none"
    return true
  }
  else 
  {
    alertName.style.display ="block"
    return false
  }
}

function validtionPrice()
{
  var ragex = /^[0-9]{1,10}$/
  if(ragex.test(productPriceInput.value)){

    
    alertPrice.style.display ="none"
    return true
  }
  else 
  {
    alertPrice.style.display ="block"
    return false
  }
}


function validtionCategory()
{
  var ragex = /^[A-Za-z0-9]{1,20}$/
  if(ragex.test(productCategoryInput.value)){

    
    alertCategory.style.display ="none"
    return true
  }
  else 
  {
    alertCategory.style.display ="block"
    return false
  }
}

function validtiondesc()
{

  var ragex = /^[A-Za-z0-9]{1,20}$/
  if(ragex.test(productDescInput.value)){
    alertdesc.style.display ="none"
    return true
  }
  else 
  {
    alertdesc.style.display ="block"
    return false
  }
}





