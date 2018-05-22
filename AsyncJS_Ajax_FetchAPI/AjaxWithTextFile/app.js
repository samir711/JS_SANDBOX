document.getElementById('button').addEventListener('click', loadData);

function loadData() {

 //Create an XHR Object
  const xhr = new XMLHttpRequest();
  //OPEN
  xhr.open('GET', 'data.txt', true);
   
  // Optional - Used for spinner / loaders
  xhr.onprogress = function () {
    console.log('READYSTATE', xhr.readyState);
  }


  
  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
     // console.log(this.responseText);
    }
  }

  // xhr.onreadystatechange = function () {
  //    console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {

  //     console.log(this.responseText);
  //   }
      

 // }
  xhr.send();

  // readyState Values
  //0 : request not initialized
  //1 : server connection established
  //2 : request received
  //3 : processing request
  //4 : request finished and response is ready





  // HTTP Status
  // 200: "OK"
  //403: "Forbidden"
  // 404: "Not Found"

}