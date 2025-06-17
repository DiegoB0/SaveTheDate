import React from 'react'
import {Slide, ToastContainer } from 'react-toastify'

export default function ToastContainerComponent() {
  return (
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
  )
}
