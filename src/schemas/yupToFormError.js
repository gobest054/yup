 function yupToFormError(err, refs){
  console.log("refff",refs)
  const errorObj ={}
    err.inner.forEach((error)=>{
      errorObj[error.path]=error.message
    })
    const firstErrorField = err.inner[0]?.path

    console.log("iii",err.inner[0].path)
    console.log("arr",err.inner)
    if(firstErrorField && refs[firstErrorField]?.current){
      refs[firstErrorField].current.focus()

    }
  return errorObj
}

export default yupToFormError