import React from 'react'
import Card from './UI/Card'
import styles from './UserList.module.css'

function UserList({users}) {
    console.log(users)
  return (
    <Card className={styles.userlist}>
            <ul>
                {users.map((user)=><li> {user.name} ({user.age} old)</li>)}
            </ul>

    </Card>
  )
}

export default UserList