import React from 'react'

export default function FooterComponent() {
  return (
    <footer
      style={{
        position: "fixed",

        bottom: "0",
        width: "100%",
        // margin: "auto 0",
        backgroundColor: "#1976d2",
        height: "50px",
        textAlign: "center",
        // justifyContent: "center",
      }}
    >
      <p
        style={{
          justifyContent: "center",
          textAlign: "center",
          verticalAlign: "middle",
          color: "white",
        }}
      >
        ICNX 2023
      </p>
    </footer>
  )
}
