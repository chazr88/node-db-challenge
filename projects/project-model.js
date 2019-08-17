const db = require('../data/db-config.js');

module.exports = {
    find, 
    findById, 
    //findResources, 
    // findProjects, 
     add, 
    // addResource,
    // addProject,
    // update, 
    // remove
}

function find() {
    console.log("hit")
    return db('projects')
}

function findById(id) {
    return db('projects')
    .where({id})
    .first()
}

// function findResources(scheme_id) {
//     return db('resources as re')//step
//     .join('schemes as sc', 'sc.id', 're.scheme_id')//scheme
//     .select('st.id', 'sc.scheme_name', 'st.instructions')
//     .where({scheme_id})
// }

async function add(project) {
    console.log("hit")
    const [id] = await db('projects').insert(project)
    return findById(id)
}

async function update(change, id) {
    await db('schemes')
    .where({id})
    .update(change);
}

function remove(id) {
    return db('schemes')
    .where({id})
    .del();
}