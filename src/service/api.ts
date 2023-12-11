import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAPI = createApi({
    reducerPath: 'userGetApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://#' }),
    endpoints: (builder) => ({
        getUserByName: builder.query<string, string>({
            query: (name) => `data${name}`,
        }),
    }),
})       