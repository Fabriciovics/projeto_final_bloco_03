import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { listar } from '../../../service/Service'
import type Categoria from '../../../models/Categoria'
import CardCategorias from '../cardcategorias/CardCategorias'

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function buscarCategorias() {
    setIsLoading(true)
    try {
      await listar('/categorias', setCategorias)
    } catch (error: any) {
      console.log("Erro ao listar as Categorias!")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader
          color="#0D9488"
          size={80}
          speedMultiplier={1}
          aria-label="Clip-loading"
        />
      </div>
    )
  }

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col mx-4">
        {categorias.length === 0 ? (
          <span className="my-8 text-3xl text-center">
            Nenhuma categoria foi encontrada
          </span>
        ) : (
          <div className="flex flex-col gap-2">
            {categorias.map((categoria) => (
              <CardCategorias
                key={categoria.id}
                categoria={categoria}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ListarCategorias
