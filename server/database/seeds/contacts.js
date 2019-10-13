
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {name: 'Arthur', address:'Earth',mobile: 'N/A', work: 'Dev', home:'N/A', email:'artisking@newmail.com', github: 'ArthurL808'},
        {name: 'Ed', address:'Earth',mobile: 'N/A', work: 'Dev', home:'N/A', email:'edtechwiz@newmail.com', github: 'Taseup'},
        {name: 'Brad', address:'Earth',mobile: 'N/A', work: 'Dev', home:'N/A', email:'b-rad@newmail.com', github: 'Badmckinney'}
      ]);
    });
};
