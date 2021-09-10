const para1 = document.getElementById("para1");   

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", function(e){ 
    e.preventDefault();
    fetch('https://stock-exchange-dot-full-stack-course-services.ew.r.appspot.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const list = document.getElementById("list");
    list.innerHTML = null;
    if(data && data.length > 0) {
        data.forEach(item => {
            list.innerHTML += `<li class="company"><a href='html/company.html?symbol=${item.symbol}'> ${item.symbol} - ${item.name} </a></li>`
        })
    }
 })
})




var loader = document.getElementById('loader');
window.addEventListener ("load", function() {
setTimeout(function(){loader.style.display = 'none';}, 2000);
});




