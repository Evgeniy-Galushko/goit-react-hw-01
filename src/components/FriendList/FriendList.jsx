import css from './FriendList.module.css'
import FriendListItem from './FriendListItem'


export default function FriendList({ friends }) {
  return(<div>
    <ul className={css.ulList}>
      {friends.map(({avatar, name, isOnline, id}) => {
        return <li key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}/>
        </li>
      })}
    </ul>
  </div>
  )
}

