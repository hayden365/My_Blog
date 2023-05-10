import React from "react";
import Image from "next/image";
import { Post } from "@/service/posts";
import formatDate from "@/utils/formatDate";
import BubbleIcon from "../Icon/BubbleIcon";
import FireIcon from "../Icon/FireIcon";
import Link from "next/link";

type Props = {
	post: Post;
	size: "small" | "large";
};

export default function PostTop({ post, size = "large" }: Props) {
	return (
		<Link href={`/posts/${post.path}`}>
			<div className="flex gap-8 items-center">
				<div
					className={`relative overflow-hidden shrink-0 border border-white z-10 ${
						size === "small" ? "w-24 h-24" : " w-40 h-40"
					}`}
				>
					<Image
						src={post.image}
						alt="post-image"
						fill
						sizes="160px"
						className="object-cover"
					/>
				</div>
				<div className="flex flex-col">
					<h3
						className={`text-base md:leading-tight font-bold text-primary m-auto ${
							size === "small" ? "text-[20px]" : "text-[20px] md:text-[28px]"
						}`}
					>
						{post.title}
					</h3>
					{size === "small" ? (
						""
					) : (
						<div className="font-serif flex gap-2 text-sm pt-2 text-gray-500">
							<span className="">{formatDate(post.date.toString())}</span>
							<span className="flex gap-1 ">
								<BubbleIcon style="w-[18px] h-[18px] text-uRed" />
								{post.comments}
							</span>
							<span className="flex gap-1 ">
								<FireIcon style="w-[18px] h-[18px] text-uRed" />
								{post.likes}
							</span>
						</div>
					)}
				</div>
			</div>
			{size === "small" ? (
				<div className="justify-center font-serif flex gap-2 text-sm pt-2 text-gray-500">
					<span className="">{formatDate(post.date.toString())}</span>
					<span className="flex gap-1 ">
						<BubbleIcon style="w-[18px] h-[18px] text-uRed" />
						{post.comments}
					</span>
					<span className="flex gap-1 ">
						<FireIcon style="w-[18px] h-[18px] text-uRed" />
						{post.likes}
					</span>
				</div>
			) : (
				""
			)}
		</Link>
	);
}
