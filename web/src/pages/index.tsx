import { api } from "../lib/axios";
import Image from "next/image"
import mobilePreview from '../assets/mobile-preview.png'
import logo from '../assets/logo.svg'
import usersAvatarExample from '../assets/users-avatar-example.png'
import iconCheck from '../assets/check-icon.svg'

interface HomeProps {
  poolCount: number
}

export default function Home(props: HomeProps) {
  return (
    <div className=" h-screen flex items-center justify-center my-[50px]">
      <main className="text-white max-w-lg mx-4 mr-[110px]">
        <Image
          src={logo}
          alt="Logo do projeto"
          quality={100}
        />

        <h1 className="mt-14 text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExample} alt="" quality={100} />

          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas já estão usando!
          </strong>
        </div>

        <form className="mt-10 flex gap-2">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
            type="text"
            name="text"
            id="text"
            required
            placeholder="Qual é o nome do seu bolão?"
          />

          <button
            className="bg-nlw-500 px-6 py-4 rounded uppercase text-gray-900 font-bold text-sm hover:bg-nlw-600"
            type="submit"
          >Criar meu bolão</button>
        </form>

        <p
          className="mt-4 text-sm text-gray-300 max-w-[400px] leading-relaxed">
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 divide-x-[1px] divide-gray-600 grid grid-cols-2 text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheck} alt="" quality={100} />

            <div className="flex flex-col"> {/*2.034*/}
              <span className="font-bold text-2xl">+{props.poolCount}</span>
              <span>Bolões criados</span>
            </div>
          </div>

          <div className="flex items-center gap-6 pl-[69px]">
            <Image src={iconCheck} alt="" quality={100} />

            <div className="flex flex-col">
              <span className="font-bold text-2xl">+192.847</span>
              <span>Palpites enviados</span>
            </div>
          </div>
        </div>
      </main>

      <div>
        <Image
          src={mobilePreview}
          alt="Dois celulares exibindo uma prévia da aplicação móvel do projeto"
          quality={100}
        />
      </div>
    </div>
  )
}


// export const getServerSideProps = async () => {
//   const res = await fetch('http://localhost:3333/pools/count')
//   const data = await res.json()

//   return {
//     props: {
//       poolCount: data.count,
//     }
//   }
// }

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

export const getServerSideProps = async () => {
  const [
    poolCountResponse,
    guessCountResponse,
    userCountResponse
  ] = await Promise.all([
    api.get('pools/count'),
    api.get('guesses/count'),
    api.get('users/count'),
  ]);

  return {
    props: {
      poolCount: poolCountResponse.data.count,
      guessCount: guessCountResponse.data.count,
      userCount: userCountResponse.data.count,
    }
  }
}