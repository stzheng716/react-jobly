import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
    "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
    "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Search companies by a search term */

  static async getCompanies(nameLike) {
    const res = await this.request("companies", { nameLike });
    return res.companies;
  }

  /** Search jobs by a search term */

  static async getJobs(title) {
    const res = await this.request("jobs", { title });
    return res.jobs;
  }

  //Add more api call function
  static async login(username, password) {
    const res = await this.request(
      "auth/token",
      { username, password },
      "post"
    );
    this.token = res.token;

    return res.token;
  }

  static async signUp(username, password, firstName, lastName, email) {
    const res = await this.request(
      "auth/register",
      { username, password, firstName, lastName, email },
      "post"
    );
    this.token = res.token;
    return res.token;
  }

  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;
