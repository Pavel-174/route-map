import { sleep } from "../utils";

const fakeRequests = [
  {
    key: "0",
    original: [59.84660399, 30.29496392],
    destination: [59.83567701, 30.38064206],
    name: "Route 1",
  },
  {
    key: "1",
    original: [59.82934196, 30.42423701],
    destination: [59.84660399, 30.29496392],
    name: "Route 2",
  },
  {
    key: "2",
    original: [59.83567701, 30.38064206],
    destination: [55.790346, 37.39415],
    name: "Route 3",
  },
];

const requestApi = {
  async getAll() {
    await sleep(1000);
    return fakeRequests;
  },
};

export default requestApi;
