
exports.up = function(knex) {
    return (knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.varchar('project_name', 128)
                .notNullable()
                .unique();
            tbl.varchar('project_description', 128)
            tbl.boolean('completed')
                .notNullable()
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.varchar('task_description', 128)
                .notNullable()
                .unique();
            tbl.varchar('task_notes', 128)
            tbl.boolean('completed')
                .notNullable()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.varchar('resource_name', 128)
                .notNullable()
                .unique();
            tbl.varchar('resource_description', 128)
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('projects.id');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resources.id');
            tbl.primary(['project_id', 'resource_id']);
        })
      )
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('task_resources')
      .dropTableIfExists('resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('projects')
  };