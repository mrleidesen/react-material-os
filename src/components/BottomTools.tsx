import React from 'react'

export default function BottomTools() {
  return (
    <div className="h-20 w-full box-border px-8 py-2 flex items-center justify-center">
      <div className="bg-white bg-opacity-90 rounded-3xl min-w-min h-16 box-border p-4 shadow flex items-center justify-center">
        <RoundIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          </svg>
        </RoundIcon>
        <RoundIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </RoundIcon>
        <RoundIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" />
          </svg>
        </RoundIcon>
        <RoundIcon>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
          </svg>
        </RoundIcon>
      </div>
    </div>
  )
}

interface RoundIconProps {
  children?: React.ReactNode
}
const RoundIcon = (props: RoundIconProps) => {
  return (
    <div className="w-14 h-14 rounded-xl bg-black bg-opacity-5 mx-1 relative transform hover:shadow-lg hover:mx-5 hover:z-10 hover:bg-opacity-100 hover:bg-white hover:-translate-y-4 transition-all hover:scale-150 flex justify-center items-center duration-200">
      {props.children}
    </div>
  )
}