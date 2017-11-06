(function () {
$(function() {
    // Load Toastr alert
    rrules_toastr();
});

// Toaster alert messages
function rrules_toastr() {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-right",
        "showDuration": "10000",
        "hideDuration": "1000",
        "timeOut": "8000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };

    // toastr.success('Success Message.', 'Success Alert', {}); //options in { }, types = success, info, error, warning
}
})();