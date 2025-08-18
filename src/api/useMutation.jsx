import { useState } from "react";
import { useApi } from "./ApiContext";

/**
 * Returns a function to mutate a resource, as well as some state
 * that tracks the response of that mutation request.
 */
export default function useMutation(method, resource, tagsToInvalidate) {
  const { request, invalidateTags } = useApi();

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * @param {any} body - Request body (can be null for DELETE)
   * @param {string} [overridePath] - Optional override for resource path
   */
  const mutate = async (body, overridePath) => {
    setLoading(true);
    setError(null);

    const path = overridePath || resource;

    try {
      const result = await request(path, {
        method,
        body: body ? JSON.stringify(body) : null,
      });
      setData(result);
      invalidateTags(tagsToInvalidate);
      return true;
    } catch (e) {
      console.error(`Mutation error [${method} ${path}]:`, e);
      setError(e.message);
    } finally {
      setLoading(false);
    }

    return false;
  };

  return { mutate, data, loading, error };
}



