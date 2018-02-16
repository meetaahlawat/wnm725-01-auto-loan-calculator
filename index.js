require('mahrio').runServer(process.env, __dirname)
    .then(function (server) {
        server.route({
            path: '/',
            method: 'GET',
            handler: function (request, reply) {
                return reply({
                    app: 'Auto Loan Calculator',
                    version: '1.0.0'
                })
            }
        });
        server.route({
            path: '/v1/autoloan/calculate',
            method: 'POST',
            handler: function (request, reply) {

                console.log('Calculating monthly payment for :' + JSON.stringify(request.payload));

                var loanAmount = request.payload.loanAmount;
                var numYearsToPayback = request.payload.numYearsToPayback;
                var rateOfInterest = request.payload.rateOfInterest;

                // get the principal
                var principal = parseFloat(loanAmount);

                // Convert interest from a percentage to a decimal, and convert from
                var interest = parseFloat(rateOfInterest) / 100 / 12;

                // an annual rate to a monthly rate. Convert payment period in years to the number of monthly payments.
                var payments = parseFloat(numYearsToPayback) * 12;

                // compute the monthly payment figure
                var x = Math.pow(1 + interest, payments);
                var monthlyPayment = (principal*x*interest)/(x-1);

                var response = {
                    monthlyPayment: parseFloat(monthlyPayment.toFixed(2))
                };

                return reply(response)
            }
        });
    });
