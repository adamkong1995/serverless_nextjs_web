import { isNumber } from '../../util/math';

export default async (req, res) => {
    if(req.method === 'POST') {
        const { first, second } = req.body;

        if(!isNumber(first) || !isNumber(second)) {
            return res.json({
                result: 'Please input a number!',
                opeartion: ''
            })
        };

        //
        // Some DB actions here .....
        //

        res.json({
            result: first * second,
            operation: '*'
        });
    } else {
        res.statusCode = 404;
        res.json({
            message: 'Only POST method is allowed.'
        })
    };
};