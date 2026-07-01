import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { supabase } from '@/lib/supabase';

export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Feedback'],
  endpoints: (builder) => ({
    getFeedbacks: builder.query<Feedback[], void>({
      queryFn: async () => {
        const { data, error } = await supabase
          .from('feedbacks')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
        return { data: (data as Feedback[]) || [] };
      },
      providesTags: ['Feedback']
    }),
    addFeedback: builder.mutation<Feedback, CreateFeedbackInput>({
      queryFn: async (newFeedback) => {
        const { data, error } = await supabase
          .from('feedbacks')
          .insert([newFeedback])
          .select()
          .single();

        if (error) {
          return { error: { status: 'CUSTOM_ERROR', error: error.message } };
        }
        return { data: data as Feedback };
      },
      invalidatesTags: ['Feedback']
    })
  })
});

export const { useGetFeedbacksQuery, useAddFeedbackMutation } = feedbackApi;

export interface Feedback {
  id: string;
  name: string;
  email: string;
  rating: number;
  created_at: string;
  comment: string | null;
  category: string | null;
}

export interface CreateFeedbackInput {
  name: string;
  email: string;
  rating: number;
  comment?: string;
  category?: string;
}
