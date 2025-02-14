import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Home teste',
    description: "Teste também",
    openGraph:{
      title: 'testando novo',
      description: "Teste também",
    },
    robots:{
      index: true,
      follow: true,
      nocache: true,
      googleBot:{
        index: true,
        follow: true,
      }
    }
}

export default function Home(){
  return(
    <div>
      <h1>Teste</h1>
    </div>
  )
}