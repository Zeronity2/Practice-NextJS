"use client";

import Link from "next/link"
import { useSearchParams } from "next/navigation";

export default function Navbar(){
    const params = useSearchParams();
    const q = params.get("q");

    return(
        <>
        <nav>
            <Link href="/">Home</Link>{" | "}
            <Link href="/products">Products</Link>{" | "}
            <Link href="/logout">Logout</Link>
        </nav>

        <p>The query has the key with value q as: {q}</p>
        </>
    );
}