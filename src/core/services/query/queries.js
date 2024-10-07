import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../auth/user";

export function useProductsIds() {
    return useQuery({
      queryKey: ["profile"],
      queryFn: () => getProfile(),

    });
  }