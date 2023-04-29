// This file is a utilities module for firstServer.js
// Helps with the determination of mean, median and mode.

class Calculation {

    static mean(args){
        let numbers = NumberHandler.checkNums(args)
        let sum = 0;
        for (let i of numbers){
            sum += i;
        }
        let mean = sum / numbers.length;
        return {operation: 'mean',
                value: mean
            };

    } 

    static median(args){
        let numbers = NumberHandler.checkNums(args);
        numbers = numbers.sort((a, b) => a - b );
        
        let midPoint = Math.floor(numbers.length / 2);
        let median = numbers.length % 2 === 0 ? ((numbers[midPoint - 1] + numbers[midPoint]) / 2) : numbers[midPoint];
        return {operation : 'median',
                value: median
            };
    }

    static mode(args){
        let numbers = NumberHandler.checkNums(args);
        let freqOfNumbers = {};
        let maxNumber = 0;
        let maxNumberCount = 0;
        for (let i of numbers){
            if (freqOfNumbers[i]){
                freqOfNumbers[i]++;
            }
            else {
                freqOfNumbers[i] = 1;
            }
            if (maxNumberCount < freqOfNumbers[i]){
                maxNumber = i;
                maxNumberCount = freqOfNumbers[i];
            }
        }
        return { operation : 'mode', 
                value : maxNumber 
            };
    }

}


class NumberHandler {
    //This class helps with validating that all the numbers are correct 
    //otherwise it will throw an error

    static checkNums(args){
        //First check that there are arguments to start with
        this.checkArgs(args);  
        
        let output = [];
        args = args.split(',')
        
        for (let i of args){
            let num = Number(i);
            if (isNaN(num)){
                throw new AppError(`The argument you passed "${i}" cannot be converted to a number`, 400);
            }
            output.push(num);
        }
        return output;
    }

    static checkArgs(args){
        if (args == undefined){
            throw new AppError(`Nums are required`, 400)
        }
        else if (args.length == 0 || args == 0){
            throw new AppError(`Please fill the nums`, 400)
        }
    }
}


class AppError extends Error {
    constructor(msg, status){
        super();
        this.msg = msg;
        this.status = status;
    }
}



module.exports = {
    Calculation, 
    NumberHandler,
    AppError
};