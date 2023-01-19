import React from 'react'

const Stepper = () => {
  return (
    <div className="grid justify-center w-full py-12   lg:px-8">

<ol className="flex  w-full ">
    <li className="flex w-full items-center text-verth  after:content-[''] after:w-full after:h-1 after:border-b after:border-vert after:border-4 after:inline-block">
        <p className="flex items-center text-white text-xs justify-center w-10 h-10 bg-vert rounded-full lg:h-12 lg:w-12 shrink-0">
            etape 1
        </p>
    </li>
    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block after:opacity-30 ">
    <p className="flex items-center text-white text-xs justify-center w-10 h-10 bg-gray-600 rounded-full lg:h-12 lg:w-12 shrink-0">
            etape 2
        </p>
    </li>
    <li className="flex items-center w-full">
    <p className="flex items-center text-white text-xs justify-center w-10 h-10 bg-gray-600 opacity-30 rounded-full lg:h-12 lg:w-12 shrink-0">
            etape 3
        </p>
    </li>
</ol>

    </div>

  )
}

export default Stepper