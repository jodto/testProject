/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Cat from '../api/cat/cat.model';
import Category from '../api/category/category.model';
import Topic from '../api/topic/topic.model';
import Event from '../api/event/event.model';


Cat.find({}).removeAsync()
  .then(() => {
    Cat.create({
      name: 'cat Tools',
      age: 133,
      favoriteColor: "blue"
    }, {
      name: 'cat Tools',
      age: 133,
      favoriteColor: "red"
    });
  });


Event.find({}).removeAsync()
  .then(() => {
    Event.create({

      name: "EVENTOP",
      date: Date(),
      location: "YOLOcity",
      userList: ["fagoot", "NiknO CALVES", "Kebab"]
    });
  });

Category.find({}).removeAsync()
  .then(() => {
    Category.create({
      title: "CategoryTest"
    });
  });


Topic.find({}).removeAsync()
  .then(() => {
    Topic.create({
      title: "General discussion",
      category: '56dd3fc6bfdaac7c240b39c9',
      postedDate: Date(),
      amountOfPost: 12,

      post: [{
        text: "Post1",
        date: Date()
      }]
    });
  });




Thing.find({}).removeAsync()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
        'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
        'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
    });
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      }, {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
      })
      .then(() => {
        console.log('finished populating users');
      });
  });
