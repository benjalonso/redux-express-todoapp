import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3300' }),
    tagTypes: ['Post'],
    endpoints: builder => ({
        getTodos: builder.query({
            query: () => '/todos',
            providesTags: ['Post']
        }),
        getTodo: builder.query({
            query: (id) => `/todos/${id}`,
            providesTags: ['Post']
        }),
        addNewTodo: builder.mutation({
            query: initialTodo => ({
                url: '/todos',
                method: 'POST',
                body: initialTodo
            }),
            invalidatesTags: ['Post']
        }) ,
        updateTodo: builder.mutation({
            query: todo => ({
                url: `/todos/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            responseHandler: "text",
            invalidatesTags: ['Post']
        }),
        deleteTodo: builder.mutation({
            query: id => ({
                url: `/todos/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Post']
        }),
      
    
    })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetTodosQuery, useGetTodoQuery, useAddNewTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice