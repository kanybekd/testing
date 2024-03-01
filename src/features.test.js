import { addTwo } from './features'
import { binarySearch } from './features'
import { stringCapitalize } from './features'


// describe("this function tests addtwo", () => {
//     test('This  function tests addition of positive numbers', () => {
//         expect(addTwo(10, 20)).toBe(30)
//     })
//     test('This  function tests addition of negative numbers', () => {
//         expect(addTwo(-10, -20)).toBe(-30)
//     })
//     test('This  function test addition of different numbers', () => {
//         expect(addTwo(10, -20)).toBe(-10)
//     })
//     test('This  function test if answer is not correct', () => {
//         expect(addTwo(10, 20)).not.toBe(300)
//     })
//     test('This  function tests if inputs are diff types', () => {
//         expect(addTwo('hello', undefined)).toBe('sorry invalid data types')
//     })
// })

describe("THIS function test binary search", () => {
    let arr = [-5, 2, 3, 7, 80, 90, 110, 450, 5656, 789465]

    //assert
    test('test if number is detected correctly', () => {
        expect(binarySearch(arr, -5)).toBe(0)
    })
    test('test if number is  not correctly detected', () => {
        expect(binarySearch(arr, 789465)).not.toBe(2)
    })
    test('test if number is  not correctly detected', () => {
        expect(binarySearch(arr, 4654)).toBeFalsy()
    })
})


describe('tests string capitalizatiojn', () => {
    test('check if string is converted to uppercase', () => {
        expect(stringCapitalize("hello")).toBe("HELLO")
    })
})
