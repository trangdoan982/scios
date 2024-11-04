import { useState } from "react";

export default function NewsletterSubscription() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		try {
			const response = await fetch("/api/subscribe", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			if (!response.ok) throw new Error("Subscription failed");

			const data = await response.json();
			if (!data.success) throw new Error("Subscription failed");

			setStatus("success");
			setEmail("");
		} catch (error) {
			setStatus("error");
			console.error("Subscription error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="w-full max-w-md">
			<div className="flex flex-col gap-2">
				<label htmlFor="email" className="font-medium">
					Subscribe to our newsletter
				</label>
				<div className="flex gap-2">
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Enter your email"
						className="flex-1 px-4 py-2 border border-dark-grey rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-1"
						required
					/>
					<button
						type="submit"
						className="px-4 py-2 bg-accent text-black text-sm rounded-lg font-bold"
					>
						{status === "loading" ? "Subscribing..." : "Subscribe"}
					</button>
				</div>
				{status === "success" && (
					<p className="text-green-600 text-sm">Successfully subscribed!</p>
				)}
				{status === "error" && (
					<p className="text-red-600 text-sm">
						Subscription failed. Please try again.
					</p>
				)}
			</div>
		</form>
	);
}
