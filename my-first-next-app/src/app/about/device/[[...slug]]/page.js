//localhost:3000/about/device/...(param)
//[...slug] = to catch all url 
//[[...slug]] = optional catch all

export default async function Dynamic({params}){

   await new Promise((resolve)=>{
    setTimeout(resolve,3000);
   })
   const {slug} = await params;
   console.log(slug);

   //{
     slug : 'about'
   //}

   return(
    <h1 className="text-green-500" >You have typed the url as localhost:3000/about/device/{slug}</h1>
   );
}