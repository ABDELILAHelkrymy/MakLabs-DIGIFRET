export const addReducerApiCases = (builder, apiActions) => {
  for (const apiAction in apiActions) {
    builder.addCase(apiActions[apiAction].pending, (state) => {
      if (!state[apiAction]) state[apiAction] = {};
      state[apiAction].isLoading = true;
      state[apiAction].error = null;
    });

    builder.addCase(apiActions[apiAction].fulfilled, (state, action) => {
      if (!state[apiAction]) {
        state[apiAction] = {};
      }
      state[apiAction].isLoading = false;
      state[apiAction].data = action.payload.data;
    });

    builder.addCase(apiActions[apiAction].rejected, (state, action) => {
      if (!state[apiAction]) state[apiAction] = {};
      state[apiAction].isLoading = false;
      state[apiAction].error = action.payload;
    });
  }
};

export const getDefaultInitialState = () => {
  const actions = ['search', 'getAll', 'getById', 'create', 'update', 'remove'];
  const defaultInitialState = {
    isLoading: false,
    data: null,
    error: null,
  };

  return actions.reduce((acc, action) => {
    acc[action] = { ...defaultInitialState };
    return acc;
  }, {});
};