document.addEventListener("DOMContentLoaded", function () {
   doThings();
});

function doThings() {

    myArray = [
        {id : "AAA",
        option : {name: "narrow-stunt-upto-200", info: "placeholder", image: "placeholder"}},
        {id : "AAB",
        option : {name: "narrow-stunt-upto-350", info: "placeholder", image: "placeholder"}},
        {id : "AAC",
        option : {name: "narrow-stunt-350+", info: "placeholder", image: "placeholder"}},
    ]

    let user1 = "AAB";              // these represent what the user clicked
    let user2 = "AAA"

    // this is one way to reference the item
    let result = myArray.find(item => item.id === user1);
    console.log(result.option);

    // this is a slightly shorter way to ref the item
    console.log(myArray.find(item => item.id === user2).option);

    console.log('done');
}