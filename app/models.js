const {
    USER_MAIN_DATA,
    USER_LAST_SESSIONS
} = require('./data')

const getUserById = id => USER_MAIN_DATA.filter(user => user.id === id).shift()

const getUserLastSession = userId => {
    return USER_LAST_SESSIONS.filter(session => session.userId === userId)
}

module.exports = {
    getUserById,
    getUserLastSession
}
