// import { useEffect } from 'react'
// import { UserAuth } from '../context/AuthContext'
// import { useBlogStore } from '../store/blogStore'

// export default function BlogFirstPost() {
//   const { getPost } = UserAuth()
//   const { currentPostId, currentPostInfo } = useBlogStore(state => state)

//   useEffect(() => {
//     if (currentPostId) {
//       // Solo llama a getPost si currentPostId es definido y no es una cadena vacía
//       getPost(currentPostId)
//       console.log('currentPost: ', currentPostInfo)
//     }
//   }, [])

//   return (
//     <article
//       id="blogBg"
//       className="flex flex-col justify-start items-center px-7 py-10 gap-10 mb-10"
//     >
//       <header className="flex flex-col items-center gap-3 w-full z-10">
//         <h2 className="font-bold text-3xl text-center">Meditación</h2>
//         <div className="text-fore flex justify-center gap-10 items-center w-11/12">
//           <small>Viviana Uyarte</small>
//           <small>20 Diciembre 2023</small>
//         </div>
//       </header>
//       <p className="text-[#CCCCCC] z-10 max-w-xl text-center font-medium leading-6">
//         La meditación puede producir un estado de relajamiento profundo y una
//         mente tranquila. Durante la meditación, concentras tu atención y
//         eliminas el flujo de pensamientos confusos que pueden estar llenando tu
//         mente y provocándote estrés. Este proceso puede resultar en un realce
//         del bienestar físico y emocional. La meditación es un entrenamiento de
//         la mente que busca una mayor libertad mental y emocional. Lejos de lo
//         que piensa mucha gente, ¡la meditación no tiene como objetivo controlar
//         la mente! Al contrario, la meditación sirve para aprender a ser más
//         consciente de las sensaciones y emociones que sentimos. Así, conseguimos
//         liberar esos pensamientos obstructivos que no nos dejan avanzar para
//         alcanzar una mayor tranquilidad. Una persona que practica la meditación
//         logra ser más consciente de sí mismo ¡y eso facilita también su conexión
//         con el exterior! Precisamente, la meditación entrena la mente para
//         lograr mayor concentración, claridad, positividad emocional y calma
//         interior. A través de la toma de consciencia, del aquí y ahora, somos
//         capaces de conseguir un equilibrio mental.
//       </p>
//     </article>
//   )
// }

import { useEffect, useMemo } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useBlogStore } from '../store/blogStore'

export default function BlogFirstPost() {
  const { getPost } = UserAuth()
  const { currentPostId, currentPostInfo } = useBlogStore(state => state)

  const memoizedCurrentPostId = useMemo(() => currentPostId, [currentPostId])

  useEffect(() => {
    if (memoizedCurrentPostId) {
      // Solo llama a getPost si currentPostId es definido y no es una cadena vacía
      getPost(memoizedCurrentPostId)
    }
  }, [memoizedCurrentPostId])

  return (
    <article
      id="blogBg"
      className="flex flex-col justify-start items-center px-7 py-10 gap-10 mb-10"
    >
      <header className="flex flex-col items-center gap-3 w-full z-10">
        <h2 className="font-bold text-3xl text-center">
          {currentPostInfo[0] ? currentPostInfo[0].title : 'Meditación'}
        </h2>
        <div className="text-fore flex justify-center gap-10 items-center w-11/12">
          <small>
            {currentPostInfo[0]
              ? currentPostInfo[0].profiles.username
              : 'Viviana Uyarte'}
          </small>
          <small>
            {currentPostInfo[0]
              ? new Date(currentPostInfo[0].created_at).toLocaleDateString(
                  'es-ES',
                  {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  }
                )
              : '20 Diciembre 2023'}
          </small>
        </div>
      </header>
      <p className="text-[#CCCCCC] z-10 max-w-xl text-center font-medium leading-6">
        {currentPostInfo[0]
          ? currentPostInfo[0].content
          : `La meditación puede producir un estado de relajamiento profundo y una
        mente tranquila. Durante la meditación, concentras tu atención y
        eliminas el flujo de pensamientos confusos que pueden estar llenando tu
        mente y provocándote estrés. Este proceso puede resultar en un realce
        del bienestar físico y emocional. La meditación es un entrenamiento de
        la mente que busca una mayor libertad mental y emocional. Lejos de lo
        que piensa mucha gente, ¡la meditación no tiene como objetivo controlar
        la mente! Al contrario, la meditación sirve para aprender a ser más
        consciente de las sensaciones y emociones que sentimos. Así, conseguimos
        liberar esos pensamientos obstructivos que no nos dejan avanzar para
        alcanzar una mayor tranquilidad. Una persona que practica la meditación
        logra ser más consciente de sí mismo ¡y eso facilita también su conexión
        con el exterior! Precisamente, la meditación entrena la mente para
        lograr mayor concentración, claridad, positividad emocional y calma
        interior. A través de la toma de consciencia, del aquí y ahora, somos
        capaces de conseguir un equilibrio mental.`}
      </p>
    </article>
  )
}
