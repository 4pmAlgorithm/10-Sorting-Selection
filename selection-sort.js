//place the smallest value at the beginning

//pseudo code
//1. store the first element as the smallest values you've seen so far.
//2. compare this item to the next item in the array until you find a smaller number.
//3. if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array. 
//4. if the "mininum" is not the value(index) you initially began with, swap the two values.
//5. repeat this with the next element until the array is sorted

//TIME: O(N^) better than bubble but not the best sorting solution

function selectionSort(arr){

    const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    }

    for(let i = 0 ; i <arr.length; i++){
        let min = i

        for(let j = i+1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j
            }
        }
        console.log("i", i)
        console.log("min", min)
        if(i !== min) swap(arr, i, min)
    }
    return arr
}

console.log(selectionSort([9,8,7,6]))