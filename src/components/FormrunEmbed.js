import React, { useEffect } from "react"

const FormrunEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://sdk.form.run/js/v2/embed.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div
      className="formrun-embed"
      data-formrun-form="@tech-mk-XJuJ5UF94RWiQBHdHowy"
      data-formrun-redirect="true"
    />
  )
}

export default FormrunEmbed