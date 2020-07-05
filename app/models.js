// We will need to add sequelize latter

const DATA = [
    {
        id: 12,
        firstName: 'Thomas',
        lastName: 'Dimnet',
        age: 31
    },
    {
        id: 18,
        firstName: 'Jérôme',
        lastName: 'Dimnet',
        age: 34
    }
]

getUserById = id => {
    return DATA.filter(user => user.id === id).shift()
}

module.exports = {getUserById}
