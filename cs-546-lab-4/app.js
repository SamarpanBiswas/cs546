const todoItems = require('./todo')
const conn = require('./mongoConnection')

async function main(){
    const createdTask = await todoItems.createTask(
        "Ponder Dinosaurs",
        "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?"
    )
    console.log("------------------------- FIRST TASK --------------------------")
    console.log(createdTask)
    const createdTask1 = await todoItems.createTask(
        "Play Pokemon with Twitch TV",
        "Should we revive Helix?"
    )
    let allTasks = await todoItems.getAllTasks()
    console.log("------------------------- ALL TASKS ---------------------------")
    console.log(allTasks)
    const removeSuccess = await todoItems.removeTask(createdTask._id)
    allTasks = await todoItems.getAllTasks()
    console.log("---------------- ALL TASKS WITH ONE REMOVED -------------------")
    console.log(allTasks)
    const completedTaskSuccess = await todoItems.completeTask(createdTask1._id)
    const completedTask = await todoItems.getTask(createdTask1._id)
    console.log("---------------------- COMPLETED TASK -------------------------")
    console.log(completedTask)
    const db = await conn()
    await db.serverConfig.close()
    await console.log("done")
}
main().catch(err => {console.log(err)})
