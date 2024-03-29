const Output = (props)=>{
  return (
    <>
    <section className="flex flex-col items-center justify-center">
      <ol>
        {
          props.hasNotFilledList.map((name)=>(
            <li>{name}</li>
          ))
        }
      </ol>
      {
        props.hasNotFilledList.length===0 &&
        <div>Everyone has filled</div>
      }
    </section>

    </>
  )
}
export default Output;
