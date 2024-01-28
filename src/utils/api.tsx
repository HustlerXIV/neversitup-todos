import axiosInstance from "@/middleware/axiosInstance";
import { getSession } from "@/middleware/ironSession";
import { AxiosResponse, Method } from "axios";

const BASE_URL = "https://candidate.neversitup.com/todo";

type FetchDataOptions = {
  endpoint: string;
  method: Method;
  data?: any;
};

export const fetchData = async ({
  endpoint,
  method,
  data,
}: FetchDataOptions): Promise<any> => {
  try {
    const session = await getSession();
    const response: AxiosResponse = await axiosInstance({
      method,
      url: `${BASE_URL}/${endpoint}`,
      headers: session && { Authorization: `Bearer ${session.token}` },
      data,
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
