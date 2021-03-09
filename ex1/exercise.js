var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
}
// to add the key and value we use this command
object.day = "Tuesday"

// to transform js object to JSON we do the following  

var myJSON = JSON.stringify(object);
console.log(myJSON);

// to Transform back the JSON string to js Object we use following
JSON.parse(myJSON);
console.log(object);
