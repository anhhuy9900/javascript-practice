const Joi = require('joi')

async function validate() {
    const schema = Joi.object({
        username: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

        repeat_password: Joi.ref('password'),

        access_token: [
            Joi.string(),
            Joi.number()
        ],

        birth_year: Joi.number()
            .integer()
            .min(1900)
            .max(2013),

        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
        .with('username', 'birth_year')
        .xor('password', 'access_token')
        .with('password', 'repeat_password');


    try {
        const value = await schema.validateAsync({ username: 1, birth_year: 1994 });
        console.log('value: ', value);
        return value;
    }
    catch (err) {
        console.log('err: ', err.message);
    }

}

validate()