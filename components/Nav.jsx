"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
	const isUserLoggedIn = true;
	
	return (
	<nav className="flex-between w-full mb-16 pt-3">
		<Link href="/" className="flex gap-2 flex-center">
			<Image 
			src="/assets/images/logo.svg" 
			alt="Prompt Library Logo"
			width={30}
			height={30}
			className="object-contain"
			/>
			<p className="logo_text">Prompt Library</p>
		</Link>

		{/* Responsive Navigation */}
		<div className="sm:flex hidden">
			{
				isUserLoggedIn ? (
				<div className="flex gap-3 md:gap-5">
					<Link href="/create-prompt" className="black_btn">
					Create Post
					</Link>
					<button type="button" onClick={signOut} className="outline_btn">
						Sign Out
					</button>
					<Link href="/profile">
						<image 
						src="/assets/images/logo.svg" 
						width={35} 
						height={35} 
						className="rounded-full" 
						alt="profile">

						</image>
					</Link>
				</div>
				) : (
					<></>
				
			)}
		</div>
	</nav>
)
}

export default Nav