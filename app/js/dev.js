$(document).ready(function(){
    var user = {};
    LogIn('form', 'submit');

    function LogIn(el, event) {
        $(el).on(event, function (e) {
            e.preventDefault();
            user.email = $('#username').val();
            user.password = $('#password').val();
            ShowGreetings();
        });
    }
    function ShowGreetings() {
        $("header > div div span").html(user.email);
        $("header > div").show();
        setTimeout(function () {
            $("header > div").hide();
        }, 2000);
    }
});