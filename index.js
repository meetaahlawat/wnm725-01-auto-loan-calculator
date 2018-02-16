require('mahrio').runServer(process.env, __dirname)
    .then(function (server) {
        server.route({
            path: '/v1/autoloan/calculate',
            method: 'POST',
            handler: function (request, reply) {

                var loanAmount = request.payload.loanAmount;
                var numYearsToPayback = request.payload.numYearsToPayback;
                var rateOfInterest = request.payload.rateOfInterest;

                var response = {
                    monthlyCarPayment: 667.00
                };

                return reply(response)
            }
        });
    });
