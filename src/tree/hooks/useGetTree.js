import { useEffect, useState } from "react";
import { useTreeContext } from "../providers/TreeProviders";
import { makeRequest } from "../services/TreeService";

export const useGetTree = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [errors, setErrors] = useState(null);
  const { setTree } = useTreeContext();

  const makeGetRequest = async () => {
    setLoading(true);

    try {
      const response = await makeRequest('GET');
      setTree({...response.data});
      setData(response.data);
    } catch (err) {
      setErrors(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    makeGetRequest();
  }, []);

  return {
    loading,
    data,
    errors
  };
};
