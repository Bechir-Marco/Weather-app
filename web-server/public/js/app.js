const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.querySelector("#message-1");
const msg2 = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  msg1.textContent = 'Loading...';
  msg2.textContent =  ''
   fetch(
    '/weather?address='+location).then((res) => {
        res.json().then((data) => {
        
      if (data.error) {
        msg1.textContent = data.error
      } else {
         msg1.textContent=data.forecast
         msg2.textContent=data.location
         
      }
    });
    });
    
});
