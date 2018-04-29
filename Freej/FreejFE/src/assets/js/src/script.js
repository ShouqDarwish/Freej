
/*
|--------------------------------------------------------------------------
| Custom Javascript code
|--------------------------------------------------------------------------
|
| Now that you configured your website, you can write additional Javascript
| code inside the following function. You might want to add more plugins and
| initialize them in this file.
|
*/

$(document).ready(function() {

    $("#login-btn").click(function(){
        $("#modal-signup").modal('hide');
        $("#modal-login").modal('show');
    });
    
    $("#login-btn-in").click(function(){
        $("#modal-signup").modal('hide');
        $("#modal-login").modal('show');
    });
    
    $("#signup-btn").click(function(){
        $("#modal-login").modal('hide');
        $("#modal-signup").modal('show');
    });
    
    $("#post-btn").click(function(){

        $("#modal-post").modal('show');
    });


});
