import { createSignal, type Component } from 'solid-js'

interface Props {
  initValue: number
}

export const Counter: Component<Props> = (props) => {
  const [counter, serCounter] = createSignal(props.initValue)

  return (
    <div class='mt-4'>
      <h1 class='text-3xl'>Counter</h1>
      <h3 class='text-xl mt-4 mb-2'>Value: {counter()}</h3>

      <button class='bg-blue-500 p-2 mr-2 rounded' onClick={() => serCounter((prev) => prev + 1)}>
        +1
      </button>
      <button class='bg-blue-500 p-2 mr-2 rounded' onClick={() => serCounter((prev) => prev - 1)}>
        -1
      </button>
    </div>
  )
}
