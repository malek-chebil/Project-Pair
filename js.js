var workers = JSON.parse(window.localStorage.getItem('workers'))

var company = [
   		{
   			name:"Arab Tunisian Bank ",
           field : "Accounting" ,
           Email : "atb@gmail.com" ,
           State : "Tunis", 
           Phone : "0021671546456" 
       	}, 
    	{		
    	   name:"TBS",
           field : "Marketing" ,
           Email : "tbs@gmail.com" ,
           State : "Sousse", 
           Phone : "0021626262626" 
        },
   		{
   		   name:"next Step",
           field : "Web development" ,
           Email : "nextstep@gmail.com" ,
           State : "Bizert", 
           Phone : "0021622555666"
        }, 
        {
   		   name:"Tunisian Company of Telecommunications",
           field : "Communication" ,
           Email : "TCT@gmail.com" ,
           State : "Tunis", 
           Phone : "0021652445445"
        },
        {
   		   name:"Tunisian Company of Telecommunications",
           field : "Comunication" ,
           Email : "TCT@gmail.com" ,
           State : "Kairawen", 
           Phone : "0021652445445"
        } 
           
    ];


$("#submit1").on("click", function() {
	var workers = JSON.parse(window.localStorage.getItem('workers'))
	var object = {}	

    object.firstName = $("#first").val();
    object.lastName = $("#last").val();
    object.mail= $("#mail").val();
    object.phoneNumber= $("#number").val();
    object.State = $("#State").val();
    object.field = $("#field").val();
   
   
console.log(object)
console.log(workers)
   

   for ( var i = 0; i<company.length;i++) {
   	  if (company[i].field===object.field){
   	  	console.log(company[i]);
   	  }
   }

   workers.push(object)
   window.localStorage.setItem('workers',JSON.stringify(workers))
})

           
//window.localStorage.setItem('companies',JSON.stringify(company))

// window.localStorage.setItem('workers',JSON.stringify([]))


