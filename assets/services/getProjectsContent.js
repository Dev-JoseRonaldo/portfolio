export const getProjectsContent = () => {
  return new Promise((resolve, reject) => {
    fetch('/assets/script/data.json')
      .then(response => {
        return response.json()
      })
      .then(result => {
        resolve(result.data.projects)
      })
      .catch(error => {
        reject(error.message)
      })
  })
}
