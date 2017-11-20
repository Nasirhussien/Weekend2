$(document).ready(onReady)

function onReady() {
    console.log('jquery working')
    $('.operators').on('click', function () {
        console.log('button working yay')

        $.ajax({
            method: 'POST',
            url: '/calculate',
            data: {
                firstNumber: $('#inputOne').val(),
                secondNumber: $('#inputTwo').val(),
                type: $(this).attr('id')
            },
            success: function (response) {
                console.log(response);
                showResults(response)

            }

        })


    })


    function showResults(result) {
        $('#resultsBox').append('<p>' + result + '</p>')
    };

    $('#reset').on('click', function () {
        $('#inputOne').val('  ');
        $('#inputTwo').val(' ');
        $('#resultsBox').empty()
    });

}