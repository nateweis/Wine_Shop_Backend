const paypal = require('paypal-rest-sdk');
require('dotenv').config();

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAYPAL_ID,
    'client_secret': process.env.PAYPAL_SECRET
  });

const purchaseMade = (req, res) => {
    
    const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/good",
        "cancel_url": "http://localhost:3000/bad"
    },
    "transactions": [{
        "item_list": {
            "items": req.body.cart
        },
        "amount": {
            "currency": "USD",
            "total": req.body.total
        },
        "description": "A beautifull piece of art."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        throw error;
    } else {

        for (let i = 0; i < payment.links.length; i++) {
            if (payment.links[i].rel === 'approval_url') {
                res.json({link: payment.links[i].href})
                // res.redirect(payment.links[i].href)
            }
            
        }
    }
});


}

const paymentMade = (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": req.query.cartTotal
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            // console.log(JSON.stringify(payment));
            res.json({data: payment})
        }
    });

}

module.exports = {
    purchaseMade,
    paymentMade
}

