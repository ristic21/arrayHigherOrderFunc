 let someArray = ["orange", 2, 3, 0, 7, "orange", 7, "orange", 0, ""]
        let arrFalse = ['null', 0, '', 'false', 'undefined', 'NaN', "0", undefined, NaN, null, false]
        let numArr = [2, 6, 1, 1000, 2, 2300, 23]


        function uniqueArr(arr) {
            return arr.reduce((accumulator, current) => accumulator.includes(current) ? accumulator : [...accumulator, current], [])
        }

        function dropFalsy(someArray, arrFalse) {
            const withoutFalsy = someArray.filter(function (element) {
                return !arrFalse.includes(element);
            });
            return withoutFalsy;

        }

        function sortBySomeStandard(func, array) {
            return array.sort(func)
        }

        function returnRandArrElement(array) {
            return array[Math.ceil(Math.random() * array.length)]
        }

        function switchElements(array, element1, element2) {
            let firstIndex = array.indexOf(element1)
            let secondIndex = array.indexOf(element2)
            return [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
        }

        function cutWithFor(array, cutToPosition, startIndex) {
            if (cutToPosition > array.length) {

            }
            let niz = [];
            for (let index = startIndex; index < cutToPosition; index++) {
                niz.push(array[index]);
            }
            return niz;
        }

        function cutWithSlice(array, fromIndex, cutToPosition) {
            return array.slice(fromIndex, cutToPosition)
        }

        function findMax(array) {
            let arrOfNum = [];
            array.forEach(element => {
                if (typeof element === "number") {
                    arrOfNum.push(element);
                }
            });
            return Math.max(...arrOfNum);

        }

        function numPartition(array) {
            let arrOfNum = [];
            array.forEach(element => {
                if (typeof element === "number") {
                    arrOfNum.push(element);
                }
            });

            let evenArray = []
            let oddArray = []

            arrOfNum.forEach(element => {
                if (element === 0) {
                    return
                }
                if (element % 2 == 0) {
                    evenArray.push(element)
                } else {
                    oddArray.push(element)
                }
            });
            console.log(evenArray)
            console.log(oddArray)
        }

        function shuffle(array) {
            return array.sort(() => {
                return Math.random() - 0.3;
            })
        }

        function difference(array, array2) {
            let difference1 = array.filter(x => !array2.includes(x));
            let difference2 = array2.filter(x => !array.includes(x));
            console.log(difference1.concat(difference2))
        }

        console.log(returnRandArrElement(someArray))
        console.log(someArray)
        console.log(uniqueArr(someArray))
        console.log(dropFalsy(someArray, arrFalse))
        console.log(sortBySomeStandard((a, b) => a - b, numArr))
        console.log(someArray)
        switchElements(someArray, "orange", 2)
        console.log(someArray)

        console.log(cutWithFor(someArray, 8, 2))
        console.log(cutWithSlice(someArray, 4, 8))
        console.log(findMax(someArray))
        console.log(findMax(numArr))
        numPartition(someArray)
        difference(someArray, numArr)
        console.log(shuffle(someArray))
