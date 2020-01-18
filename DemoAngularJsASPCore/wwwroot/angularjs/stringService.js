app.factory('stringService', function () {
    return {
        transFormString: function (input) {
            if (input.length != 0) {
                var output = '';
                for (var i = 0; i < input.length; i++) {
                    if (i > 0 && input[i] == input[i].toUpperCase()) {
                        output = output + "  ";
                    }
                    output += input[i];
                }
                return output;
            }
        },
        toLower: function (input) {
            if (input.length == 0) {
                return "No Data";
            } else {
                return input.toLowerCase();
            }
        }
    }
})