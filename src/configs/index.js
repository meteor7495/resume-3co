const isEnvDev = process.env.NODE_ENV === "development";
const MainUrl = isEnvDev
  ? "http://193.39.9.176:4000"
  : "https://api.3coexchange.com";
export const API_URL = `${MainUrl}/api/v2/`;
export const FILE_URL = `${MainUrl}`;
export const JWT_SECRET = "123456";
// https://testnet.3coexchange.com/