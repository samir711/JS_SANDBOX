document.getElementById('button1').addEventListener('click', loadCustomer);

document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer
function loadCustomer() {

  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {
      
      const customer = JSON.parse(this.responseText);

      const output = `
      
         <ul>
         <li>ID: ${customer.id}</li>
         <li>ID: ${customer.name}</li>
         <li>ID: ${customer.company}</li>
         <li>ID: ${customer.phone}</li>
         
         
         </ul>
      
      
      `;
      document.getElementById('customer').innerHTML = output;

      
     // document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
      //  console.log(this.responseText);
    }
  }

  xhr.send();
}

// Load Customers 


function loadCustomers() {

  //Create an XHR Object
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {
    console.log('READYSTATE', xhr.readyState);
    if (this.status === 200) {

      const customers = JSON.parse(this.responseText);

      let output = '';
      customers.forEach(customer => {
        
           output += `
      
         <ul>
         <li>ID: ${customer.id}</li>
         <li>ID: ${customer.name}</li>
         <li>ID: ${customer.company}</li>
         <li>ID: ${customer.phone}</li>
              
         </ul>
         `;
      });

      
      
      
      
      document.getElementById('customers').innerHTML = output;


      // document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
      //  console.log(this.responseText);
    }
  }

  xhr.send();
}
