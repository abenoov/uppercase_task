import { useQuery } from "@tanstack/react-query";
import request from "../axiosConfig";

interface MediaContentResponse {
  Search: Array<{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }>;
  totalResults: string;
  Response: string;
}

const fetchMediaContent = async (
  contentName: string,
  pageNumber: number
): Promise<MediaContentResponse> => {
  try {
    const response = await request.get(
      `/?i=tt3896198&apikey=8523cbb8&s=${contentName}&page=${pageNumber}`
    );

    if (!response.data) {
      throw new Error("No data returned from API");
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch media content");
  }
};

export const useMediaContent = (contentName: string, pageNumber: number) => {
  return useQuery({
    queryKey: ["mediaContent", contentName, pageNumber],
    queryFn: () => fetchMediaContent(contentName, pageNumber),
  });
};
