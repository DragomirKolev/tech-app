import { createSlice } from '@reduxjs/toolkit';

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
  },
  reducers: {
    // function for adding more comments to the already existing list
    // not sure if I was supposed to do use this for the API as it only returned
    // 5 results and the limit is 10 but with the current API I think setComments makes
    // more sense as I assume I get all of the comments from the post in one go (no param for page)
    // TLDR: If you want to see new comments being added to the list
    // replace line 21 with the contents of addComments the list will get "new" data
    addComments: (state, action) => {
        action.payload.forEach(comment => {
            state.comments.push(comment);
        });
    },
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});

export const { addComments, setComments } = commentsSlice.actions;

export const selectComments = state => state.comments.comments;

export default commentsSlice.reducer;
