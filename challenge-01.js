const arrayReplace = (arr, elementToReplacement, subtractionElement) => {
    arr.forEach((singleElement, index) => {
        // console.log(singleElement, index);
        if (singleElement === elementToReplacement) {
            arr[index] = subtractionElement;
        }
    });
    console.log(arr);
};

arrayReplace([4, 2, 1], 1, 3);