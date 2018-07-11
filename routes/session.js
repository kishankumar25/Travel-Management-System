//session or login control js
var loginid;
var role ;
loginid = sessionStorage.getItem("username");
role = sessionStorage.getItem("password");
loginname = sessionStorage.getItem("uname");

if(!loginid)
{
	if(!role)
	{
	window.location.href = "login.html";	
		
	}
	
}



function logout()
{
	
	sessionStorage.clear();
	window.location.href = "index.html";	
						
	
	
}