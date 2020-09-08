import actions from './actions';

const initialState = {
  forcastData: null,
  foLoading: false,
  youtubeSubscribeData: null,
  yuLoading: false,
  socialTrafficData: null,
  soLoading: false,
  twitterOverviewData: null,
  twLoading: false,
  instagramOverviewData: null,
  inLoading: false,
  linkdinOverviewData: null,
  liLoading: false,
  cashFlowData: null,
  cfLoading: false,
  incomeData: null,
  icLoading: false,
  error: null,
};

const {
  FORCAST_OVERVIEW_BEGIN,
  FORCAST_OVERVIEW_SUCCESS,
  FORCAST_OVERVIEW_ERR,

  YOUTUBE_SUBSCRIBE_BEGIN,
  YOUTUBE_SUBSCRIBE_SUCCESS,
  YOUTUBE_SUBSCRIBE_ERR,

  SOCIAL_TRAFFIC_BEGIN,
  SOCIAL_TRAFFIC_SUCCESS,
  SOCIAL_TRAFFIC_ERR,

  TWITTER_OVERVIEW_BEGIN,
  TWITTER_OVERVIEW_SUCCESS,
  TWITTER_OVERVIEW_ERR,

  INSTAGRAM_OVERVIEW_BEGIN,
  INSTAGRAM_OVERVIEW_SUCCESS,
  INSTAGRAM_OVERVIEW_ERR,

  LINKDIN_OVERVIEW_BEGIN,
  LINKDIN_OVERVIEW_SUCCESS,
  LINKDIN_OVERVIEW_ERR,

  CASH_FLOW_BEGIN,
  CASH_FLOW_SUCCESS,
  CASH_FLOW_ERR,

  INCOME_BEGIN,
  INCOME_SUCCESS,
  INCOME_ERR,
} = actions;

const chartContentReducer = (state = initialState, action) => {
  const { type, data, err } = action;
  switch (type) {
    case CASH_FLOW_BEGIN:
      return {
        ...state,
        cfLoading: true,
      };
    case CASH_FLOW_SUCCESS:
      return {
        ...state,
        cashFlowData: data,
        cfLoading: false,
      };
    case CASH_FLOW_ERR:
      return {
        ...state,
        error: err,
        cfLoading: false,
      };

    case INCOME_BEGIN:
      return {
        ...state,
        icLoading: true,
      };
    case INCOME_SUCCESS:
      return {
        ...state,
        incomeData: data,
        icLoading: false,
      };
    case INCOME_ERR:
      return {
        ...state,
        error: err,
        icLoading: false,
      };

    case LINKDIN_OVERVIEW_BEGIN:
      return {
        ...state,
        liLoading: true,
      };
    case LINKDIN_OVERVIEW_SUCCESS:
      return {
        ...state,
        linkdinOverviewData: data,
        liLoading: false,
      };
    case LINKDIN_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        liLoading: false,
      };

    case INSTAGRAM_OVERVIEW_BEGIN:
      return {
        ...state,
        inLoading: true,
      };
    case INSTAGRAM_OVERVIEW_SUCCESS:
      return {
        ...state,
        instagramOverviewData: data,
        inLoading: false,
      };
    case INSTAGRAM_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        inLoading: false,
      };

    case TWITTER_OVERVIEW_BEGIN:
      return {
        ...state,
        twLoading: true,
      };
    case TWITTER_OVERVIEW_SUCCESS:
      return {
        ...state,
        twitterOverviewData: data,
        twLoading: false,
      };
    case TWITTER_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        twLoading: false,
      };

    case FORCAST_OVERVIEW_BEGIN:
      return {
        ...state,
        foLoading: true,
      };
    case FORCAST_OVERVIEW_SUCCESS:
      return {
        ...state,
        forcastData: data,
        foLoading: false,
      };
    case FORCAST_OVERVIEW_ERR:
      return {
        ...state,
        error: err,
        foLoading: false,
      };

    case SOCIAL_TRAFFIC_BEGIN:
      return {
        ...state,
        soLoading: true,
      };
    case SOCIAL_TRAFFIC_SUCCESS:
      return {
        ...state,
        socialTrafficData: data,
        soLoading: false,
      };
    case SOCIAL_TRAFFIC_ERR:
      return {
        ...state,
        error: err,
        soLoading: false,
      };

    case YOUTUBE_SUBSCRIBE_BEGIN:
      return {
        ...state,
        yuLoading: true,
      };
    case YOUTUBE_SUBSCRIBE_SUCCESS:
      return {
        ...state,
        youtubeSubscribeData: data,
        yuLoading: false,
      };
    case YOUTUBE_SUBSCRIBE_ERR:
      return {
        ...state,
        error: err,
        yuLoading: false,
      };

    default:
      return state;
  }
};

export default chartContentReducer;
