const u = require('uuid/v4')
const mc = require('./mongoCollections')
const td = mc.todoItems;

module.exports = {
    async createTask(title, description){
        if(!title) throw `title not provided`
        if(!description) throw `description not provided`
        if(!(typeof title == 'string')) throw `${title} invalid as title`
        if(!(typeof description == 'string')) throw `{description} invalid as description`
        const todoItem = {
            _id: u(),
            title,
            description,
            completed: false,
            completedAt: null
        }
        const items = await td()
        const task = await items.insertOne(todoItem)
        if(task.insertedCount == 0) throw `error during task creation`
        return await items.findOne({_id:todoItem._id})
    },
    async getAllTasks(){
        const items = await td()
        return await items.find().toArray()
    },
    async getTask(id){
        if(!id) throw `id not provided`
        if(!(typeof id == 'string')) throw `${id} invalid as id`
        const items = await td()
        const to_search = await items.findOne({_id:id})
        if(!to_search) throw `task ${id} not found`
        return to_search
    },
    async completeTask(taskId){
        if(!taskId) throw `taskId not provided`
        const items = await td()
        const to_update = await items.findOneAndUpdate(
            {_id: taskId},
            {
                $set: {
                    completed: true,
                    completedAt: new Date()
                }
            }
        )
        if(to_update.modifiedCount == 0) throw `task ${taskId} not found`
        return to_update.value
    },
    async removeTask(id){
        if(!id) throw `id not provided`
        if(!(typeof id == 'string')) throw `${id} invalid as id`
        const items = await td()
        const to_remove = await items.removeOne({_id:id})
        if(to_remove.deletedCount === 0) throw `task ${id} not found`
        return true
    },
}
