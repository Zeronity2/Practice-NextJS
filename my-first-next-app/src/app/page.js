//localhost:3000
"use client";
import { useRouter, usePathname } from "next/navigation";


export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  return (
     <main>

      <h1>Welcome to ProductHub</h1>
      <button onClick={()=>router.push("/products")}>Push to /
      products</button>{" | "}

      <button onClick={()=>router.replace("/login")}>Replace previous url to /
      login</button>{" | "}

      <button onClick={()=>router.back("/about")}>Back</button><br />

      <p>You are on this path {pathname}</p>
      
     </main>
  );
}