let students = [{
    "id": 1,
    "name": "Khushi",
    "age": 20,
    "major": "Computer Science"
},
{
    "id": 2,
    "name": "Rohit",
    "age": 22,
    "major": "Mathematics"
}];

export async function GET(request) {
    return Response.json(students);
}