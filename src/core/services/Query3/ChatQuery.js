import { useQuery } from "@tanstack/react-query";
import { GetChatUserApi } from "../Api3/ChatApi";


export function useGetTextUser() {
    return useQuery({
      queryKey: ["userText" ],
      queryFn: () =>  GetChatUserApi(),
    });
  }