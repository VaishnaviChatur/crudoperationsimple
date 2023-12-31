export default (state, action) => {
  switch (action.type){
    case "REMOVE_USER":
      return {
        users: state.users.filter( user => {
          return user.id !== action.payload
          
        })
      }

      case 'ADD_USER':
        return{
          users: [action.payload, ...state.users]
        }

        case 'EDIT_USER':
          const updatedUser = action.payload
          const updatedUsers = state.users.map(user => {
            if(updatedUser.id === user.id ){
              return updatedUser;
            }
            return user;
          })

          return{
            users: updatedUsers
          }


    default:
      return state;
  }

}

