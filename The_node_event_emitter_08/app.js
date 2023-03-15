var event = require('events');
var util = require('util');

var person = function(name)
{
    this.name = name;
};

util.inherits(person, event.EventEmitter);

var Hamza = new person('Hamza');
var Ali = new person('Ali');
var Ahsan = new person('Ahsan');

var people = [Hamza, Ali, Ahsan];

people.forEach(function(person)
{
    person.on('speak', function(msg)
    {
        console.log(person.name + ' said: ' + msg);
    });
});

Hamza.emit('speak', 'Hey duude!');
Ali.emit('speak', 'I want a curry!');
Ahsan.emit('speak', 'I want a burger!');