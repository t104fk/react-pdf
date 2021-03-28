import { Header } from './Header'

type Props = {
  title: string
}
export const Report: React.FC<Props> = ({title}) => {
  return <div>
    <Header title={title}/>
  </div>
}
