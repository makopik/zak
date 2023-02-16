$(function() {
    $('.forma').each(function() {    
        var $frm = $(this);
        var input = $(this).find('.validate-input-at .input-at');
        var butsend = $(this).find('.form-at-btn');
        butsend.on('click',function(){
            var check = true;
            for(var i=0; i<input.length; i++) {
                if(validate(input[i]) == false){
                    showValidate(input[i]);
                    check=false;
                }
            }
        });
        $('.form-at .input-at').each(function(){
            $(this).focus(function(){
                hideValidate(this);
            });
        });
        
    });    
    function validate(input) {
     
            if($(input).attr('type') == 'email' || $(input).attr('name') == 'email-at') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
            }
            }
   
        if($(input).val().trim() == ''){
            return false;
        }
    }
    function showValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
});