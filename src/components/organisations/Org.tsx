import { makeStyles } from "@material-ui/styles";
import React from "react";
import Avatar from "../common/Avatar";

const useStyles = makeStyles({
  orgWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '5px'
  },
  avatar: {
    marginRight: '10px',
  },
  itemDescription: {
    marginRight: '10px',
    color: '#aaa',
    fontSize: '12px'
  },
  itemData: {
    fontSize: '16px',
    color: '#222'
  },
  link: {
    color: '#222',
    textDecoration: 'none'
  }
})

const Org = (props: any) => {
  const styles = useStyles()

  const orgInfo = [
    {name: 'login', data: props.login},
    {name: 'description', data: props.description}
  ]

  const makeOrgsInfo = () => orgInfo.map((item, i) => {
    if (item.data) {
      return (
        <div key={i}>
        <span className={styles.itemDescription}>{item.name}:</span>
        <span className={styles.itemData}>{item.data}</span>
      </div>
      )
    }
  }) 
  
  return (
    <div className={styles.orgWrapper}>
      <div className={styles.avatar}>
        <Avatar radius={'80px'}  url={props.avatarUrl} />
      </div>
      <div>
        {makeOrgsInfo()}
        <div>
          <span className={styles.itemDescription}>github:</span>
          <span className={styles.itemData}>
            <a className={styles.link} target="_blank" rel="noreferrer" href={props.url}>
              {props.url}
            </a>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Org