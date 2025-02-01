////////////////////////check session 

async function  checkSession() {
  
    try {
      const { data, error } = await supabase.auth.getSession()
    const authPages = ["/signup.html","/dashbaord.html"];
    const currentPage = window.location.pathname;
    const isAuthPage = authPages.some((page)=> page.includes(currentPage));
    const {session} = data;
    
    if(session){
      if(isAuthPage){
     window.location.href = "/dashbaord.html"
      }
     
    }else{
      if(!isAuthPage){
        window.location.href = "/signup.html"
      }
    }
    if(error) throw error
    
    } catch (error) {
      console.log(error);
      
    }
    }
    
    
    
    window.onload = checkSession()