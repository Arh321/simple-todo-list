const obj2 = {};

const obj1 = { 
    someProp: "someValue",
    anotherProp: "anotherValue",
    etc: {
        uk: "test",
        contries: [
            "brazil",
            "united stase",
            "russia",
            {
                key: "alaki"
            }
        ]
    }
};

function cloneObj (obj1,obj2){
    for (let key in obj1) {
        obj2[key]= obj1[key]
    }
    return obj2;
}

console.log(cloneObj(obj1,obj2))