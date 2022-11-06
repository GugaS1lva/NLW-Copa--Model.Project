[ NOTES ] >>>

// import { api } from "../lib/axios";
// import axios from "axios";



// export const api = axios.create({
//   baseURL: 'http://127.0.0.1/pools/count'
// })

// AJUDA DO MANO NO DISCORD:
// export const getServerSideProps = async () => {
//   const baseURL = 'http://localhost:3333/'

//   const [poolCountResponse, guessCountResponse, userCountResponse] = await Promise.all([
//     fetch(baseURL +'pools/count'),
//     fetch(baseURL +'guesses/count'),
//     fetch(baseURL +'users/count'),
//   ])

//   const dataPool = await poolCountResponse.json()
//   const dataGuess = await guessCountResponse.json()
//   const dataCount = await userCountResponse.json()

//   return{
//     props: {
//       poolCount: dataPool.count,
//       guessCount: dataGuess.count,
//       userCount: dataCount.count,
//     }
//   }
// }

// VERSÃO DO DIEGO:
// export const getServerSideProps = async () => {
//   const [
//     poolCountResponse,
//     guessCountResponse,
//     userCountResponse
//   ] = await Promise.all([
//     api.get('pools/count'),
//     api.get('guesses/count'),
//     api.get('users/count'),
//   ]);

//   return {
//     props: {
//       poolCount: poolCountResponse.data.count,
//       guessCount: guessCountResponse.data.count,
//       userCount: userCountResponse.data.count,
//     }
//   }
// }