import AppDispatcher from './AppDispatcher.js';
import EventEmitter from 'events';

const CHANGE_EVENT = 'change';

let confessions = [];

const withComments = (confessionId, comments) => confession => {
  if (confession.confessionId !== confessionId) {
    return confession;
  } else {
    return { ...confession,
      comments, commentsCount: comments.length
    };
  }
}

const withScoreUpdated = (confessionId, json) => confession => {
  if (confession.confessionId !== confessionId) {
    return confession;
  } else {
    return { ...confession,
      score: json.score
    };
  }
}

const ConfessionsStore = Object.assign({}, EventEmitter.prototype, {
  getConfessions: function() {
    return confessions;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case 'FETCH_CONFESSIONS_SUCCESS':
      confessions = [...action.confessions];
      ConfessionsStore.emitChange();
      break;

    case 'FETCH_COMMENTS_SUCCESS':
      confessions = confessions.map(withComments(action.confessionId, action.comments));
      ConfessionsStore.emitChange();
      break;

    case 'CONFESS_START_SUCCESS':
      confessions = [...confessions, action.confession];
      ConfessionsStore.emitChange();
      break;

    case 'CHANGE_CONFESSION_SCORE_SUCCESS':
      confessions = confessions.map(withScoreUpdated(action.confessionId, action.confession));
      ConfessionsStore.emitChange();
      break;

    default:
      console.log('unsupported action' + action.actionType)
  }
});

export default ConfessionsStore;