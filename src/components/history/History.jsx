function History({results}){
    const liArray=results.map(
        (item, idx)=>{
           return(
            <li key={idx}>
                
                {item}
            </li>
           ) 
        }
    )

    return(
        <>
        <ol>
           {liArray}
        </ol>
        
        </>
    )
}

export default History;