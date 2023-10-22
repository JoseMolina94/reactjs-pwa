/*
 La funcion "getVisualizationStatistics", recibe:
 dataArray: array de datos que evaluara para sacar las estadisticas,
 name: nombre del parametro que le dara al valor dentro del objeto final,
 value: nombre de la propiedad o parametro de donde sacara la estadistica
*/

export const getVisualizationStatistics = ({
  dataArray,
  name = 'data',
  value = 'data'
}) => {
  console.log(dataArray)
  let response = []
  for (const item of dataArray) {
    response.push({
      [name]: item[value].length,
      id: item.id,
      name: item.name,
      image: item?.image || ""
    })
  }

  return response
}
