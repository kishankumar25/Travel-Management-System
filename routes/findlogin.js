$().ready(function(){
 $("#loginval").validate({
	    rules: {  "userID":{
								required: true
							},

                  "userPwd":{
                                required: true
                            }
				},
		 messages: {
		 	
		        userID: "",
		        userPwd: ""
	    },
		submitHandler: function() {
				
					//var logdata = $("#loginval").serialize();
					var uname = $('#userID').val();
					var pass = $('#userPwd').val();
				if((uname === "test") && (pass === "1234"))
				{
					sessionStorage.setItem("username", uname);
					sessionStorage.setItem("password", pass);
					window.location.href = "dashboard.htm";
				}
				else{
					alert("Please check the credentials ")
					window.location.href = "login.htm";
				}


		}
	});

});
 