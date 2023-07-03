export default class MainData {
    constructor(data) {
        this.id = data.id;
        this.firstName = data.userInfos.firstName;
        this.lastName = data.userInfos.lastName;
        this.age = data.userInfos.age;
        this.score = data.score;
        this.calorie = data.keyData.calorieCount;
        this.proteine = data.keyData.proteinCount;
        this.glucide = data.keyData.carbohydrateCount;
        this.lipide = data.keyData.lipidCount
    }
}