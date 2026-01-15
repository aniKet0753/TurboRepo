interface Proptype {
  placeholder: string;
  size: "big" | "samll";
}

export function TextInput ({placeholder,size}:Proptype) {

  return <input type="text"   placeholder={placeholder} 
  style={{
    padding: size==="big" ? "12px 20px" : "8px 12px"    ,
    fontSize:"16px",
    borderRadius:"5px",
    border:"1px solid #ccc",
    width:"200px",
    placeItems:"center"
  }}>
  </input>
}