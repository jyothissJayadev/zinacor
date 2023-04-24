console.log("this is connected")
const calculatorForm = document.getElementById('calculator-form');
const resultsDiv = document.getElementById('results');

document.getElementById('myButton').addEventListener('click', function(event) {
  

  event.preventDefault();
  const corrosionClass = calculatorForm.elements['corrosion-class'].value;
  const coatingMaterial = calculatorForm.elements['coating-material'].value;
  const substrateCondition = calculatorForm.elements['substrate-condition'].value;

  // Perform calculation based on user inputs
  let coatingThickness;
  let wireQuantity;
  if (corrosionClass === 'c1') {
    coatingThickness = 50;
    wireQuantity = 2;
  } else if (corrosionClass === 'c2') {
    if (coatingMaterial === 'zinc') {
      if (substrateCondition === 'with-coating') {
        coatingThickness = 70;
        wireQuantity = 3;
      } else {
        coatingThickness = 80;
        wireQuantity = 4;
      }
    }
  } else if (corrosionClass === 'c3') {
    if (coatingMaterial === 'zinc') {
      if (substrateCondition === 'with-coating') {
        coatingThickness = 100;
        wireQuantity = 5;
      } else {
        coatingThickness = 120;
        wireQuantity = 6;
      }
    } else if (coatingMaterial === 'aluminum-zinc') {
      if (substrateCondition === 'with-coating') {
        coatingThickness = 90;
        wireQuantity = 4;
      } else {
        coatingThickness = 110;
        wireQuantity = 5;
      }
    }
  } else {
    resultsDiv.textContent = 'Please select valid options for all fields.';
    return;
  }
console.log(coatingThickness)
  // Display results
  resultsDiv.innerHTML = `<p>Coating thickness: ${coatingThickness} microns</p> <p>Wire quantity: ${wireQuantity} kg/m²</p>
  <P>* The figure given above is purely theoretical and is given for information only. It therefore does not engage Zinacor S.A. in any way. In practice, you will have to take into account many technical, design and human factors that will increase the quantity to be used.</p> `;
});

let read1=document.getElementById("readMore1");
let readpara1=document.querySelector(".readpara1");
read1.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log(read1.innerText)
readpara1.classList.toggle('none');
if(read1.innerText=='Read More'){
    read1.innerText='Read Less' 
}
else if(read1.innerText=='Read Less'){
    read1.innerText='Read More' 
}

})


function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)


const sr=ScrollReveal({
  distance:"60px",
  duration:1800,
  reset:true
  
})

sr.reveal(`.o2,.left,.o4,.p4`,
{origin:'left',
interval:200,
})

sr.reveal(`.l1,.right ,.show`,
{
  origin:'right',
  interval:200
})

sr.reveal(`.calculator,.g1`,{
  origin:'top',
  interval:100
})
sr.reveal(`.navbar-brand,.p1,.p3`,{
  origin:'bottom',
  interval:100
})
sr.reveal(`.o1`,{
  origin:'bottom',
  interval:180
})



  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.classList.add("hidden");
  });
  


