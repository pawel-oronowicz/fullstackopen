const Notification = ({ notification }) => {
    if (notification.length === 0) {
      return null
    }
  
    return (
      <div className={notification.type}>
        {notification.message}
      </div>
    )
  }

  export default Notification