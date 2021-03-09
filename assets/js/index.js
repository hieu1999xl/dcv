var table;
var urlUsers = "https://jsonplaceholder.typicode.com/users";

function initTableData() {
    $.get(urlUsers, function (responseData) {
        alert(`data = ${JSON.stringify(responseData)}`);
        // var modifiedUsers = responseData.();
        table = $('#user').DataTable({
            "processing": true,
            data: responseData,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'email' },
                { data: 'address' },
                { data: 'phone' }
            ]
        });
    });
}

$(document).ready(function() {
    initTableData();
    $('#list-header').on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue");
        }
    })
})