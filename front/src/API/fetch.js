import getDataApi from "../API/fetchUrl"
import { getDataMocked } from "../API/fetchData"

/**
 * 
 * @param {number} id 
 * @param {string} type
 * @returns the data from the API or the mocked data
 */

function getData(id, type) {
    if (process.env.REACT_APP_MOCKED_DATA === 'true') {
        return getDataMocked(id, type)
    } else {
        return getDataApi(id, type)
    }
}

export default getData;
