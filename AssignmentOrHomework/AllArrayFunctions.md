# JavaScript Array Functions - Complete Reference Table

## Table of Contents
1. [Mutating Methods](#mutating-methods)
2. [Non-Mutating Methods](#non-mutating-methods)
3. [Iteration Methods](#iteration-methods)
4. [Search Methods](#search-methods)
5. [Transformation Methods](#transformation-methods)
6. [Utility Methods](#utility-methods)

---

## MUTATING METHODS
*Methods that modify the original array*

| # | Function | Syntax | Parameters | Returns | Purpose |
|---|----------|--------|-----------|---------|---------|
| 1 | **push()** | `array.push(item1, item2, ...)` | Elements to add | New length | Adds one or more elements to the END of array |
| 2 | **pop()** | `array.pop()` | None | Removed element | Removes and returns the LAST element |
| 3 | **unshift()** | `array.unshift(item1, item2, ...)` | Elements to add | New length | Adds one or more elements to the START of array |
| 4 | **shift()** | `array.shift()` | None | Removed element | Removes and returns the FIRST element |
| 5 | **splice()** | `array.splice(start, deleteCount, item1, ...)` | start, deleteCount, items | Removed elements | Adds/removes elements at specific position |
| 6 | **reverse()** | `array.reverse()` | None | Reversed array | Reverses the order of elements |
| 7 | **sort()** | `array.sort(compareFunction)` | compareFunction (optional) | Sorted array | Sorts elements (ascending by default) |
| 8 | **fill()** | `array.fill(value, start, end)` | value, start, end | Filled array | Fills array elements with a specific value |
| 9 | **copyWithin()** | `array.copyWithin(target, start, end)` | target, start, end | Modified array | Copies elements within the same array |

---

## NON-MUTATING METHODS
*Methods that don't modify the original array*

| # | Function | Syntax | Parameters | Returns | Purpose |
|---|----------|--------|-----------|---------|---------|
| 10 | **concat()** | `array.concat(arr1, arr2, ...)` | Arrays or items | New array | Combines/merges multiple arrays |
| 11 | **slice()** | `array.slice(start, end)` | start, end | New array | Extracts a shallow copy of a portion |

---

## ITERATION METHODS
*Methods for looping through array elements*

| # | Function | Syntax | Parameters | Returns | Purpose |
|---|----------|--------|-----------|---------|---------|
| 12 | **forEach()** | `array.forEach(callback)` | callback(element, index, array) | undefined | Executes function for each element |
| 13 | **map()** | `array.map(callback)` | callback(element, index, array) | New array | Transforms each element into new array |
| 14 | **filter()** | `array.filter(callback)` | callback(element, index, array) | New array | Filters elements based on condition |
| 15 | **reduce()** | `array.reduce(callback, initialValue)` | callback(accumulator, current, index, array), initialValue | Single value | Reduces array to single value |
| 16 | **reduceRight()** | `array.reduceRight(callback, initialValue)` | callback, initialValue | Single value | Reduces array from right to left |

---

## SEARCH METHODS
*Methods for finding elements in array*

| # | Function | Syntax | Parameters | Returns | Purpose |
|---|----------|--------|-----------|---------|---------|
| 17 | **indexOf()** | `array.indexOf(searchElement, fromIndex)` | searchElement, fromIndex (optional) | Index or -1 | Finds first index of element |
| 18 | **lastIndexOf()** | `array.lastIndexOf(searchElement, fromIndex)` | searchElement, fromIndex (optional) | Index or -1 | Finds last index of element |
| 19 | **includes()** | `array.includes(searchElement, fromIndex)` | searchElement, fromIndex (optional) | true/false | Checks if array contains element |
| 20 | **find()** | `array.find(callback)` | callback(element, index, array) | Element or undefined | Returns FIRST element matching condition |
| 21 | **findIndex()** | `array.findIndex(callback)` | callback(element, index, array) | Index or -1 | Returns INDEX of first match |
| 22 | **some()** | `array.some(callback)` | callback(element, index, array) | true/false | Returns true if ANY element matches |
| 23 | **every()** | `array.every(callback)` | callback(element, index, array) | true/false | Returns true if ALL elements match |

---

## TRANSFORMATION METHODS
*Methods for converting or flattening arrays*

| # | Function | Syntax | Parameters | Returns | Purpose |
|---|----------|--------|-----------|---------|---------|
| 24 | **join()** | `array.join(separator)` | separator (default: ',') | String | Joins elements into a single string |
| 25 | **flat()** | `array.flat(depth)` | depth (default: 1) | New flattened array | Flattens nested arrays to specified depth |
| 26 | **flatMap()** | `array.flatMap(callback)` | callback(element, index, array) | New flattened array | Maps and flattens result in one step |
| 27 | **toString()** | `array.toString()` | None | String | Converts array to string representation |

---

## UTILITY METHODS
*Static methods and properties*

| # | Function | Syntax | Parameters | Returns | Purpose |
|---|----------|--------|-----------|---------|---------|
| 28 | **Array.from()** | `Array.from(iterable, mapFn)` | iterable, mapFunction (optional) | New array | Creates array from iterable (string, Set, etc.) |
| 29 | **Array.isArray()** | `Array.isArray(value)` | value | true/false | Checks if value is an array |
| 30 | **Array.of()** | `Array.of(element0, element1, ...)` | Elements | New array | Creates array from individual arguments |
| 31 | **length** | `array.length` | None | Number | Gets or sets the number of elements |

---

## Quick Reference by Use Case

### Adding Elements
| Method | Position | Mutates |
|--------|----------|---------|
| push() | End | Yes |
| unshift() | Start | Yes |
| splice() | Any | Yes |
| concat() | End | No |

### Removing Elements
| Method | Position | Mutates |
|--------|----------|---------|
| pop() | End | Yes |
| shift() | Start | Yes |
| splice() | Any | Yes |
| slice() | Any | No |

### Searching Elements
| Method | Returns | Mutates |
|--------|---------|---------|
| indexOf() | Index | No |
| includes() | Boolean | No |
| find() | Element | No |
| findIndex() | Index | No |
| some() | Boolean | No |
| every() | Boolean | No |

### Transforming Array
| Method | Purpose | Mutates |
|--------|---------|---------|
| map() | Transform each element | No |
| filter() | Select elements | No |
| reduce() | Aggregate | No |
| sort() | Sort elements | Yes |
| reverse() | Reverse order | Yes |

---

## Common Examples

### Example 1: Filter and Map
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4, 6]
  .map(n => n * 10);          // [20, 40, 60]
```

### Example 2: Reduce (Sum)
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
```

### Example 3: Find Element
```javascript
const users = [{id: 1, name: 'John'}, {id: 2, name: 'Jane'}];
const user = users.find(u => u.id === 2); // {id: 2, name: 'Jane'}
```

### Example 4: Flatten Array
```javascript
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(2); // [1, 2, 3, 4, 5, 6]
```

---

## Key Takeaways

✅ **Mutating Methods**: push, pop, shift, unshift, splice, reverse, sort, fill, copyWithin
✅ **Non-Mutating**: concat, slice
✅ **For Loops**: forEach, map, filter, reduce
✅ **For Searching**: indexOf, includes, find, findIndex, some, every
✅ **For Transforming**: join, flat, flatMap

Choose non-mutating methods when you want to keep the original array unchanged!

// ==================== 1. MUTATING METHODS (Change original array) ====================

console.log('\n--- MUTATING METHODS (Modify Original Array) ---\n');

// push() - Add element at end
console.log('1. push() - Adds one or more elements at the END');
let arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log('   Result:', arr1); // [1, 2, 3, 4, 5]
console.log('   Usage: Add elements to end of array\n');

// pop() - Remove element from end
console.log('2. pop() - Removes LAST element');
let arr2 = [1, 2, 3];
let removed = arr2.pop();
console.log('   Result:', arr2, '| Removed:', removed); // [1, 2], 3
console.log('   Usage: Remove and return last element\n');

// unshift() - Add element at beginning
console.log('3. unshift() - Adds one or more elements at the START');
let arr3 = [2, 3];
arr3.unshift(0, 1);
console.log('   Result:', arr3); // [0, 1, 2, 3]
console.log('   Usage: Add elements to beginning of array\n');

// shift() - Remove element from beginning
console.log('4. shift() - Removes FIRST element');
let arr4 = [1, 2, 3];
let first = arr4.shift();
console.log('   Result:', arr4, '| Removed:', first); // [2, 3], 1
console.log('   Usage: Remove and return first element\n');

// splice() - Add/Remove elements at any position
console.log('5. splice(start, deleteCount, item1, item2, ...) - ADD/REMOVE at any position');
let arr5 = [1, 2, 3, 4, 5];
let removed5 = arr5.splice(2, 2, 'a', 'b'); // Start at index 2, remove 2 elements, add 'a' and 'b'
console.log('   Result:', arr5); // [1, 2, 'a', 'b', 5]
console.log('   Removed:', removed5); // [3, 4]
console.log('   Usage: Insert/remove elements at specific position\n');

// reverse() - Reverse array
console.log('6. reverse() - Reverses order of elements');
let arr6 = [1, 2, 3, 4, 5];
arr6.reverse();
console.log('   Result:', arr6); // [5, 4, 3, 2, 1]
console.log('   Usage: Reverse the array\n');

// sort() - Sort array
console.log('7. sort(compareFunction) - Sorts elements');
let arr7 = [3, 1, 4, 1, 5, 9];
arr7.sort((a, b) => a - b); // Ascending
console.log('   Result (ascending):', arr7); // [1, 1, 3, 4, 5, 9]
console.log('   Usage: Sort array with custom compare function\n');

// fill() - Fill array with value
console.log('8. fill(value, start, end) - Fills elements with specific value');
let arr8 = [1, 2, 3, 4, 5];
arr8.fill(0, 2, 4); // Fill from index 2 to 4 with 0
console.log('   Result:', arr8); // [1, 2, 0, 0, 5]
console.log('   Usage: Fill array elements with a value\n');

// copyWithin() - Copy elements within array
console.log('9. copyWithin(target, start, end) - Copies elements within array');
let arr9 = [1, 2, 3, 4, 5];
arr9.copyWithin(0, 3, 5); // Copy elements from index 3-5 to index 0
console.log('   Result:', arr9); // [4, 5, 3, 4, 5]
console.log('   Usage: Copy part of array to another position\n');

// ==================== 2. NON-MUTATING METHODS (Don't change original array) ====================

console.log('\n--- NON-MUTATING METHODS (Don\'t Modify Original Array) ---\n');

// concat() - Combine arrays
console.log('10. concat(array1, array2, ...) - Combines arrays');
let arr10a = [1, 2];
let arr10b = [3, 4];
let combined = arr10a.concat(arr10b, [5, 6]);
console.log('    Result:', combined); // [1, 2, 3, 4, 5, 6]
console.log('    Original arr10a:', arr10a); // [1, 2] (unchanged)
console.log('    Usage: Merge multiple arrays\n');

// slice() - Extract portion of array
console.log('11. slice(start, end) - Extracts portion of array');
let arr11 = [1, 2, 3, 4, 5];
let sliced = arr11.slice(1, 4);
console.log('    Result:', sliced); // [2, 3, 4]
console.log('    Original arr11:', arr11); // [1, 2, 3, 4, 5] (unchanged)
console.log('    Usage: Get a shallow copy of a portion\n');

// ==================== 3. ITERATION METHODS (Loop through array) ====================

console.log('\n--- ITERATION METHODS (Loop Through Array) ---\n');

// forEach() - Loop through each element
console.log('12. forEach(callback) - Executes function for each element');
let arr12 = [1, 2, 3];
arr12.forEach((element, index) => {
  console.log(`    Index ${index}: ${element}`);
});
console.log('    Usage: Execute code for each element\n');

// map() - Transform array elements
console.log('13. map(callback) - Creates NEW array with transformed elements');
let arr13 = [1, 2, 3, 4];
let mapped = arr13.map(x => x * 2);
console.log('    Result:', mapped); // [2, 4, 6, 8]
console.log('    Original arr13:', arr13); // [1, 2, 3, 4] (unchanged)
console.log('    Usage: Transform each element\n');

// filter() - Filter elements
console.log('14. filter(callback) - Creates NEW array with filtered elements');
let arr14 = [1, 2, 3, 4, 5, 6];
let filtered = arr14.filter(x => x % 2 === 0);
console.log('    Result:', filtered); // [2, 4, 6]
console.log('    Original arr14:', arr14); // [1, 2, 3, 4, 5, 6] (unchanged)
console.log('    Usage: Select elements based on condition\n');

// reduce() - Reduce array to single value
console.log('15. reduce(callback, initialValue) - Reduces to single value');
let arr15 = [1, 2, 3, 4, 5];
let sum = arr15.reduce((accumulator, current) => accumulator + current, 0);
console.log('    Result (sum):', sum); // 15
console.log('    Usage: Calculate aggregate value\n');

// ==================== 4. SEARCH METHODS ====================

console.log('\n--- SEARCH METHODS (Find elements) ---\n');

// indexOf() - Find index of element
console.log('16. indexOf(searchElement, fromIndex) - Returns index of first occurrence');
let arr16 = [1, 2, 3, 2, 4];
let index16 = arr16.indexOf(2);
console.log('    Result:', index16); // 1
console.log('    Usage: Find first position of element\n');

// lastIndexOf() - Find last index
console.log('17. lastIndexOf(searchElement, fromIndex) - Returns index of last occurrence');
let arr17 = [1, 2, 3, 2, 4];
let lastIndex17 = arr17.lastIndexOf(2);
console.log('    Result:', lastIndex17); // 3
console.log('    Usage: Find last position of element\n');

// includes() - Check if element exists
console.log('18. includes(searchElement, fromIndex) - Returns true/false');
let arr18 = [1, 2, 3, 4];
let hasThree = arr18.includes(3);
console.log('    Result:', hasThree); // true
console.log('    Usage: Check if array contains element\n');

// find() - Find first matching element
console.log('19. find(callback) - Returns FIRST element that matches condition');
let arr19 = [5, 12, 8, 130, 44];
let found = arr19.find(x => x > 10);
console.log('    Result:', found); // 12
console.log('    Usage: Get first element matching condition\n');

// findIndex() - Find index of matching element
console.log('20. findIndex(callback) - Returns INDEX of first match');
let arr20 = [5, 12, 8, 130, 44];
let foundIndex = arr20.findIndex(x => x > 10);
console.log('    Result:', foundIndex); // 1
console.log('    Usage: Get index of first element matching condition\n');

// some() - Check if any element matches
console.log('21. some(callback) - Returns true if ANY element matches');
let arr21 = [1, 2, 3, 4, 5];
let hasEven = arr21.some(x => x % 2 === 0);
console.log('    Result:', hasEven); // true
console.log('    Usage: Check if any element satisfies condition\n');

// every() - Check if all elements match
console.log('22. every(callback) - Returns true if ALL elements match');
let arr22 = [2, 4, 6, 8];
let allEven = arr22.every(x => x % 2 === 0);
console.log('    Result:', allEven); // true
console.log('    Usage: Check if all elements satisfy condition\n');

// ==================== 5. TRANSFORMATION METHODS ====================

console.log('\n--- TRANSFORMATION METHODS (Convert/Flatten Array) ---\n');

// join() - Convert to string
console.log('23. join(separator) - Joins elements into string');
let arr23 = [1, 2, 3, 4];
let joined = arr23.join('-');
console.log('    Result:', joined); // "1-2-3-4"
console.log('    Usage: Convert array to string\n');

// flat() - Flatten nested arrays
console.log('24. flat(depth) - Flattens nested arrays');
let arr24 = [1, [2, 3], [4, [5, 6]]];
let flattened = arr24.flat(2); // depth = 2
console.log('    Result:', flattened); // [1, 2, 3, 4, 5, 6]
console.log('    Usage: Flatten multidimensional arrays\n');

// flatMap() - Map and flatten
console.log('25. flatMap(callback) - Maps and flattens result');
let arr25 = [1, 2, 3];
let flatMapped = arr25.flatMap(x => [x, x * 2]);
console.log('    Result:', flatMapped); // [1, 2, 2, 4, 3, 6]
console.log('    Usage: Transform and flatten in one step\n');

// ==================== 6. OTHER USEFUL METHODS ====================

console.log('\n--- OTHER USEFUL METHODS ---\n');

// from() - Create array from iterable
console.log('26. Array.from(iterable) - Creates array from iterable');
let str = "hello";
let arr26 = Array.from(str);
console.log('    Result:', arr26); // ['h', 'e', 'l', 'l', 'o']
console.log('    Usage: Convert string/iterable to array\n');

// isArray() - Check if value is array
console.log('27. Array.isArray(value) - Returns true if is array');
let arr27 = [1, 2, 3];
let isArr = Array.isArray(arr27);
console.log('    Result:', isArr); // true
console.log('    Usage: Check if value is an array\n');

// of() - Create array from values
console.log('28. Array.of(element0, element1, ...) - Creates array from arguments');
let arr28 = Array.of(1, 2, 3, 4, 5);
console.log('    Result:', arr28); // [1, 2, 3, 4, 5]
console.log('    Usage: Create array from individual values\n');

// length - Get/Set array length
console.log('29. length property - Gets or sets array length');
let arr29 = [1, 2, 3, 4, 5];
console.log('    Current length:', arr29.length); // 5
arr29.length = 3;
console.log('    After setting length=3:', arr29); // [1, 2, 3]
console.log('    Usage: Get number of elements or truncate array\n');

console.log('='.repeat(100));
console.log('END OF ARRAY FUNCTIONS GUIDE');
console.log('='.repeat(100));
