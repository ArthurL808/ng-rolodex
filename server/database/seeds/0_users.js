
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Art', username:'ArtIsKing', email:'artisking@newmail.com',address:'Earth',password:'$2a$12$9IS11ghNatEEHLbe1nyC/.y1cGbKN.QV1N6dV84UkwHAYCq2HBbC6'},
        {name: 'Ed', username:'EdTechWiz', email:'edtechwiz@newmail.com',address:'Earth',password:'$2a$12$54jwJn1lZOcb70puKU1uXucPFdto4MXmOxdBKXuJdw7YVffKQg2Xm'},
        {name: 'Brad', username:'B-rad', email:'b-rad@newmail.com',address:'Earth',password:'$2a$12$5zbDg1FcUV7bFk/bFLO.1uHAO7tRLZxhUkwu0S/4Wo0UPPs0NCCXC'}
      ]);
    });
};
