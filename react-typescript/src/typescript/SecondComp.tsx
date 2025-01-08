export type SecondCompProps = {
  name: string
}

function SecondComp({name}:SecondCompProps) {
  return (
    <div>
      <h1>Second Component - {name}</h1>
    </div>
  )
}

export default SecondComp
