import css from './FriendList.module.css'


export default function FriendList({ friends }) {
  return(<div>
    <ul className={css.ulList}>
      {friends.map(({avatar, name, isOnline, id}) => {
        return <li key={id}>
          <img src={avatar} alt="Avatar" width="48" />
          <p className={css.nameP}>{name}</p>
          {isOnline? <p className={css.isonlineP} style = {{color: "green"}}>Online</p>:<p className={css.isonlineP} style = {{color: "red"}}>Offline</p>}
        </li>
      })}
    </ul>
  </div>
  )
}

