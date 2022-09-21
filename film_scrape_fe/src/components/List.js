export default function List({roles}) {

    return ( roles && Object.keys(roles) ?
             <div id="results-area">
                {   //maps over all role-types, returning list-sections 
                    Object.keys(roles).map((roleType, i) => {
                        
                        return (
                            <section className="role-list" id={`${roleType}-list`} key={roleType}>
                            <h2>{roleType}</h2>
                            <ol>
                                { // for each section, maps over the roles
                                roles[roleType].map((role, i) => {

                                    return <li className={`role ${roleType} ${i % 2 === 1 ? "odd" : "even"}`}key={`${roleType}${i}`}>{role}</li>
                                    })
                                }
                            </ol>
                            </section>
                        )
                    })
                }
             </div> 
            : null
    )
}