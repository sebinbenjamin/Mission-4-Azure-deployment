const carValue = require('../src/CarValue')

const testCases = [
    {
        scenario: 'when Kia and 2000, return 4100',
        input: { model: 'Kia', year: 2000 },
        expected: { car_value: 4100 }
    },
    {
        scenario: 'when K$ia and 2000, return 4100',
        input: { model: 'K$ia', year: 2000 },
        expected: { car_value: 4100 }
    },
    {
        scenario: 'when Kia and 2000.5, return error',
        input: { model: 'Kia', year: 2000.5 },
        expected: { error: "there is an error" }
    },
    {
        scenario: 'when 山 and 2000, return error',
        input: { model: '山', year: 2000 },
        expected: { error: "there is an error" }
    },
    {
        scenario: 'when 17 and 2010, return error',
        input: { model: '17', year: 2010 },
        expected: { error: "there is an error" }
    },
    {
        scenario: 'when Ford and -100, return error',
        input: { model: 'Ford', year: -100 },
        expected: { error: "there is an error" }
    },
    {
        scenario: 'when Tesla and two thousand and twenty, return error',
        input: { model: 'Tesla', year: "two thousand and twenty" },
        expected: { error: "there is an error" }
    },
]

describe('tests', () => {
    testCases.map(ts => {
        it(ts.scenario, () => {
            //Act
            const actual = carValue(ts.input)

            //Assert
            expect(actual).toStrictEqual(ts.expected)
        })
    })
})



// describe('car value tests', () => {

//     it('when Kia and 2000, return 4100', () => {
//         //Arange
//         const car = { model: 'Kia', year: 2000 }
//         const expected = { car_value: 4100 }

//         //Act
//         const actual = carValue({ model: 'Kia', year: 2000 })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })

//     it('when K$ia and 2000, return 4100', () => {
//         //Arange
//         const car = { model: 'K$ia', year: 2000 }
//         const expected = { car_value: 4100 }

//         //Act
//         const actual = carValue({ model: 'K$ia', year: 2000 })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })

//     it('when Kia and 2000.5, return error', () => {
//         //Arange
//         const car = { model: 'Kia', year: 2000.5 }
//         const expected = { error: "there is an error" }

//         //Act
//         const actual = carValue({ model: 'Kia', year: 2000.5 })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })

//     it('when 山 and 2000, return error', () => {
//         //Arange
//         const car = { model: '山', year: 2000 }
//         const expected = { error: "there is an error" }

//         //Act
//         const actual = carValue({ model: '山', year: 2000 })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })

//     it('when 17 and 2010, return error', () => {
//         //Arange
//         const car = { model: '17', year: 2010 }
//         const expected = { error: "there is an error" }

//         //Act
//         const actual = carValue({ model: '17', year: 2010 })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })


//     it('when Ford and -100, return error', () => {
//         //Arange
//         const car = { model: 'Ford', year: -100 }
//         const expected = { error: "there is an error" }
//         //Act
//         const actual = carValue({ model: 'Ford', year: -100 })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })

//     it('when Tesla and two thousand and twenty, return error', () => {
//         //Arange
//         const car = { model: 'Tesla', year: "two thousand and twenty" }
//         const expected = { error: "there is an error" }

//         //Act
//         const actual = carValue({ model: 'Tesla', year: "two thousand and twenty" })

//         //Assert
//         expect(actual).toStrictEqual(expected)
//     })

// })