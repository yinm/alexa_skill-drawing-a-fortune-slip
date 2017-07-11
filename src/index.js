'use strict';
const Alexa = require('alexa-sdk');


const SKILL_NAME      = 'Space Facts';
const DRAWING_MESSAGE = "Here's your fortune: ";
const HELP_MESSAGE    = 'You can say draw a fortune slip or, you can say exit... What can I help you with?';
const HELP_REPROMPT   = 'What can I help you with?';
const STOP_MESSAGE    = 'Goodbye!';

const FORTUNE_SLIPS = [
  'Excellent luck',    // 大吉
  'Fair luck',         // 中吉
  'Uncertain luck',    // 末吉
  'Bad luck'           // 凶
];

exports.handler = (event, context, callback) => {
  const alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

const handlers = {

};
