import Medusa from "@medusajs/medusa-js";

const BACKEND_URL = "https://medusa-store-420.herokuapp.com";

export const createClient = () => new Medusa({ baseUrl: BACKEND_URL });

console.log("medusa is working!")