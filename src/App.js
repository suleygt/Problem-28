import { MinusIcon } from '@heroicons/react/24/solid'
import { useReducer } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

  
/// Tamamen fonksiyonel bir counter oluşturun
// Sayıyı görüntülemeyi ve sayıyı artırmayı mümkün kılın
export default function CountUp() {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="text-center p-8">
      <h3 className="text-lg font-semibold text-gray-900">Şu anki sayı... {count}</h3>
      <div className="mt-6">
        <button onClick={() => dispatch({ type: 'decrement' })} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <MinusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
        </button>
        <button onClick={() => dispatch({ type: 'increment' })} className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}