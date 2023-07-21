"use client"

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
	const [copied, setCopied] = useState("");
	const defaultUserImage = "/default-user-image.png";
	const handleCopy = () => {
		setCopied(post.prompt);
		navigator.clipboard.writeText(post.prompt);
		setTimeout(() => setCopied('', 3000));
	}
  
	// Check if post.creator and post.creator.image exist before rendering the Image component
	const imageSrc = post?.creator?.image || defaultUserImage;
  
	return (
	  <div className="prompt_card">
		<div className="flex justify-between items-start gap-5">
		  <div>
			{/* Use conditional rendering to handle the image */}
			{post?.creator?.image ? (
			  <Image
				src={imageSrc}
				alt="user_image"
				width={40}
				height={40}
				className="rounded-full object-contain"
			  />
			) : (
			  <span>No image available</span>
			)}
		  </div>
		  <div className="flex flex-col">
			<h3 className="font-satoshi font-semibold text-gray-900">{post.creator?.username}</h3>
			<p className="font-inter text-sm text-gray-500">{post.creator?.email} </p>
		  </div>
		  <div className="copy_btn" onClick={handleCopy}>
			<Image src={copied === post.prompt ? 'assets/icons/tick.svg' : 'assets/icons/copy.svg'} width={12} height={12} />
		</div>
		</div>
		<p className="my-4 font-satoshi text-sm text-gray-700"> {post.prompt}</p> 
		<p className="font-inter text-sm blue_gradient cursor-pointer" onClick={() => handleClick && handleTagClick (post.tag)}>  {post.tag} </p>
	  </div>
	);
  };
  
  export default PromptCard;
  