const UserProfile=({user})=>{
      return (
        <div>{user.name}</div>
      )
}
const Wrapper=(wrappedComponent)=>{
       return ({isLoading,user})=>{
              if(isLoading) return <div>...Loading</div>
              else return <wrappedComponent user={user}/>      
       }
}
const App=()=>{
      const [isLoading,setIsLoading]=(true);
      useEffect(()=>{
         setTimeout(()=>{
              setIsLoading(false);
         },2000)
      },[])
      return (
            <Wrapper isLoading={isLoading} user={user}/>
      )
}