const todolistID1 = "qrqqwrg"
const todolistID2 = "qrqqffwrg"


 const todolist = [
    {
        id: todolistID1,
        title: "What to learn",
    },
    {
        id: todolistID2,
        title: "What to buy",
    },
]


const tasks = {
    [todolistID1]: [
        {name: "HTML", isDone: true},
        {name: "Css", isDone: true},
    ],
    [todolistID2]: [
        {name: "Beard", isDone: true},
        {name: "Beer", isDone: true},

    ],
    ["fsdfsdf"]:[]

}
console.log(tasks[todolistID1])
console.log(tasks[todolistID1][0])
console.log(tasks[todolistID1][0].name)
console.log(tasks[todolistID1][0].isDone)
console.log([...tasks[todolistID1],{name:"React",isDone:false}])



