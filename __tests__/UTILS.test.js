const { Calculation, NumberHandler, AppError } = require('../utils');



describe('NumberHandler', function(){
    let inputArguments;
    let wrongArgs;
    let numbers;
    let mean;
    let median;
    let mode;

    beforeAll(function(){
        inputArguments = '342,654,987,1093,2234,6243,7087,342,987';
        wrongArgs = '342,654,987,1093,2234,6243,7087,342,xdxd';
        numbers = [342,654,987,1093,2234,6243,7087,342,987];
        mean = 2218.777777777778;
        median = 987;
        mode = 342;
        
    });

    test('should convert the strings to the array of numbers properly', function(){
        let newNumbers = NumberHandler.checkNums(inputArguments);
        expect(newNumbers).toEqual(numbers);
    });
    test('should throw an error, not all the numbers can be converted', function(){
        // expect(newNumbers).toThrow(AppError);
        expect(() => NumberHandler.checkNums(wrongArgs)).toThrow(AppError);
    });
});

describe('Calculation', function(){
    let numbers;
    let mean;
    let median;
    let mode;

    beforeAll(function(){
        inputArguments = '342,654,987,1093,2234,6243,7087,342,987';
        numbers = [342,654,987,1093,2234,6243,7087,342,987];
        mean = 2218.777777777778;
        median = 987;
        mode = 342;
    });

    test('should return 2218.777777777778 as the mean', function(){
        let calculateMean = Calculation.mean(inputArguments);
        expect(calculateMean.value).toEqual(mean);
    });

    test('should return 987 as the median', function(){
        let calculateMedian = Calculation.median(inputArguments);
        expect(calculateMedian.value).toEqual(median);
    });

    test('should return 342 as the mode', function(){
        let calculateMode = Calculation.mode(inputArguments);
        expect(calculateMode.value).toEqual(mode);
    });
});

