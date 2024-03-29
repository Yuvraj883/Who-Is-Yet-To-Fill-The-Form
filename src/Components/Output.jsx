import { IoMdCopy } from 'react-icons/io'
import { IoIosCopy } from 'react-icons/io'
import { useState } from 'react'

const Output = (props) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(props.hasNotFilledList)
      setCopied(true)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <section className='flex flex-col items-center justify-center h-full '>
        {props.hasNotFilledList.length > 0 && (
          <div className='flex flex-col w-80 shadow-md p-4'>
            {!copied && (
              <IoMdCopy
                className='ml-auto cursor-pointer'
                onClick={copyToClipboard}
              />
            )}
            {copied && <IoIosCopy className='ml-auto' />}
            <h1 className='font-bold italic'>
              These students are yet to fill the form:- <br />
            </h1>

            <ol>
              {props.hasNotFilledList.map((name) => (
                <li key={name.id}>{name}</li>
              ))}
            </ol>
          </div>
        )}
        {props.hasNotFilledList.length === 0 && (
          <div className='font-bold'>
            Congratulations!! Everyone has filled the form.
          </div>
        )}
      </section>
    </>
  )
}
export default Output
