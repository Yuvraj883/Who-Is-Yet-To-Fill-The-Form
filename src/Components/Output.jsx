const Output = (props)=>{
  return (
    <>
    <section>
      <ol>
        {
          props.hasNotFilledList.map((name)=>(
            <li>{name}</li>
          ))
        }
      </ol>
    </section>

    </>
  )
}
export default Output;
