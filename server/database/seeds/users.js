
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Art', name:'ArtIsKing', email:'artisking@newmail.com',address:'Earth'},
        {username: 'Ed', name:'EdTechWiz', email:'edtechwiz@newmail.com',address:'Earth'},
        {username: 'Brad', name:'B-rad', email:'b-rad@newmail.com',address:'Earth'}
      ]);
    });
};
