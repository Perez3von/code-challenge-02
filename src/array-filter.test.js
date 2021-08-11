import { fiveAndGreaterOnly, evensOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge } from './array-filter';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('even only', () => {
    const input = [3, 6, 8, 2]; // arrange
    const output = evensOnly(input); // act
    expect(output).toEqual([6, 8, 2]); // assert
  });

  test('5 characters or fewer', () => {
    const input =['dog', 'wolf', 'by', 'family', 'eaten', 'camping'] // arrange
    const output = fiveCharactersOrFewerOnly(input); // act
    const expected = ['by', 'dog', 'wolf', 'eaten'];
    expect(output).toEqual(expected); // assert
  });

  test('people of the triangle', () => {
    const input = [
        { name: 'Angelina Jolie', member: true },
        { name: 'Eric Jones', member: false },
        { name: 'Paris Hilton', member: true },
        { name: 'Kayne West', member: false },
        { name: 'Bob Ziroll', member: true }
    ] // arrange
    const output = peopleWhoBelongToTheIlluminati(input); // act
    const expected = [ 
        { name: 'Angelina Jolie', member: true }, 
        { name: 'Paris Hilton', member: true }, 
        { name: 'Bob Ziroll', member: true } 
    ];
    expect(output).toEqual(expected); // assert
  });

  test('of Age', () => {
    const input =[
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Eric Jones', age: 2 },
        { name: 'Paris Hilton', age: 5 },
        { name: 'Kayne West', age: 16 },
        { name: 'Bob Ziroll', age: 100 }
    ] // arrange
    const output = ofAge(input); // act
    const expected = [ 
        { name: 'Angelina Jolie', age: 80 },
        { name: 'Bob Ziroll', age: 100 } 
    ];
    expect(output).toEqual(expected); // assert
  });


  
