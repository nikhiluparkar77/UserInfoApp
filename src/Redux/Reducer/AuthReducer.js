import { CURRENT_USER,USER_LIST,SINGLE_USER,USER_POSTS,USER_ALBUM,USER_TASK,SINGLE_POST,POST_COMMENT,LIST_ALBUMS,SINGLE_ALBUM,SINGLE_PHOTO } from "../Action/Type";

const initalState = {
  isAuthenticated: false,
  user: {},
  userList:[],
  singleUser:[],
  posts:[],
  singlePost:[],
  albums:[],
  singleAlbum:[],
  listAlbums:[],
  singlePhoto:[],
  tasks:[],
  comments:[]
};

export default function (state = initalState, action) {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload,
      };
      case USER_LIST:
        return {
          ...state, 
          userList: action.payload,
        };
        case SINGLE_USER:
        return {
          ...state, 
          singleUser: action.payload,
        };
        case USER_POSTS:
        return {
          ...state, 
          posts: action.payload,
        };
        case SINGLE_POST:
        return {
          ...state, 
          singlePost: action.payload,
        };
        case POST_COMMENT:
        return {
          ...state, 
          comments: action.payload,
        };
        case USER_ALBUM:
        return {
          ...state, 
          albums: action.payload,
        };
        case SINGLE_ALBUM:
          return {
            ...state, 
            singleAlbum: action.payload,
          };
        case LIST_ALBUMS:
          return {
            ...state, 
            listAlbums: action.payload,
          };
          case SINGLE_PHOTO:
          return {
            ...state, 
            singlePhoto: action.payload,
          };
        case USER_TASK:
        return {
          ...state, 
          albums: action.payload,
        };
    default:
      return state;
  }
}
