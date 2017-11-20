module.exports = function (req,res) {
    
    console.log('inside calculator router')
        console.log(req.body);
    var x = req.body.firstNumber;
    console.log(x)
    var y = req.body.secondNumber;
    console.log(y)
    var operator = req.body.type;
    console.log(operator)
    
    calculations(x,y,operator)

    res.send(mathResult)
    calculations()

} 

function calculations(x, y, type) {
    console.log('inside calculations function ')
    if(type === 'addButton') {
        mathResult = [+x + +y]
    } else if (type === 'subtractButton') {
        mathResult = [+x - +y]
    } else if (type === 'multiplyButton') {
        mathResult = [+x * +y]
    } else if (type === 'divisionButton') {
        mathResult = [+x / +y]
    }
    return mathResult
} 