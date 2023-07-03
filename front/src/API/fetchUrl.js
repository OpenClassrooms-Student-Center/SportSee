import MainData from "../class/MainData"
import Activity from "../class/Activity"
import AverageSessions from "../class/AverageSessions"
import Performance from "../class/Performance"

const API_URL = "http://localhost:3000/user";

/**
 * 
 * 
 * @param {number} userId
 * @returns promise
 *  */

async function getDataApi(id, type) {
    // on défini l'url de l'api
    let url = `${API_URL}/${id}`;
    console.log(url);

    // si type est défini alors on ajoute le type à l'url
    if (type) {
        url = `${url}/${type}`;
    }

    // on récupère les données de l'url
    const data = await fetch(url);
    // on convertit les données en json
    const fetchData = await data.json();

    let result;
    switch (type) {
        // si type est égal à "activity" alors on retourne une nouvelle instance de la classe Activity
        case "activity":
            result = new Activity(fetchData.data);
            break;
        // si type est égal à "average-sessions" alors on retourne une nouvelle instance de la classe AverageSessions    
        case "average-sessions":
            result = new AverageSessions(fetchData.data);
            break;
        // si type est égal à "performance" alors on retourne une nouvelle instance de la classe Performance    
        case "performance":
            result = new Performance(fetchData.data);
            break;
        // sinon par défaut on retourne une nouvelle instance de la classe MainData    
        default:
            result = new MainData(fetchData.data);
            break;
    }

    return result;
}
export default getDataApi;
