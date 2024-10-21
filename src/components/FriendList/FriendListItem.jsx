import css from './FriendList.module.css'

export default function FriendListItem({avatar, name, isOnline,}) {
  return (
    <>
    <img src={avatar} alt="Avatar" width="48" />
    <p className={css.nameP}>{name}</p>
    {isOnline? <p className={css.isonlineP} style = {{color: "green"}}>Online</p>:<p className={css.isonlineP} style = {{color: "red"}}>Offline</p>}
  </>
  )
}

