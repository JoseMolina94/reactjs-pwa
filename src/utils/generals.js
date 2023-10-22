export const getStatusStyle = (status) => {
  switch (status) {
    case "Alive":
      return {
        color: "green"
      }
    case "Dead":
      return {
        color: "red"
      }

    default:
      return null
  }
}
