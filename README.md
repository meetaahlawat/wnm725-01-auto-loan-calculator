# WNM725 - Assignment 01 - Auto Loan Calculator


## 1. GitHub Repository
https://git.heroku.com/sheltered-island-42401.git

## 2. Heroku App (https://sheltered-island-42401.herokuapp.com/)

```
POST /v1/autoloan/calculate HTTP/1.1
Host: sheltered-island-42401.herokuapp.com
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: e81fedc3-fe54-615a-92bc-39d5af836ad4

{
	"loanAmount":18000,
	"numYearsToPayback": 5,
	"rateOfInterest": 11
}
```
```
{
    "monthlyPayment": 391.36
}
```

