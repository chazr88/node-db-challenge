const db = require('../data/db-config.js');

module.exports = {
    find, 
    findProjectById,
    add, 
    findTasks, 
    findTasksById,
    addTask,
    findResources,
    findResourcesById, 
    addResource,

}

///////////////////////////
//Projects///////////////
function find() {
    return db('projects')
}

function findProjectById(id) {
    return db('projects')
    .where({id})
    .first()
}


async function add(project) {
    const [id] = await db('projects').insert(project)
    response = findProjectById(id)
    if(response.completed === 1) {
        response.completed = true
        return response
    } else {
        response.completed = false
        return response
    }
}
///////////////////////////// 


/////////////////////
//Tasks/////////////
function findTasks() {
    return db('tasks')
}

function findTasksById(id) {
    return db('tasks')
    .where({id})
    .first()
}

async function addTask(task) {
    console.log(task)
    const [id] = await db('tasks').insert(task)
    response = findTasksById(id)
    if(response.completed === 1) {
        response.completed = true
        return response
    } else {
        response.completed = false
        return response
    }
}
///////////////////////


/////////////////////
//Resources/////////////
function findResources() {
    return db('resources')
}

function findResourcesById(id) {
    return db('resources')
    .where({id})
    .first()
}

async function addResource(resource) {
    const [id] = await db('resources').insert(resource)
    return findResourcesById(id)
}
///////////////////////