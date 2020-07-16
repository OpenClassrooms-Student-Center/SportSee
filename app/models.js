const {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS
} = require('./data')

const getUserById = id => USER_MAIN_DATA.filter(user => user.id === id).shift()

const getUserActivityById = id => USER_ACTIVITY.filter(userActivity => userActivity.userId === id).shift()


const getUserAverageSession = id => USER_AVERAGE_SESSIONS.filter(userActivity => userActivity.userId === id).shift()

module.exports = {
    getUserById,
    getUserActivityById,
    getUserAverageSession
}
