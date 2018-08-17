import $ from 'jquery';
import MessageTemplate from 'message.html';

$('body').append(MessageTemplate({ message: 'Hello world!' }));