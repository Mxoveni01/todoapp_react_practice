import styles from './todoitem.module.css'

export default function Todotext({item, yes}){
  let result;
  if (yes) { 
    result = <h3 className={styles.task}><s>{item}</s></h3>;
  } else {
    result = <h3 className={styles.task}>{item}</h3>;
  }
  return result;
}