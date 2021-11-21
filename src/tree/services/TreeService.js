import axios from "axios";
import { SECRET_KEY, JSON_BIN_URL, SCHEMA_DOC_ID } from "../server/env";
import { findANode } from "../utils/utils";

export const makeRequest = async (method, payload = {}) => {
  const url = JSON_BIN_URL + SCHEMA_DOC_ID;
  const headers = {
    headers: {
      "secret-key": SECRET_KEY,
    },
  };

  const requestByMethod = {
    ["GET"]: () => axios.get(url + "/latest", headers),
    ["PUT"]: () => axios.put(url, payload, headers),
  };

  try {
    return await requestByMethod[method]();
  } catch (err) {
    console.log('Fail request due:', err)
    throw new Error(`Request ${method} failed`);
  }
};

export const updateTree = async (tree) => {
  try {
    return await makeRequest("PUT", tree);
  } catch (err) {
    console.error('Error trying to update the tree', err);
    throw new Error('Error trying to update the tree:');
  }
};


