const button5=document.querySelector("#plusfive")
const indicator=document.querySelector( "#number-indicator " )
const disp=document.querySelector( "#display-heading"   )
button5.addEventListener(  'click ',() =>  {
    disp.textContent="added 5"
    indicator.textContent=(parseInt(indicator.textContent)+5).toString()
})
const button10=document.querySelector("#plusTen")
const indicator2 =document.querySelector( "#number-indicator " )
const disp2=document.querySelector( "#display-heading"   )
button10.addEventListener(  'click ',() =>  {
    disp2.textContent="added 10"
    indicator2.textContent=(parseInt(indicator2.textContent)+10).toString()
})


const button15=document.querySelector("#plusFifteen")
const indicator3 =document.querySelector( "#number-indicator " )
const disp3=document.querySelector( "#display-heading"   )
button15.addEventListener(  'click ',() =>  {
    disp3.textContent="added 15"
    indicator3.textContent=(parseInt(indicator3.textContent)+15).toString()
})
const button20=document.querySelector("#plusTwenty")
const indicator4 =document.querySelector( "#number-indicator " )
const disp4=document.querySelector( "#display-heading"   )
button20.addEventListener(  'click ',() =>  {
    disp4.textContent="added 20"
    indicator4.textContent=(parseInt(indicator4.textContent)+20).toString()
})
