import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CreateJobApi } from "../JobApi";

export const postCreateJobQuery = () => {
    const queryClient = useQueryClient();
  
    const mutate = useMutation({
      mutationFn: (create)=>CreateJobApi(create),
      onSuccess: () =>
        queryClient.invalidateQueries({ mutationKey: ["createJob"] }),
    });
    return mutate;
}