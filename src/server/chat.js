// export const chatBot = async question => {
//   try {
//     const API_URL = import.meta.env.VITE_API_URL
//     const response = await fetch(API_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ content: question })
//     })

//     if (!response.ok) {
//       throw new Error('Error en el llamado a la api')
//     }

//     const data = await response.json()
//     console.log(data)
//     return data
//   } catch (error) {
//     console.log('Error en el llamado a la api: ', error)
//   }
// }
