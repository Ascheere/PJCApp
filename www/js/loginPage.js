function submitLogin() {
   jQuery(document).ready(function() {
	   var uri = 'http://pjc.gear.host/api/Login';
	   var day = new Date();
	   var now = day.getTime();
       var login = {
             'UserName': $('#username').val(),
             'Password': $('#password').val()};
             
        $.ajax({
             type: 'POST',
             dataType: 'json',
             data: login,
             url: uri,
             success: function (data) {
			 window.localStorage.setItem("token", data);
             window.location.href = 'splash.html';
             //$('#data').html(window.localStorage.getItem("token"));
             },
             error: function () {
                  alert('Failure');
             }
        });
   });
}