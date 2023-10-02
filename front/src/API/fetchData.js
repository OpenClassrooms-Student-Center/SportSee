import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./mocked-data";
import MainData from "../class/MainData";
import Activity from "../class/Activity";
import AverageSessions from "../class/AverageSessions";
import Performance from "../class/Performance";

/**
 * 
 * @param {number} id 
 * @returns new class data
 */

export function getUsersMainDataMocked(id) {
  const data = USER_MAIN_DATA.find((data) => data.id === id);
  const mainData = new MainData(data);
  return mainData;
}

/**
 * 
 * @param {number} id 
 * @returns new class data
 */

export function getUsersActivityMocked(id) {
  const data = USER_ACTIVITY.find((data) => data.userId === id);
  const activityData = new Activity(data);
  return activityData;
}

/**
 * 
 * @param {number} id 
 * @returns new class data
 */

export function getUsersAverageSessionsMocked(id) {
  const data = USER_AVERAGE_SESSIONS.find((data) => data.userId === id);
  const averageSessionsData = new AverageSessions(data);
  return averageSessionsData;
}

/**
 * 
 * @param {number} id 
 * @returns new class data
 */

export function getUsersPerformanceMocked(id) {
  const data = USER_PERFORMANCE.find((data) => data.userId === id);
  const performanceData = new Performance(data);
  return performanceData;
}

/**
 * retrieve data 
 * @param {number} id 
 * @param {string} categorie 
 * @returns promise
 */

export async function getDataMocked(id, type) {
  const mockedData = {
    "activity": getUsersActivityMocked(id),
    "average-sessions": getUsersAverageSessionsMocked(id),
    "performance": getUsersPerformanceMocked(id)
  };

  // on récupère la fonction correspondant au type de données sinon on récupère getUsersMainDataMocked
  const fetchData = mockedData[type] || getUsersMainDataMocked(id);
  return fetchData;
}