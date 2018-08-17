import $ from 'jquery';
import MessageTemplate from './client/js/views/message.html';

$('body').append(MessageTemplate({ message: 'Hello world!' }));